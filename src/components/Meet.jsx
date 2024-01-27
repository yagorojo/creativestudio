import person0 from "../assets/meet/person0.png"
import person1 from "../assets/meet/person1.png"
import person2 from "../assets/meet/person2.png"


export default function Meet() {
  const people = [
    {
      name: "Elena Rivera",
      occupation: "Lead Graphic Designer",
      img: person0
    },
    {
      name: "Marcus Chen",
      occupation: "Creative Director",
      img: person1
    },
    {
      name: "Alicia Rodriguez",
      occupation: "Digital Marketing Specialist",
      img: person2
    },
  ]

  return (
    <div className="py-[10rem]">
      <div className="container m-auto px-6">
        <div className="flex flex-col items-center pb-6 gap-6 text-center">
          <div className="text-7xl font-semibold">Meet the team</div>
          <div className="text-dim">
            Meet the skilled individuals shaping our creative journey with passion and innovation.
          </div>
        </div>

        <div className="md:grid md:grid-cols-3 gap-6 mt-16">
          {people.map((person) => 
            <div key={person.name} className="pb-6">
              <div className="max-h-[600px] overflow-hidden rounded-xl">
                <img src={person.img} alt="" /> 
              </div>
              <div className="pt-4 text-xl font-semibold">{person.name}</div>
              <div className="text-dim italic">{person.occupation}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
