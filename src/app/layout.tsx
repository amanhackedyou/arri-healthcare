import type { Metadata } from "next";
import { Roboto, Bree_Serif, Poppins, Rubik, Nunito, Assistant } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import localFont from 'next/font/local'
import { Toaster } from "react-hot-toast";


// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ["100", '300', '400', '500', '700', '900']
// });


// const rubik = Rubik({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700', '800', '900']
// });

// const breeSerif = Bree_Serif({
//   subsets: ['latin'],
//   // weight: ['400', '500', '700', '900']
//   weight: "400"
// })

// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ["100", '300', '400', '500', '700', '900']
// })

// const bree = Bree_Serif({
//   subsets: ['latin'],
//   weight: ["400"]
// })


// const primaryFont = localFont({
//   src: [
//     path: './fonts/font_1.woff2',

//   ],
//   display: 'swap'
// })
// const seconderyFont = localFont({
//   src: './fonts/font_2.woff2',
//   display: 'swap'
// })


const nunito = Nunito({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"]
});

const assistantFont = Assistant({
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "Arri Healthcare Services",
  keywords: ['HomeCare', 'InHomeCare', 'SupportiveCare', 'ElderlyCare', 'SeniorCare', 'ArriHealthcare', 'HomeHealth', 'Caregiving', 'AutismSupport', 'DisabilityServices', 'IndependentLiving', 'CommunitySupport', 'DisabilitySupport', 'SpecialNeedsCare', 'CompassionateCare'],
  description: "Arri Healthcare Services is a developmental disability and caregiving agency serving individuals and families in Columbus OH and its surrounding cities. Get in touch with us to know more about our services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html style={{
      scrollBehavior: "smooth"
    }} lang="en">
      <body
        className={`${assistantFont.className} antialiased`}
      >
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
