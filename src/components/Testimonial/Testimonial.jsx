import React from 'react'
import Slider from 'react-slick'
import img1 from '../../assets/kab.jpg'
import img2 from '../../assets/kab.jpg'
import img3 from '../../assets/saifi.jpg'
import img4 from '../../assets/saifi.jpg'
import img5 from '../../assets/zeeshu.jpg'
import img6 from '../../assets/mirza.jpg'
import img7 from '../../assets/asad.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'




const testimonialData = [
    
    {
        id: 2,
        name: 'Khawar',
        img: img2,
        text: 'From the moment you walk in, you feel welcomed. The staff is attentive, and the food is always fresh and tasty. A must-visit restaurant!'
    },
    {
        id: 3,
        name: 'Saif',
        img: img3,
        text: "I've been a regular at JD Handi for years, and the quality never wavers. The menu offers a wide variety of delicious options, perfect for any palate."
    },
    {
        id: 5,
        name: 'Zeeshan',
        img: img5,
        text: 'JD Handi offers an exceptional dining experience. The authentic flavors and quality ingredients transport you straight to the heart of South Asia. Highly recommended!'
    },
    {
        id: 6,
        name: 'Shehzad',
        img: img6,
        text: 'As someone who grew up with South Asian cuisine, JD Handi brings back fond memories with every bite. The dishes are authentic and flavorful.'
    },
    {
        id: 7,
        name: 'Asad',
        img: img7,
        text: "Every visit to JD Handi is a treat. The BBQ dishes are unparalleled, and the service is always top-notch. It's our favorite spot for family dinners."
    },
]

const Testimonial = () => {
    let settings = {
        dot: true,
        arrow: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
    };
  return (
    <div 
    data-aos= 'fade-up'
            data-aos-duration= '400'
        
    className='py-10 dark:bg-gray-950 dark:text-white '>
        <div className='container mx-auto'>
        <div className='text-center mb-20 max-w-[400px] mx-auto '>
                <p className='text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-yellow-400'>Testimonial</p>
                <h1 className='text-3xl font-bold'>Testimonial</h1>
            </div>
            <div 
            data-aos= 'zoom-in'
            data-aos-duration= '400'
            className='grid grid-cols-1 max-w-[600px] mx-auto gap-6 '>
                <Slider {...settings}>
                    {testimonialData.map(({id, name, text, img}) => (
                        <div
                        key={id}
                        className='my-6 '>
                            <div className='flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800  bg-orange-100 relative'>
                                {/*  bg-gradient-to-r from-orange-200 to-orange-100 */}
                                <img 
                                src={img} 
                                className='w-[80px] h-[80px] rounded-full mx-auto'
                                alt="image" />
                                <p className='text-gray-400 text-sm'>{text}</p>
                                <div className='flex flex-rows'>
                                <h1 className='text-xl font-bold '>{name}</h1>
                                </div>
                                <p className='text-black/20 text-9xl font-serif dark:text-gray-400 absolute -top-5 right-0'>,,</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonial