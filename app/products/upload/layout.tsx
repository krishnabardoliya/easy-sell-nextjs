import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Easy Sell - Upload",
    description: "Upload your product easily on easy sell",
    alternates: {
      canonical: `/products/upload`,
    }
  };

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
