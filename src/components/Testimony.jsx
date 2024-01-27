import { IconQuote } from "@tabler/icons-react"
import { useState } from "react";

export default function Testimony() {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      name: 'John Smith 1',
      testimony: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, corrupti sequi laborum ipsam, tempore eius temporibus nesciunt pariatur, ullam nihil repudiandae minima in explicabo omnis. Esse magni doloremque officia sed."
    },
    {
      name: 'John Smith 2',
      testimony: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, corrupti sequi laborum ipsam, tempore eius temporibus nesciunt pariatur, ullam nihil repudiandae minima in explicabo omnis. Esse magni doloremque officia sed."
    },
    {
      name: 'John Smith 3',
      testimony: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, corrupti sequi laborum ipsam, tempore eius temporibus nesciunt pariatur, ullam nihil repudiandae minima in explicabo omnis. Esse magni doloremque officia sed."
    },
    {
      name: 'John Smith 4',
      testimony: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, corrupti sequi laborum ipsam, tempore eius temporibus nesciunt pariatur, ullam nihil repudiandae minima in explicabo omnis. Esse magni doloremque officia sed."
    },
  ]

  const next = () => {
    if (current + 1 >= testimonials.length) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  const prev = () => {
    if (current - 1 < 0) {
      setCurrent(testimonials.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  const getNext = () => {
    if (current + 1 >= testimonials.length) {
      return 0
    }
  
    return current + 1
  }

  const getPrev = () => {
    if (current - 1 < 0) {
      return testimonials.length - 1
    }

    return current - 1
  }

  return (
    <div className="w-full border-b pb-[8rem] overflow-hidden">
      <div className="text-center container flex flex-col items-center gap-10 m-auto py-[8rem] px-8">
        <div><IconQuote className="m-auto text-acc" size={80}/></div>
        <div className="text-4xl max-w-[1200px]">&#34;Trust is our core. Entrust your vision; we&#39;ll turn it into a masterpiece. Choose us for confidence and excellence in bringing your ideas to life.&#34;</div>
        <div className="text-end italic"> - Someone Important</div>
      </div>
      <div className="w-full flex justify-center gap-10 mt-10">

        {/* behind */}
        <div className="bg-bg min-w-[750px] w-[750px] p-10" onClick={prev}>
          <p className="text-3xl">{testimonials[getPrev()].testimony}</p>
          <div className="flex gap-4 pt-8">
            <div><img src="" /></div>-
            <div>{testimonials[getPrev()].name}</div>
          </div>
        </div>

        {/* current */}
        <div className="bg-bg min-w-[750px] w-[750px] p-10 scale-105">
          <p className="text-3xl">{testimonials[current].testimony}</p>
          <div className="flex gap-4 pt-8">
            <div><img src="" /></div>-
            <div>{testimonials[current].name}</div>
          </div>
        </div>

        {/* next */}
        <div className="bg-bg min-w-[750px] w-[750px] p-10" onClick={next}>
          <p className="text-3xl">{testimonials[getNext()].testimony}</p>
          <div className="flex gap-4 pt-8">
            <div><img src="" /></div>-
            <div>{testimonials[getNext()].name}</div>
          </div>
        </div>

      </div>
    </div>
  )
}