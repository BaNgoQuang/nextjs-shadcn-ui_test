'use client'
import Link from 'next/link'
import { Switch } from '@/components/ui/switch'

export default function Navbar({ theme, onToggleTheme }: { theme: 'light' | 'dark'; onToggleTheme: () => void }) {
  return (
    <nav className="flex justify-between items-center p-4 border-b bg-white dark:bg-gray-800">
      <div className="space-x-4">
        <Link href="/" className="font-medium">Home</Link>
        <Link href="/dashboard" className="font-medium">Dashboard</Link>
        <Link href="/settings" className="font-medium">Settings</Link>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm">{theme === 'dark' ? 'Dark' : 'Light'}</span>
        <Switch checked={theme === 'dark'} onCheckedChange={onToggleTheme} />
      </div>
    </nav>
  )
}
