'use client'
import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import SettingsForm from './components/SettingsForm'

export default function SettingsPage() {
  // trạng thái dark mode
  const [isDark, setIsDark] = useState(false)

  // đọc giá trị từ localStorage khi mount
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    setIsDark(theme === 'dark')
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [])

  // toggle và lưu
  const toggleDark = (checked: boolean) => {
    setIsDark(checked)
    document.documentElement.classList.toggle('dark', checked)
    localStorage.setItem('theme', checked ? 'dark' : 'light')
  }

  return (
    <Card className="max-w-md mx-auto mt-10 shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center w-full">
          <CardTitle>Account Settings</CardTitle>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Dark Mode</span>
            <Switch checked={isDark} onCheckedChange={toggleDark} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <SettingsForm />
      </CardContent>
    </Card>
  )
}
