import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { users_fake } from './data_Gallery'
import TransitionComponent from '../Transitions/TransitionComponent'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import heart from './gallery/corazon.png'
import chat from './gallery/chat.png'
import CountUp from 'react-countup'

function Slider() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        678: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className='h-[250px] w-full md:max-w-5xl'
    >
      {users_fake.map((user) => {
        return (
        <SwiperSlide key={user.id} className='my-5 cursor-pointer px-10 w-full'>
          <TransitionComponent>
            <div className='flex justify-center items-center flex-col max-h-56'>
              <img 
                src={user.photo} 
                width={300} 
                height={250} 
                alt={user.username}
                className='rounded-lg'
                
              />
              <div className='flex mt-5 items-center' >
                <img src={user.user_icon} className='mr-1 h-4'/>
                <a className='text-sm'>{user.username}</a>
                <img src={heart} className='mx-1 h-4'/>
                <CountUp start={0} end={user.likes} duration={1.5} enableScrollSpy />
                <img src={chat} className='mx-1 h-4'/>
                <CountUp start={0} end={user.coments} duration={1.5} enableScrollSpy />
              </div>
            </div>
            
            
          </TransitionComponent>
        </SwiperSlide>
        )
      } )}
      
    </Swiper>
  )
}

export default Slider
