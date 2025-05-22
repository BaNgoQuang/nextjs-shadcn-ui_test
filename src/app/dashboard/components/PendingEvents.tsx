import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const events = [
  { name: 'Event A', action: 'Approve' },
  { name: 'Event B', action: 'Reject' },
]

export default function PendingEvents() {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Pending Events</h2>
      </div>
      <div className="space-y-4">
        {events.map(e => (
          <Card key={e.name}>
            <CardHeader className="flex justify-between items-center">
              <CardTitle>{e.name}</CardTitle>
              <Button size="sm" variant={e.action === 'Reject' ? 'destructive' : 'default'}>
                {e.action}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}