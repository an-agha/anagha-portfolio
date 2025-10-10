import  Contact  from "@/components/landing/contact";
import Hero from "@/components/landing/dev2/Hero";
import Experience from "@/components/landing/dev2/experience";
import Works from "@/components/landing/dev2/works";
import About from "@/components/landing/dev2/about/page";

export default function Home() {
  return (
    <main className="max-w-screen flex flex-col items-center min-h-screen bg-darkBackground">
      <div className="bg-darkBackground border-r-1 border-l-1 border-dashed border-borderDark  h-40 w-[90%] max-w-[850px]" />
      <section className=" border-t-1 border-b-1 border-dashed border-borderDark">
        <Hero />
      </section>
      <div className="bg-darkBackground border-r-1 border-l-1 border-dashed border-borderDark  h-40 w-[90%] max-w-[850px]" />
      <section className=" border-t-1 border-b-1 border-dashed border-borderDark">
        <About />
      </section>
      <div className="bg-darkBackground border-r-1 border-l-1 border-dashed border-borderDark  h-40 w-[90%] max-w-[850px]" />
      <section className=" border-t-1 border-b-1 border-dashed border-borderDark">
        <Experience/>
      </section>
      <div className="bg-darkBackground border-r-1 border-l-1 border-dashed border-borderDark  h-40 w-[90%] max-w-[850px]" />
      <section className=" border-t-1 border-b-1 border-dashed border-borderDark">
        <Works />
      </section>
      <Contact />
    </main>
  );
}
