import Image from 'next/image';

const data = [
  {
    title: 'Streamlined Campaign Creation',
    description:
      'Create and customize email campaigns effortlessly with our intuitive drag-and-drop editor. No coding or design skills required. Craft engaging emails with rich text formatting, images, buttons, and more.',
    image: '/first.webp',
  },
  {
    title: 'Contact Management',
    description:
      'Efficiently manage and organize your recipient lists within our platform. Easily import, segment, and update contacts. Keep your outreach targeted and relevant by grouping contacts based on specific criteria.',
    image: '/second.webp',
  },
  {
    title: 'Automated Follow-ups',
    description:
      "Set up automated follow-up sequences to maximize your email campaign's impact. Define custom intervals and triggers to automatically send timely follow-ups to recipients who haven't responded.",
    image: '/third.webp',
  },
  {
    title: 'Analytics and Insights',
    description:
      "Gain valuable insights into your email campaigns' performance. Track open rates, click-through rates, and engagement metrics with our comprehensive analytics dashboard. Identify what works best and optimize your outreach strategy.",
    image: '/fourth.webp',
  },
  {
    title: 'Personalization and Merge Tags',
    description:
      'Personalize your email content with ease using dynamic merge tags. Address recipients by their name, include custom fields, and create tailored messages that resonate with your audience.',
    image: '/fifth.webp',
  },
];

export default function FeaturesSection() {
  return (
    <section className='container mx-auto space-y-12 p-4'>
      <h2 className='text-center text-2xl font-bold sm:text-4xl md:text-6xl lg:text-7xl'>
        Key Features
      </h2>
      <div className='grid gap-8 px-4 sm:px-0'>
        {data.map((x, i) => (
          <div
            key={i}
            className={`flex flex-col gap-4 ${
              i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            <Image
              src={x.image}
              alt={x.title}
              width={576}
              height={576}
              className='mx-auto rounded-xl grayscale object-cover'
            />
            <div className='flex flex-col justify-center gap-6'>
              <h3 className='text-xl font-bold md:text-2xl'>{x.title}</h3>
              <p className='leading-7'>{x.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
