import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="container py-24 space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
      </div>

      {/* Content */}
      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <p className="text-xl text-muted-foreground">
          Hi, I&apos;m Pranoy Majumdar, a Full Stack Developer passionate about creating 
          exceptional digital experiences.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">My Journey</h2>
          <p>
            With over [X] years of experience in web development, I&apos;ve had the 
            opportunity to work on diverse projects that have shaped my expertise 
            in building modern web applications.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Technical Expertise</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Frontend Development: React, Next.js, TypeScript</li>
            <li>Backend Development: Node.js, Python, PostgreSQL</li>
            <li>DevOps & Cloud: AWS, Docker, CI/CD</li>
            <li>UI/UX Design: Figma, Adobe XD</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Work Philosophy</h2>
          <p>
            I believe in writing clean, maintainable code and creating intuitive user 
            experiences. My approach combines technical excellence with creative 
            problem-solving to deliver solutions that exceed expectations.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Beyond Coding</h2>
          <p>
            When I&apos;m not coding, you&apos;ll find me [Your Interests/Hobbies]. I&apos;m also 
            passionate about [Other Interests] and constantly learning new technologies.
          </p>
        </div>
      </div>
    </main>
  )
} 