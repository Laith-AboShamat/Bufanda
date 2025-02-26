import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import ImageSlider from "@/components/ImageSlider";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import HijabTutorial from "@/components/HijabTutorial";

export default function Home() {
  return (
    <>
      <ImageSlider />
      <Collections />
      <ProductList />
      <AboutUs/>
      <HijabTutorial/>
      <Footer />
    </>
  );
}

export const dynamic = "force-dynamic";