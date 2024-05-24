import React from 'react'
import bgImg from '../../assets/background.png'
import food1 from '../../assets/biryani.png'
import food2 from '../../assets/pasta.png'
import food3 from '../../assets/stake.png'
import food4 from '../../assets/karahi.png'
import { useState } from 'react'

const imageList = [
    {
        id: 1,
        img: food1, 
    },
    {
        id: 2,
        img: food2,
    },
    {
        id: 3,
        img: food3,
    },
    {
        id: 4,
        img: food4,
    }
]

const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%'
}

const Hero = () => {
    const [imageId, setImageId] = useState(food1)
    
  return (
    <div style={bgImage}
    className='min-h-[550px sm:min-h-[600px] bg-[#f7f8f2] dark:bg-gray-950 dark:text-white duration-500 flex justify-center items-center  ' 
    >
     <div className='container pb-8 sm:pb-0 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 '>
            <div 
            data-aos= 'zoom-out'
            data-aos-duration= '400'
            data-aos-once= 'true'
            className='flex flex-col justfiy-center sm:text-left order-2 sm:order-1 p-4 rounded-xl mr-16'>
                <h1 className='text-5xl sm:text-6xl lg-text-7xl font-bold  '>Welcome to the JD Handi</h1>
                <p className='text-sm '>At JD Handi, we bring the rich, diverse flavors of South Asia to your table. Established on November 10, 1988, we have become a beloved culinary destination known for our authentic Pakistani dishes and signature BBQ specialties. Our journey began with a simple mission: to offer exceptional quality and taste in every bite.</p>
                <div>
                    <button className=' dark:bg-[#f7f8f3] bg-gray-950 px-4 py-2 m-2 animate-pulse dark:text-gray-900 font-semibold rounded-full hover:scale-105 duration-200 text-gray-300'>
                        Order Now
                    </button>
                </div>
            </div>
            <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center   relative '>
                <div className='flex justify-center items-center h-[300px] sm:h-[450px] sm:mb-10 lg:mr-24 overflow-hidden'>
                    <img 
                     data-aos= 'zoom-in'
                     data-aos-duration= '400'
                     data-aos-once= 'true'
                    src={imageId} alt=""
                    className='w-[300px] sm:w-[450px] mx-auto spin  ' />
                </div>
                <div className='flex lg:flex-col lg:-top-1 lg:translate-y-1/5 lg:py-2  justify-center gap-4 absolute bottom-[0px] lg:right-[4px] bg-white/30 rounded-full'>
                    {imageList.map((item) => (
                        <img 
                        className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 '
                        src={item.img}
                        key={item.id} 
                        onClick={() => setImageId(item.id === 1 ? food1 : item.id === 2 ? food2 : item.id ===3 ? food3 : food4)}/>
                        
                    ))}
                </div>
            </div>
        </div>
        </div>   
    </div>
  )
}

export default Hero