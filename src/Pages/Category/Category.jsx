import { ListItemButton } from '@mui/material';
import prod1 from '../../img/prod1.jpg'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getDataFormCollection from '../../Utils/dataFetch/getDataFromCollection';

const categoryArr = [
  {
    imageUrl: prod1,
    title: 'Category Title 01',
    categoryId: 'category1'
  },
  {
    imageUrl: prod1,
    title: 'Category Title 02',
    categoryId: 'category2'
  },
  {
    imageUrl: prod1,
    title: 'Category Title 03',
    categoryId: 'category3'
  },
  {
    imageUrl: prod1,
    title: 'Category Title 04',
    categoryId: 'category4'
  },
  {
    imageUrl: prod1,
    title: 'Category Title 05',
    categoryId: 'category5'
  },
  {
    imageUrl: prod1,
    title: 'Category Title 06',
    categoryId: 'category6'
  }
]

const Category = () => {
  const [categoryData, setCategoryData] = useState([])

  useEffect(()=> {
    getDataFormCollection("category", setCategoryData);
  }, []);

  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <section style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", 
      }} className="w-full p-2">

        <h1 className='text-lg font-bold mt-2 ml-2 mb-3'>Main</h1>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5'>
        {categoryData?.map(({img, title, categoryId}, index) => <CategoryUnitItem 
          key={index} 
          imageUrl={img} 
          title={title} 
          categoryId={categoryId}
          />
          )}
          
        </div>

      </section>
    </div>
  )
}

export default Category

const CategoryUnitItem = ({imageUrl, title, categoryId}) => ( 
  <Link to={`/category/${categoryId}`}>
 
  <ListItemButton 
  sx={{
    padding:0,
    margin:0,
    color: 'red',
    boxShadow: "rgba(0,0,0,0.24) 0px 3px 8px",
    borderRadius: '6px',
  }}>
    <div className="w-full rounded-md border-2 py-4 px-1 flex flex-col items-center">
  

      <img 
      src={imageUrl}
      alt={title}
      className='rounded-full w-[100px] h-[100px]'
      />
      <h2 className='text-xs text-black font-bold'> {title}</h2>


    </div>

  </ListItemButton>

  </Link>

);