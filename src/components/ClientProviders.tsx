'use client'
import { ReactNode, useState, useEffect } from 'react'
import Navbar from './Navbar'

export default function ClientProviders({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false)

  // Load trạng thái cũ từ localStorage
  useEffect(() => {
    const t = localStorage.getItem('theme')
    const isDark = t === 'dark'
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  // Khi toggle
  const toggle = () => {
    const newDark = !dark
    setDark(newDark)
    document.documentElement.classList.toggle('dark', newDark)
    localStorage.setItem('theme', newDark ? 'dark' : 'light')
  }

  return (
    <>
      <Navbar theme={dark ? 'dark' : 'light'} onToggleTheme={toggle} />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {children}
      </main>
    </>
  )
}