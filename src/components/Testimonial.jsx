import React from 'react'

const TestimonialData = [{
    id: 1,
    name: "Vanshika",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
},
{
    id: 2,
    name: "Rohit",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
},
{
    id: 3,
    name: "Ankit",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
},
];

const Testimonial = () => {
  return (
    <div id='testimonial' className='py-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-10'>
          <h1 className='text-center text-amber-900 text-4xl font-bold'>
            Testimonials
          </h1>
        </div>
        {TestimonialData.map((data)=> (
          <div className='my-6'>
            <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-amber-900/10 relative'>
              <div className='mb-4'>
               <img src={data.img} alt="" className='rounded-full w-20 h-20'/>
              </div>
              <div className='flex flex-col items-center gap-4'>
                <div className='space-y-3'>
                  <p className='text-xs text-gray-500 '>{data.text}</p>
                  <h1 className='text-xl font-bold text-black/80'>{data.name}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial