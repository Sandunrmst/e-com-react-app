import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Grid, Mousewheel, Pagination } from 'swiper/modules';

import prod1 from '../../img/prod1.jpg'
import prod2 from '../../img/prod2.jpg'
import prod3 from '../../img/prod3.jpg'
import prod4 from '../../img/prod4.jpg'
import prod5 from '../../img/prod5.jpg'
import prod6 from '../../img/prod6.jpg'
import prod7 from '../../img/prod7.jpg'

import './style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { ListItemButton , Rating } from '@mui/material';


const Product = ({title, rowsCount, slidesPerView}) => {
  return (
    <section style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    }}
    className='w-full mt-6 product-swipe px-6'>
        <h1 className='text-lg font-bold py-4'>{title}</h1>
        <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Grid, Pagination, Mousewheel]}
        
      >
       
        {productList.map(({imageUrl, price, prodTitle}, index)=> 
        <SwiperSlide key={index}>
            <ProductUnit imageUrl={imageUrl} price={price} prodTitle={prodTitle} id={index}/>
        </SwiperSlide>)}
        

      </Swiper>
    </section>
  )
}

export default Product

const productList = [
    {
        imageUrl: prod1,
        price: '120',
        prodTitle: 'Prod Title 01'
    },
    {
        imageUrl: prod2,
        price: '250',
        prodTitle: 'Prod Title 02Prod Title 06Prod Title 06'
    },
    {
        imageUrl: prod3,
        price: '80',
        prodTitle: 'Prod Title 03'
    },
    {
        imageUrl: prod4,
        price: '180',
        prodTitle: 'Prod Title 04'
    },
    {
        imageUrl: prod5,
        price: '850',
        prodTitle: 'Prod Title 05'
    },
    {
        imageUrl: prod6,
        price: '350',
        prodTitle: 'Prod Title 06Prod Title 06'
    },
    {
        imageUrl: prod7,
        price: '110',
        prodTitle: 'Prod Title 07'
    },
    {
        imageUrl: prod5,
        price: '550',
        prodTitle: 'Prod Title 08'
    }
]

const ProductUnit = ({imageUrl, price, prodTitle, id}) => (
    <ListItemButton sx={{padding: "4px", borderRadius: "5px"}}>
    <div className="w-full mb-7">
        <img src={imageUrl} alt={`product_unit_${id}`} className="w-full object-cover h-[200px] md:h-[300px] md:object-cover"/>
        <h3 className='text-lg font-semibold text-stone-900'>
            {String(prodTitle).substring(0,19)}
            {String(prodTitle).length > 19 ? "..." : null}
        </h3>

        <Rating
           name={imageUrl}
           value={3.3}
           precision={0.5}
           size='small'
        />
        <h3 className="text-stone-900 font-bold text-lg">Rs.{price}</h3>
    </div>
    </ListItemButton>
)