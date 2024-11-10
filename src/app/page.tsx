import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Coins, Database, BarChart, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 text-gray-800 dark:text-gray-100">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-gray-300 dark:border-gray-700">
        <Link className="flex items-center justify-center" href="#">
          <Database className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
          <span className="font-bold text-lg text-blue-700 dark:text-blue-300">DataCoin</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">How It Works</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">Rewards</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">Connect Wallet</Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-r from-blue-200 to-purple-300 text-center">
          <div className="container mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-blue-800 dark:text-blue-200">
                Earn Crypto by Labeling Data
              </h1>
              <p className="mx-auto max-w-2xl text-lg sm:text-xl md:text-2xl text-blue-700 dark:text-blue-300">
                Join our community of data labelers and earn cryptocurrency while contributing to the advancement of AI technology.
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="text-white bg-blue-600 hover:bg-blue-700">Get Started</Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-8">
              Features
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                <CardHeader>
                  <Coins className="h-6 w-6 mb-4 text-yellow-500 dark:text-yellow-400" />
                  <CardTitle className="text-lg font-bold">Crypto Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Earn cryptocurrency for every correctly labeled data point. Your efforts are valuable and rewarded.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                <CardHeader>
                  <BarChart className="h-6 w-6 mb-4 text-green-500 dark:text-green-400" />
                  <CardTitle className="text-lg font-bold">AI Advancement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Contribute to cutting-edge AI model training and development. Be a part of the future.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                <CardHeader>
                  <Users className="h-6 w-6 mb-4 text-blue-500 dark:text-blue-400" />
                  <CardTitle className="text-lg font-bold">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Join a global community of data labelers and AI enthusiasts. Connect, share, and grow together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-r from-blue-200 to-purple-300 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-8">
              How It Works
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    {step}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-blue-800 dark:text-blue-200">Step {step}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {step === 1 && "Sign up for an account"}
                    {step === 2 && "Complete labeling tasks"}
                    {step === 3 && "Earn crypto rewards"}
                    {step === 4 && "Withdraw or reinvest"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
          <div className="container mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-blue-800 dark:text-blue-200">
                Ready to Start Earning?
              </h2>
              <p className="mx-auto max-w-lg text-lg sm:text-xl md:text-2xl text-blue-700 dark:text-blue-300">
                Join thousands of data labelers who are already earning cryptocurrency. Get started today!
              </p>
              <div className="max-w-md mx-auto">
                <form className="flex space-x-2">
                  <Input className="flex-1" placeholder="Enter your email" type="email" />
                  <Button className="text-white bg-blue-600 hover:bg-blue-700" type="submit">Sign Up</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 border-t border-gray-300 dark:border-gray-700">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 DataCoin. All rights reserved.</p>
          <nav className="flex gap-4 text-xs">
            <Link className="hover:underline underline-offset-4" href="#">Terms of Service</Link>
            <Link className="hover:underline underline-offset-4" href="#">Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
