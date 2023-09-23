import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import HomePage from "@/components/Home";
import BounceLoader from "react-spinners/BounceLoader";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      const timeId = setTimeout(() => {
          // After 3 seconds set the show value to false
          setLoading(false);
      }, 2000);

      return () => {
          clearTimeout(timeId);
      };
  }, []);
  return (
    <>
     {loading ? (
                <div className='flex justify-center items-center h-screen'>
                    <BounceLoader color='#416ab2' loading={loading} />
                </div>
            ) : (
              <Layout>
              <HomePage />
            </Layout>
            )}
      
    </>
  );
}
