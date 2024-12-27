import BenefitsSection from "@/components/benefits";
import FAQSection from "@/components/Faq";
import Header from "@/components/Header";
import Depoimentos from "@/components/Depoimentos";
import Image from "next/image";
import Divider from "@/components/divider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      
      <Header />
      <Depoimentos />
      <BenefitsSection />
      <Divider />
      <FAQSection />
      <Footer />
    </div>
  );
}
