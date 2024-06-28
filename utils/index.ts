import { createClient } from "@supabase/supabase-js";

export const getCanonicalUrl = () => {
    return process.env.NODE_ENV !== 'production'
      ? 'http://localhost:3000'
      : 'https://easy-sell-app.vercel.app/';
  };
  
  export const getImageUrl = (imageUrl: string) => {
    return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/easy-sell-product-images/${imageUrl}`;
  };

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
  export const supabase = createClient(supabaseUrl, supabaseAnonKey)
  
