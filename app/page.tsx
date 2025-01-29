import Hero from "@/components/hero";
import About from "@/components/about";

const Home = () => {
  return (
    <main className="relative w-full flex flex-col">
      <Hero />
      <About />
    </main>
  );
};

export default Home;
