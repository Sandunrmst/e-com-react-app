import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import prod1 from '../../img/prod1.jpg'
import { categorySelector } from "../../Store/ReduxSlice/categorySlice";
import { Rating } from "@mui/material";

const itemArr = [
  {
    imageUrl: prod1,
    title: 'Category Title 01',
  },
  {
    imageUrl: prod1,
    title: 'Category Title 02',
  },
  {
    imageUrl: prod1,
    title: 'Category Title 03',
  },
  {
    imageUrl: prod1,
    title: 'Category Title 04',
  },
  {
    imageUrl: prod1,
    title: 'Category Title 05',
  },
  {
    imageUrl: prod1,
    title: 'Category Title 06',
  }
]


const CategoryItem = () => {

  const category = useSelector(categorySelector)
  console.log(category);
  const {categoryId} = useParams();//This will output current location of dynamic id
  console.log(categoryId);

  const [categoryDetails] = category.filter((ele)=> ele.id === categoryId);
  
  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <h1 className="ml-3 mt-2 font-bold text-lg">{categoryDetails.title}</h1>
      <div className="w-full grid grid-cols-3 grid-rows[auto] gap-4">
        {itemArr.map(({imageUrl,title},index) => <CategoryItemUnit  key={index} imageUrl={imageUrl} title={title}/>)}
      </div>
    </div>
  )
}

export default CategoryItem

const CategoryItemUnit = ({imageUrl, title}) =>(
  <div style={{boxShadow: "rgba(0,0,0,0.24) 0px 3px 8px"}} className="w-full">
      <img src={imageUrl} title={title} className="w-full object-contain"/>
      <div className="m-1">
      <h3>{title}</h3>
      <Rating
           name={imageUrl}
           value={3.3}
           precision={0.5}
           size='small'
      />
      </div>

    </div>
    )