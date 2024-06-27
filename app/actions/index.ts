'use server';
import { z } from 'zod';
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
];

const schema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.string().min(1),
    contactEmail: z.string().email(),
    imageUrl: z
        .any()
        .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
        .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
            'Only .jpg, .jpeg, .png and .webp formats are supported.'
        ),
});

export async function sellYourItemAction(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        contactEmail: formData.get('contactEmail'),
        description: formData.get('description'),
        name: formData.get('name'),
        price: formData.get('price'),
        imageUrl: formData.get('imageUrl'),
    })


    if (!validatedFields.success) {
        return {
            type: 'error',
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Product.',
        }
    }

    try {
        const { name, description, price, imageUrl, contactEmail } =
            validatedFields.data;

        const cookieStore = cookies()

        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll() {
                        return cookieStore.getAll()
                    },
                },
            }
        )
        const fileName = `${Math.random()}-${imageUrl.name}`;
        const { data, error } = await supabase.storage.from('easy-sell-product-images').upload(fileName, imageUrl, {
            cacheControl: '3600',
            upsert: false,
        })

        if (error) {
            return {
                type: 'error',
                message: 'Database Error: Failed to Create Product.1',
            }
        }

        const { insertError } = await supabase.from("easysell-products")
            .insert({...validatedFields.data,imageUrl: data.path} )

            if(insertError) {
                return {
                    type: 'error',
                    message: 'Database Error: Failed to Create Product.2',
                }
            }

            revalidatePath("/");


    } catch (error1) {
        return {
            type: 'error',
            message: 'Database Error: Failed to Create Product.3',
        }
    }
    redirect("/");
}