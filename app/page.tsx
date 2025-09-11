import Hero from "@/components/landing/Hero";
import ToolAndSkills from "@/components/landing/toolandskills";
import Works from "@/components/landing/works";

export default function Home() {
  return (
    <main className="max-w-screen min-h-screen bg-background">
      <Hero />
      <ToolAndSkills />
      <Works />
    </main>
  );
}
