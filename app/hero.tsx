import { Card } from "@/components/Card";
import { BentoGrid } from "@/components/BentoGrid";
import { ActivityFeed } from "@/components/ActivityFeed";
import { Carousel } from "@/components/Carousel";
import { GitHubButton } from "@/components/GitHubButton";

export default function Home() {
  const newsletterItems = [
    {
      id: 1,
      title: "Robotics Research Update",
      image: "/placeholder-robot.png",
      link: "/newsletter/robotics",
      date: "Oct 26, 2023",
      description: "New AI-driven robotics framework for UCSD campus"
    },
    {
      id: 2,
      title: "Aerospace Innovation",
      image: "/placeholder-aero.png",
      link: "/newsletter/aerospace",
      date: "Oct 25, 2023",
      description: "Breakthrough in hypersonic propulsion systems"
    },
    {
      id: 3,
      title: "Sustainable Energy Project",
      image: "/placeholder-energy.png",
      link: "/newsletter/sustainability",
      date: "Oct 24, 2023",
      description: "Solar-powered microgrid for campus labs"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar - GitHub-style dropdown */}
      <nav className="sticky top-0 z-50 bg-[#0d1117] backdrop-blur-sm border-b border-[#30363d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="mr-2">
                <GitHubButton size="sm" variant="outline" icon="github" />
              </div>
              <span className="font-bold text-xl">MAE UCSD</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-[#e0e0e0] hover:text-white">Undergraduate</a>
              <a href="#" className="text-[#e0e0e0] hover:text-white">Graduate</a>
              <a href="#" className="text-[#e0e0e0] hover:text-white">Research</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 flex items-center justify-center">
        <div className="max-w-6xl mx-auto">
          <Carousel items={newsletterItems} />
        </div>
      </section>

      {/* Research & Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Research Areas</h2>
          <BentoGrid />
        </div>
      </section>

      {/* Faculty/News Feed */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Activity</h2>
          <ActivityFeed />
        </div>
      </section>
    </div>
  );
}
