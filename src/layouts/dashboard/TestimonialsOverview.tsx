import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Star, StarHalf } from 'lucide-react';

export default function TestimonialsOverview() {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Total Testimonials
          </CardTitle>
          <Star className='h-5 w-5' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>253</div>
          <p className='text-xs text-muted-foreground'>
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Average Rating</CardTitle>
          <StarHalf className='h-5 w-5' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>4.8</div>
          <p className='text-xs text-muted-foreground'>
            +10.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'></CardTitle>
          <StarHalf className='h-5 w-5' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>4.8</div>
          <p className='text-xs text-muted-foreground'>
            +10.1% from last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
