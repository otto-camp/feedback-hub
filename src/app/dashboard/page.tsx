import { Shell } from '@/components/Shell';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

export default async function DashboardPage() {
  return (
    <Shell>
      <div className='flex flex-wrap justify-between gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
      </div>
      <div className='grid gap-4 md:grid-cols-7'>
        <Card className='h-full md:col-span-4'>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </CardContent>
        </Card>
        <div className='space-y-4 md:col-span-3'>
          <Card>
            <CardHeader>
              <CardTitle>Recent Feedback</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Testimonial</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </CardContent>
          </Card>
        </div>
      </div>
    </Shell>
  );
}
