import Link from 'next/link'

export default function HomePage() {
  return (

    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to Admin UI Test</h1>
      <p className="mt-4">Select a section from the navigation bar below</p>
      <div className="mt-8 space-x-4">
        <Link href="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded">
          Go to Dashboard
        </Link>
        <Link href="/settings" className="px-4 py-2 bg-green-600 text-white rounded">
          Settings
        </Link>
      </div>
    </div>
  )
}
