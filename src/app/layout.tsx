// app/layout.tsx
import type { Metadata } from "next";
import { getEvents } from "@/controller/eventController";
import Nav from "@/components/nav/nav";
import Footer from "@/components/footer/footer";
import localFont from "next/font/local";
import "./globals.css";
import OrderProvider from "@/provider/orderProvider";
import OrderDialog from "@/components/dialog/orderDialog";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
        

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Moveboks",
  description: "Lej en Soundboks til dit næste arrangement gennem Moveboks app – perfekt til festivaler og events.",
  keywords: "Leje Soundboks, lej en Soundboks, lydudlejning, bryllup, konfirmation, DJ, festival, Roskilde Festival, Smukfest, events, julefrokost, nytårsfest, Danmark",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const events = await getEvents();
  return (
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <PrimeReactProvider>
            <OrderProvider>
                <Nav events={events} />
                <main>{children}</main>
                <Footer events={events}/>
                <OrderDialog/>
            </OrderProvider>
          </PrimeReactProvider>
        </body>
      </html>
  );
}
