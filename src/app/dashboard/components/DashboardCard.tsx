import { Card } from '@/components/ui/card'

export default function DashboardCard({ label, value }: { label: string; value: number }) {
  return (
    <Card className="p-4 text-center">
      <h2 className="text-2xl font-bold">{value}</h2>
      <p>{label}</p>
    </Card>
  )
}