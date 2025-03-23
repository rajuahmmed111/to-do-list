import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-foreground">TaskMaster</h1>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold">Manage Your Tasks Efficiently</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              A simple and intuitive to-do list application to help you stay organized and productive.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg">
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/sign-up">Create Account</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} TaskMaster. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

