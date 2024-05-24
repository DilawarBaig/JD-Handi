import React from 'react'
import food1 from '../../assets/stake.png'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <div
    className='min-h-[550px] dark:bg-gray-950 dark:text-gray-300'>
        <div >
            <div 
            className='container'
            data-aos= 'slide-up'
            data-aos-duration= '500'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    <div>
                        <img 
                        src={food1}
                        alt=''
                        className='max-w-[450px] w-full mx-auto drop-shadow-xl mt-7'
                        />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-6 sm:pt-0 mx-5 sm:mx-0'>
                        <h1 className='text-2xl sm:text-3xl font-bold mt-4 '>About <span className='text-3xl sm:text-4xl'>JD HANDI</span></h1>
                        <p className='text-sm text-gray-500 tracking-wide leading-5'>Established on the 10th of November in 1988, JD Handi began its journey by offering authentic Pakistani dishes alongside its signature BBQ selections. Through the unwavering dedication of our visionary founders, JD Handi quickly became synonymous with hygiene and quality. Within months, their hard work and commitment bore fruit. Today, JD Handi is recognized as a pioneer in true BBQ dining.
                        <br /><br />
                        Their passion and determination brought this dream to life, capturing the hearts of food enthusiasts both nationally and internationally. JD Handi sets a new benchmark for exceptional quality and taste, offering a diverse array of cuisines to satisfy every palate, each prepared with our unique flair.
                        <br /><br />
                        Experience the pinnacle of fine dining with us!</p>
                        <div className='flex gap-6'>
                            <div >
                                <GrSecure 
                                className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400'/>
                            </div>
                            <div>
                                <IoFastFood 
                                className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400'/>
                            </div>
                            <div>
                                <GiFoodTruck 
                                className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400'/>
                            </div>
                        </div>
                        <div>
                            <button className='bg-gray-950 text-white rounded-full px-3 py-2 hover:scale-105 animate-pulse dark:bg-gray-300 dark:text-black font-semibold '>
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner