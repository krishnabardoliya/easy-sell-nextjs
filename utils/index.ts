import { createClient } from "@supabase/supabase-js";

export const getCanonicalUrl = () => {
    return process.env.NODE_ENV !== 'production'
      ? 'http://localhost:3000'
      : 'https://easy-sell-app.vercel.app/';
  };
  
  export const getImageUrl = (imageUrl: string) => {
    return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/easy-sell-product-images/${imageUrl}`;
  };

  const supabaseUrl = "https://jlzvktrtmclopylirnmh.supabase.co"
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsenZrdHJ0bWNsb3B5bGlybm1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzMTI1OTgsImV4cCI6MjAzNDg4ODU5OH0.BcbYZKDO18iKSV4_kGfU_huz-4Sinc27C6gsMzj3EtE"
  export const supabase = createClient(supabaseUrl, supabaseAnonKey)
  
