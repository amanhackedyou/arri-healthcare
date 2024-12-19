import Header from "@/components/header/Header";
import Certification from "@/components/landing/certification/Certification";
import Hero from "@/components/landing/hero/Hero";
import WhyChooseUs from "@/components/landing/why-choose-us/WhyChooseUs";
import ServiceWeOffer from "@/components/landing/services-we-offer/ServicesWeOffer";
import OurCareModel from "@/components/landing/our-care-model/OurCareModel";
import BringOwnCareGiver from "@/components/landing/bring-own-care-giver/BringOwnCareGiver";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <hr className="border-slate-400 border-t-[1px] mx-4" />
      <Certification />
      <WhyChooseUs />
      <ServiceWeOffer />
      <OurCareModel />
      <BringOwnCareGiver />
    </div>
  );
}
