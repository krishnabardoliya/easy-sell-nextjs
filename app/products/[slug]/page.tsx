import { createClient } from '@/superbase/client';
import { getImageUrl, supabase } from '@/utils';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata(
  { params }: { params: { slug: string } },
): Promise<Metadata> {
  const id = params.slug
 
  const {data:productDetails, error} = await supabase
.from('easysell-products')
.select()
.match({id:params.slug})
.single();

  return {
    title: productDetails.name,
    description: productDetails.description,
    openGraph: {
      images: [getImageUrl(productDetails.imageUrl)],
    },
    alternates: {
      canonical: `/products/${productDetails.id}`,
    }
  }
}

export async function generateStaticParams() {
    const {data: products, error} = await supabase.from("easysell-products")
    .select();

    if(!products) {
        return [];
    }
   
    return products.map((item: {
        id: string;
    } & {
        [key: string]: any;
    }) => ({
      slug: item.id,
    }))
}

export default async function page({ params }: { params: { slug: string } }) {



const {data:productDetails, error} = await supabase
.from('easysell-products')
.select()
.match({id:params.slug})
.single();

if (!productDetails) {
    notFound();
  }

  return (
    <div className="px-12 py-12 max-w-7xl mx-auto min-h-screen">
      <div className="flex justify-between mb-6 lg:mb-12">
        <h2 className="text-3xl lg:text-4xl items-start uppercase">
          {productDetails.name}
        </h2>
        <a
          href={`mailto:${productDetails.contactEmail}?subject=Interested in purchasing ${productDetails.name}`}
          className="bg-orange-900 hover:bg-orange-950 text-white px-4 py-2 rounded-md hidden lg:flex"
        >
          Contact the Seller!
        </a>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-4">
        <div className="flex items-center justify-center">
          <Image
            className="rounded-lg shadow-xl border-4 border-gray-200 p-2 lg:min-w-[40rem] lg:min-h-[30rem]"
            width={600}
            height={600}
            alt={productDetails.name}
            src={getImageUrl(productDetails.imageUrl)}
          />
        </div>
        <div className="bg-gray-953 p-6 w-full">
          <label className="font-bold">💰 PRICE:</label>
          <p className="text-gray-800 text-2xl lg:text-3xl pt-4 py-6 text-center border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
            ${productDetails.price}
          </p>

          {productDetails.boost && (
            <div className="pt-4">
              <label className="font-bold">⭐️ PREMIUM PRODUCT:</label>
              <p className="text-gray-800 text-2xl lg:text-3xl py-6 text-center border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
                Yes
              </p>
            </div>
          )}

          <a
            href={`mailto:${productDetails.contactEmail}`}
            className="bg-orange-900 hover:bg-orange-950 text-white px-4 py-2 rounded-md flex lg:hidden w-full items-center justify-center my-12"
          >
            Contact the Seller!
          </a>
        </div>
      </div>
      <div className="pt-6">
        <label className="font-bold pb-2 border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
          📝 DESCRIPTION:
        </label>
        <p className="text-gray-600 text-lg my-4 pt-4 pb-6 ">
          {productDetails.description}
        </p>
      </div>
    </div>
  );
}
