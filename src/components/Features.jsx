import { IconBrush, IconMouse, IconUserScan } from "@tabler/icons-react";

export default function Features() {
  const features = [
    {
      title: "Innovative Design",
      icon: <IconBrush size={150} />,
      desc: "Elevate your brand with our innovative designs—captivating visuals and compelling narratives that communicate your unique story.",
    },
    {
      title: "Strategic Branding",
      icon: <IconUserScan size={150} />,
      desc: "Transform your brand into a memorable masterpiece. Our strategic branding ensures seamless alignment, crafting an identity that resonates and leaves a lasting impression.",
    },
    {
      title: "Interactive User Experiences",
      icon: <IconMouse size={150} />,
      desc: "Immerse your audience in meaningful interactive experiences. Our user-centric approach ensures a seamless, enjoyable journey with every click.",
    },
  ];

  // bg-[#F7F0E6]

  return (
    <div className="py-[10rem] px-6">
      <div className="m-auto gap-12 text-center max-w-[600px]">
        <div className="text-7xl font-semibold mb-[3rem]">
          How does the process work?
        </div>
        <div className="text-dim">
          Answer a few questions, then explore our community of exceptional
          professionals. We strive to ensure you&#39;re paired with an
          outstanding match for your project.
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-3 gap-6 mt-[4rem] sm:px-16">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col justify-between gap-[4rem] p-10 border rounded-3xl hover:text-white hover:bg-acc"
          >
            <div className="max-w-[400px] text-lg">{feature.desc}</div>
            <div className="self-center">{feature.icon}</div>
            <div className="text-4xl font-semibold max-w-[276px]">
              {feature.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
