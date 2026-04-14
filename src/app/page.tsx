import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Service from "@/components/sections/Service";
import Profile from "@/components/sections/Profile";
import QA from "@/components/sections/QA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Service />
        <Profile />
        <QA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
