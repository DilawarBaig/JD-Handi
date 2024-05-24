import React from 'react'
import  img1 from '../../assets/biryani.png'
import  img2 from '../../assets/pasta.png'
import  img3 from '../../assets/stake.png'
import  img4 from '../../assets/karahi.png'
const servicesData = [
    {
        id: 1,
        img: img1,
        name: 'Order Online',
        description: 'We deliver our high quality delectable food right to your doorstep, and right on time. Order today and enjoy a truly memorable Bar.B.Q Tonight taste experience.'
    },
    {
        id: 2,
        img: img2,
        name: 'Dine In Reservation',
        description: 'Thinking about Dining-In at Bar.B.Q Tonight? Reserve a table beforehand by calling from anywhere in Karachi. Reserve Now'
    },
    {
        id: 3,
        img: img3,
        name: 'Explore Menu',
        description: 'Experience our uniquely authentic and eclectic new flavors. Explore our locations to find a Bar.B.Q Tonight branch located conveniently near you.'
    },
    {
        id: 4,
        img: img4,
        name: 'Cooking Classes',
        description: 'Learn the secrets of South Asian cuisine with our interactive cooking classes. Our skilled chefs will guide you through the preparation of our most popular dishes, providing a fun and educational experience for all food enthusiasts.'
    },
]

const Services = () => {    
  return (
    <div
    
    className='py-10 dark:bg-gray-900 bg-[#f7f8f3] dark:text-gray-300  '>
        <div >

        <div className='container mx-auto '>
            <div className='text-center mb-20 max-w-[400px] mx-auto '
            data-aos= 'zoom-in'
            data-aos-duration= '400'
            >
                <p className='text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-yellow-400'>our Services</p>
                <h1 className='text-3xl font-bold'>Services</h1>
                <p className='text-xs text-gray-400'>
                    {''}
                    Make your events unforgettable with our professional catering services. Whether it's a wedding, corporate event, or private party, JD Handi provides a customized menu to suit your needs, ensuring your guests enjoy the finest South Asian cuisine.
                </p>
            </div>
            {/* card section */}
            <div className=' ' >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-14 md:grid-cols-3 md:gap-5  place-items-center'
                data-aos= 'slide-up'
                data-aos-duration= '500'>
                    {servicesData.map(({id, img, name, description}) => (
                        <div key={id}
                        className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-orange-900
                        dark:hover:bg-orange-800 hover:text-white duration-300  shadow-xl sm:my-2 md:my-7'>
                            <div className='h-[100px]'>
                                <img
                                className='max-w-[180px] mx-auto block transform -translate-y-14  group-hover:scale-105 group-hover:rotate-6 duration-300'
                                src={img}
                                alt='' />
                            </div>
                            <div className='p-4 text-center'>
                                <h1 className='text-xl font-bold'>{name}</h1>
                                <p className='text-gra  y-500 text-sm line-clamp-2'>{description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
                    </div>
    </div>
  )
}

export default Services