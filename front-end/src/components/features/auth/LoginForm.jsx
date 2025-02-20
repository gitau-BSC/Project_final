import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Link} from 'react-router-dom'
export default function LoginPage() {
  return (
    <div className="w-screen flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6 p-5 border rounded-md" action="#" method="POST">
            <div className="rounded-md shadow-sm space-y-5">
              <div>
                <Label htmlFor="email-address" className="sr-only">
                  Email address
                </Label>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="rounded-t-md"
                  placeholder="Email address"
                />
              </div>
              <div>
                <Label htmlFor="password" className="sr-only">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="rounded-b-md"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </Label>
              </div>

              <div className="text-sm">
                <Link href="#" className="font-medium text-primary hover:text-primary-dark">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </div>
          </form>
          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="font-medium text-primary hover:text-primary-dark">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

