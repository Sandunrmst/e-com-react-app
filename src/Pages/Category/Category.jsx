import { IconButton } from '@mui/material';
import prod1 from '../../img/prod1.jpg'
import { Link } from 'react-router-dom';

const categoryArr = [
  {
    imageUrl: prod1,
    title: 'Category Title 01',
    categoryId: 'category-01'
  },
  {
    imageUrl: prod1,
    title: 'Category Title 02',
    categoryId: 'category-02'
  },
  {
    imageUrl: prod1,
    title: 'Category Title 03',
    categoryId: 'category-03'
  },
  {
    imageUrl: prod1,
    title: 'Category Title 04',
    categoryId: 'category-04'
  },
  {
    imageUrl: prod1,
    title: 'Category Title 05',
    categoryId: 'category-05'
  },
  {
    imageUrl: prod1,
    title: 'Category Title 06',
    categoryId: 'category-06'
  }
]

const Category = () => {
  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <section style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", 
      }} className="w-full p-2">

        <h1 className='text-lg font-bold mt-2 ml-2 mb-3'>Main</h1>

        <div className='grid grid-cols-3 grid-rows-[auto] gap-5'>
        {categoryArr.map(({imageUrl, title, categoryId}, index) => <CategoryUnitItem key={index} imageUrl={imageUrl} title={title} categoryId={categoryId}/>)}
          

        </div>

      </section>
    </div>
  )
}

export default Category

const CategoryUnitItem = ({imageUrl, title, categoryId}) => ( 
  <Link to={`/category/${categoryId}`}>
  <IconButton sx={{color:'red'}}>

  <div className="w-full rounded-md border-2 py-4 px-1 flex flex-col items-center">

    <img 
    src={imageUrl}
    alt={title}
    className='rounded-full w-[100px] h-[100px]'
    />
    <h2 className='text-xs text-black font-bold'> {title}</h2>
  </div>

  </IconButton>
  </Link>

);