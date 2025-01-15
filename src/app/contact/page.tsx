export default async function Page() {
  return (
    <div>
      <h2 className="text-xl mb-4">Contact Us</h2>
      <p className="mb-6">If you'd like to get in touch, please don't hesitate to reach out to us using the information below.</p>

      <div className="flex flex-col md:flex-row justify-center  mb-6">
        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg mb-2">Address</h2>
          <p>123 London St, UK</p>
        </div>
        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg mb-2">Phone</h2>
          <p>+(44) 555-5555</p>
        </div>
        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg mb-2">Email</h2>
          <p><a href="mailto:example@example.com">example [@] example.com</a></p>
        </div>
      </div>
    </div>
  );
}