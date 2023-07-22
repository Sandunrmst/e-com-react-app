import ad1 from '../../img/ad1.jpg'
import ad2 from '../../img/ad2.jpg' 
import ad3 from '../../img/ad3.jpg' 
import ad4 from '../../img/ad4.jpg' 
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const addElemnet = [
    {
        imageUrl: ad1
    },
    {
        imageUrl: ad2
    },
    {
        imageUrl: ad3
    },
    {
        imageUrl: ad4
    }
]


const Ads = () => {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className='rounded-lg overflow-hidden'

  >
    {addElemnet.map(({imageUrl}, index) => (
        <SwiperSlide key={index}>
            <AdUnit imageUrl={imageUrl} index={index}/>
        </SwiperSlide>
    ) )}

  </Swiper>
  )
}

export default Ads

const AdUnit =({imageUrl, index}) => (

    <img src={imageUrl} alt={`ads${index}`} className='w-full object-contain rounded-lg' />
)
