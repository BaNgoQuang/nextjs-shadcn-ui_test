// app/dashboard/page.tsx
import DashboardCard from './components/DashboardCard'
import PendingSuppliers from './components/PendingSuppliers'
import PendingEvents from './components/PendingEvents'
import ReportedPosts from './components/ReportedPosts'

const stats = [
  { label: 'Submissions', value: 8 },
  { label: 'Total Users', value: 150 },
  { label: 'Active Posts', value: 24 },
  { label: 'Reported Content', value: 2 },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => <DashboardCard key={s.label} {...s} />)}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PendingSuppliers />
        <PendingEvents />
      </div>

      <ReportedPosts />
    </div>
  )
}
