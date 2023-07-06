const data = [
  {
    title: 'Bulk email sending',
    description: 'Save time and effort by sending emails in bulk.',
  },
  {
    title: 'Email customization options',
    description:
      'Personalize your messages with various customization options.',
  },
  {
    title: 'Email templates',
    description: 'Get started quickly with pre-designed email templates.',
  },
  {
    title: 'Contact list management',
    description: 'Manage your contact lists for better targeting.',
  },
  {
    title: 'Intuitive email editor',
    description:
      'Create professional and engaging emails with an easy-to-use editor.',
  },
  {
    title: 'Seamless integration with other tools',
    description: 'Integrate with other tools to enhance productivity.',
  },
];

export default function FeaturesSection() {
  return (
    <section className='container mx-auto'>
      <h2 className='text-center text-2xl font-bold sm:text-4xl md:text-6xl lg:text-7xl'>
        Key Features
      </h2>
      {data.map((x) => (
        <div key={x.title}>
          <h3>{x.title}:</h3>
          <p>{x.description}</p>
        </div>
      ))}
    </section>
  );
}
