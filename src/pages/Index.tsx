import FarmHero from "@/components/FarmHero";
import FarmAbout from "@/components/FarmAbout";
import FarmProducts from "@/components/FarmProducts";

const Index = () => {
  return (
    <div className="min-h-screen">
      <FarmHero />
      <FarmAbout />
      <FarmProducts />
    </div>
  );
};

export default Index;
