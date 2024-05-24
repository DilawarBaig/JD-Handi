import React from 'react'
import appstore from '../../assets/appstore.png'
import playstore from '../../assets/playstore.png'
import gif from '../../assets/delivery.gif'

const AppStore = () => {
  return (
    <div>
        <div className='bg-gray-100 dark:bg-gray-800 py-14'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4 
                '
                data-aos = 'fade-up'
                data-aos-duration = '300'
                
                >
                    <div className='space-y-6 max-w-xl mx-auto ml-5'>
                        <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-gray-400 text-gray-700 '>JD Handi is Available for Android and IOS</h1>
                    <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                        <a 
                        href='#'>
                        <img
                        src={playstore}
                        className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                        alt='Playstore' />
                        </a>
                        <a 
                        href='#'>
                        <img
                        src={appstore}
                        className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                        alt='Appstore' />
                        </a>
                    </div>
                        </div>
                        <div
                        data-aos = 'zoom-in'
                        data-aos-duration = '300'>
                            <img
                            src={gif}
                            alt='gif'
                            className='max-w-[300px] mx-auto'
                            />
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppStore