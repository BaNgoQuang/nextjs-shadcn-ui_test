'use client'
import { ReactNode } from 'react'
import Sidebar from './components/Sidebar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar cố định bên trái */}
      <Sidebar />

      {/* Nội dung chính */}
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  )
}