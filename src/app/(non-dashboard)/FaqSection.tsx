const data = [
  {
    question: 'How does the email outreach solution work?',
    answer:
      'Our email outreach solution allows you to send personalized emails to multiple recipients simultaneously. You can create and customize email content using our intuitive editor, streamlining your outreach process.',
  },
  {
    question: 'Is my data secure and protected?',
    answer:
      'Yes, we prioritize data security. We use encryption protocols to protect your data during transmission and storage. Our systems are regularly updated to ensure the highest level of security.',
  },
  {
    question: 'Can I send personalized emails to recipients?',
    answer:
      'Absolutely! You can personalize emails using merge tags, dynamically inserting recipient-specific information for a more engaging connection.',
  },
  {
    question:
      'Are there any limitations on the number of recipients or emails I can send?',
    answer:
      'To ensure a smooth experience, we have predefined limits on the number of recipients and emails. Contact our support team for specific requirements or exceeding those limits.',
  },
];

export default function FaqSection() {
  return (
    <section className='container mx-auto space-y-12 p-4'>
      <h2 className='text-2xl font-bold sm:text-4xl md:text-6xl lg:text-7xl'>
        Frequent Questions
      </h2>
      <div className='grid md:grid-cols-2 gap-8 px-4 sm:px-0'>
        {data.map((x, i) => (
          <div key={i} className="flex flex-col justify-between gap-4">
            <h3 className='text-xl font-semibold md:text-2xl'>{x.question}</h3>
            <p className='leading-7'>{x.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
