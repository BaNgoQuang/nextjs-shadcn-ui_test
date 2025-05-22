import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const suppliers = ['Supplier A', 'Supplier B']

export default function PendingSuppliers() {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Pending Suppliers</h2>
      </div>
      <div className="space-y-4">
        {suppliers.map(name => (
          <Card key={name}>
            <CardHeader className="flex justify-between items-center">
              <CardTitle>{name}</CardTitle>
              <Button size="sm">Approve</Button>
            </CardHeader>
            <CardContent>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}