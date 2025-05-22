import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const posts = ['Post 1', 'Post 2', 'Post 3', 'Post 4']

export default function ReportedPosts() {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Reported Posts</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map(title => (
          <Card key={title}>
            <CardHeader className="flex justify-between items-center">
              <CardTitle>{title}</CardTitle>
              <Button size="sm">View</Button>
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full" />
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
