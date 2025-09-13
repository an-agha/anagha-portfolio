import Hero from "@/components/landing/Hero";
import ToolAndSkills from "@/components/landing/toolandskills";
import Works from "@/components/landing/works";
import Experience from "@/components/landing/experience";

export default function Home() {
  return (
    <main className="max-w-screen flex flex-col items-center min-h-screen bg-background">
      <Hero />
      <ToolAndSkills />
      <Works />
      <Experience />
    </main>
  );
}
