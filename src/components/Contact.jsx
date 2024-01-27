export default function Contact() {
  return (
    <div className="mb-[4rem] mt-[10rem]">
      <div className="px-8 flex flex-col items-center justify-center h-full">
        <div className="text-center max-w-[550px]">
          <div className="text-7xl font-semibold">
            Subscribe for all our designs!
          </div>
          <div className="text-dim py-8">
            Input your details below and we will send you a notification when
            some of our designs goes live.
          </div>
        </div>
        <div className="flex flex-col gap-4 py-10 max-w-[600px]">
          <input
            placeholder="Name"
            className="px-6 py-4 rounded-xl text-xl w-full border"
          />
          <input
            placeholder="Email"
            className="px-6 py-4 rounded-xl text-xl w-full border"
          />
          <button className="mt-6 bg-acc py-3 rounded-full">Submit</button>
        </div>
      </div>
    </div>
  );
}
