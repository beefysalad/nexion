'use client'

import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Check,
  Code2,
  Copy,
  Database,
  Github,
  ShieldCheck,
  Terminal,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { useState } from 'react'

export default function Home() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(
      'npx create-next-app -e https://github.com/beefysalad/next-prisma-template'
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-neutral-950 dark:text-neutral-50 dark:selection:bg-neutral-50 dark:selection:text-neutral-900">
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <section className="relative overflow-hidden px-6 pt-32 pb-24 md:pt-44 md:pb-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />
        </div>

        <div className="relative mx-auto max-w-5xl space-y-12 text-center">
          <div className="space-y-8">
            <h1 className="text-6xl font-black tracking-tight md:text-8xl lg:text-9xl">
              Next Template
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-b from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-transparent dark:from-neutral-100 dark:via-neutral-400 dark:to-neutral-600">
                  By Patrick
                </span>
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl dark:text-neutral-400">
              Full-stack Next.js 16 starter with auth, database, type safety,
              and dark mode. Everything configured so you can build your pet
              projects right away.
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-6 flex flex-col items-center gap-10 delay-300 duration-1000">
            <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <button
                onClick={handleCopy}
                className="group relative h-14 w-full rounded-full bg-zinc-900 px-10 font-bold text-white transition-all hover:bg-zinc-800 hover:shadow-2xl hover:shadow-zinc-900/30 active:scale-95 sm:w-auto dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200 dark:hover:shadow-neutral-50/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {copied ? 'Copied to Clipboard' : 'Get Started Now'}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <Link
                href="https://github.com/beefysalad/next-prisma-template"
                target="_blank"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 w-full rounded-full border-2 border-zinc-200 px-10 font-bold transition-all hover:bg-zinc-50 hover:shadow-lg active:scale-95 sm:w-auto dark:border-neutral-800 dark:hover:bg-neutral-900"
                >
                  <Github className="size-5" />
                  GitHub Repository
                </Button>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex w-full flex-wrap items-center justify-center gap-3 rounded-2xl border border-zinc-100 bg-zinc-50/30 p-1 backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-900/30">
                <Link href="/register" className="flex-1 sm:flex-none">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-11 w-full rounded-xl px-6 font-bold text-zinc-600 transition-all hover:bg-white hover:text-zinc-900 hover:shadow-sm sm:w-auto dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                  >
                    Demo Register
                  </Button>
                </Link>
                <Link href="/login" className="flex-1 sm:flex-none">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-11 w-full rounded-xl px-6 font-bold text-zinc-600 transition-all hover:bg-white hover:text-zinc-900 hover:shadow-sm sm:w-auto dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                  >
                    Demo Login
                  </Button>
                </Link>
              </div>
              <p className="flex items-center gap-2 text-xs font-medium text-zinc-400 dark:text-neutral-500">
                <ShieldCheck className="size-3.5 text-emerald-500" />
                Click the two buttons above to see the auth in action
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-xl">
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/50 p-2 shadow-sm backdrop-blur transition-all hover:border-zinc-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50">
              <div className="flex items-center gap-3 px-4 py-2">
                <Terminal className="size-4 flex-shrink-0 text-zinc-400 dark:text-neutral-500" />
                <code className="flex-1 overflow-x-auto text-left font-mono text-[13px] text-zinc-600 dark:text-neutral-400">
                  npx create-next-app -e beefysalad/next-prisma-template
                </code>
                <button
                  onClick={handleCopy}
                  className="flex size-8 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 transition-all hover:bg-zinc-900 hover:text-white dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-50 dark:hover:text-neutral-900"
                >
                  {copied ? (
                    <Check className="size-4" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-24 md:py-32 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              What&apos;s inside
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600 md:mx-0 dark:text-neutral-400">
              A carefully curated stack of modern tools designed for speed,
              safety, and developer experience.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2">
            <BentoItem
              className="md:col-span-8 md:row-span-1"
              icon={<Code2 className="size-8 text-blue-500" />}
              title="Next.js 16 App Router"
              description="Server Components, Server Actions, and React 19. The bleeding edge, but stable enough to actually use for high-performance applications."
            />
            <BentoItem
              className="md:col-span-4 md:row-span-1"
              icon={<Database className="size-8 text-emerald-500" />}
              title="Prisma 7"
              description="Type-safe queries and auto-generated types for Postgres."
            />
            <BentoItem
              className="md:col-span-4 md:row-span-1"
              icon={<ShieldCheck className="size-8 text-indigo-500" />}
              title="Auth.js v5"
              description="Secure authentication that just works out of the box."
            />
            <BentoItem
              className="md:col-span-4 md:row-span-1"
              icon={<Zap className="size-8 text-amber-500" />}
              title="TanStack Query"
              description="Smart caching and optimistic updates for your data."
            />
            <BentoItem
              className="md:col-span-4 md:row-span-1"
              icon={<Github className="size-8 text-zinc-900 dark:text-white" />}
              title="Tailwind 4"
              description="CSS-first utility styling for a modern look."
            />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 md:py-32 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            Why this exists
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-neutral-400">
            <p>
              Lately I&apos;ve been in the mood to build some side projects
              using Next and every new project starts the same way: install
              Next.js, set up Prisma, configure Auth.js, add React Hook Form,
              wire up TanStack Query, get dark mode working, set up the folder
              structure that makes sense, write the auth middleware, create the
              Prisma client singleton...
            </p>
            <p>
              After doing this setup a couple of times, I finally made a
              template for me and maybe for you too! :3
            </p>
            <p>
              Clone it, change the database URL, and you're building features.
              That's it.
            </p>
          </div>

          <div className="mt-12 flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="https://github.com/beefysalad/next-prisma-template"
              target="_blank"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="group h-12 w-full gap-2 rounded-full border-2 border-zinc-900 bg-zinc-900 px-8 font-bold text-white transition-all hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/20 active:scale-95 sm:w-auto dark:border-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:hover:shadow-neutral-50/10"
              >
                <Github className="size-5" />
                View on GitHub
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/docs" className="w-full sm:w-auto">
              <Button
                variant="ghost"
                size="lg"
                className="h-12 w-full rounded-full px-8 font-bold text-zinc-500 transition-all hover:bg-zinc-100 hover:text-zinc-900 sm:w-auto dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
              >
                Read the docs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-24 md:py-32 dark:border-neutral-800">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Want to contribute?
          </h2>
          <p className="mb-12 text-lg text-zinc-600 dark:text-neutral-400">
            Found a bug? Have an idea? Wanna collaborate on this? Im always open
            to collaborations so open an issue or submit a PR. Just keep it
            clean and follow the existing patterns.
          </p>

          <div className="space-y-8">
            <ContributeStep
              num="1"
              title="Fork and clone the repo"
              desc="Standard GitHub workflow. You know the drill."
            />
            <ContributeStep
              num="2"
              title="Make your changes"
              desc="Create a feature branch. Keep commits atomic. Write code that doesn't suck (even though my code in here sucks :3)."
            />
            <ContributeStep
              num="3"
              title="Open a pull request"
              desc="Describe what you changed and why. I'll review it when I can (Ill probably do a LGTM right away~)."
            />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-100 px-6 py-24 dark:border-neutral-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Contributors
          </h2>
          <p className="mb-12 text-zinc-600 dark:text-neutral-400">
            The lovely people who made this template possible.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            <Contributor
              name="beefysalad"
              github="https://github.com/beefysalad"
              image="/ptrck.jpg"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 px-6 py-12 dark:border-neutral-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <div className="text-center text-sm text-zinc-500 md:text-left">
            <p>
              Built by{' '}
              <Link href="https://patr1ck.dev" target="_blank">
                patr1ck.dev
              </Link>
            </p>
            <p className="mt-1 text-zinc-400 dark:text-neutral-600">
              MIT License • Use it however you want
            </p>
          </div>
          <div className="flex gap-8 text-sm text-zinc-500">
            <Link
              href="https://github.com/beefysalad/next-prisma-template"
              className="transition-colors hover:text-zinc-900 dark:hover:text-neutral-400"
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              href="/docs"
              className="transition-colors hover:text-zinc-900 dark:hover:text-neutral-400"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/beefysalad/next-prisma-template/issues"
              className="transition-colors hover:text-zinc-900 dark:hover:text-neutral-400"
            >
              Issues
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BentoItem({
  icon,
  title,
  description,
  className,
}: {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:border-zinc-300 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700 ${className}`}
    >
      <div className="relative z-10 space-y-4">
        <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-zinc-50 shadow-sm transition-transform group-hover:scale-110 dark:bg-neutral-800">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight">{title}</h3>
          <p className="text-sm leading-relaxed text-zinc-500 dark:text-neutral-400">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-zinc-100/50 to-transparent p-24 opacity-0 transition-opacity group-hover:opacity-100 dark:from-neutral-800/50" />
    </div>
  )
}

function ContributeStep({
  num,
  title,
  desc,
}: {
  num: string
  title: string
  desc: string
}) {
  return (
    <div className="flex gap-6">
      <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 font-mono text-sm font-bold text-zinc-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
        {num}
      </div>
      <div className="flex-1 pt-1">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-zinc-600 dark:text-neutral-400">{desc}</p>
      </div>
    </div>
  )
}

function Contributor({
  name,
  github,
  image,
}: {
  name: string
  github: string
  image?: string
}) {
  return (
    <Link
      href={github}
      target="_blank"
      className="group flex flex-col items-center gap-2"
    >
      <div className="flex size-16 items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-white text-neutral-50 shadow-lg shadow-zinc-200/50 transition-all group-hover:scale-110 group-hover:border-zinc-900 group-hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-none dark:group-hover:border-neutral-50">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <Github className="size-8 text-zinc-400 group-hover:text-zinc-900 dark:text-neutral-500 dark:group-hover:text-neutral-100" />
        )}
      </div>
      <span className="text-sm font-bold text-zinc-600 group-hover:text-zinc-900 dark:text-neutral-400 dark:group-hover:text-neutral-100">
        {name}
      </span>
    </Link>
  )
}
