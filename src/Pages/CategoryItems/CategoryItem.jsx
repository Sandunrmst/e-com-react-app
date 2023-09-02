import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import prod1 from '../../img/prod1.jpg'
import { categorySelector } from "../../Store/ReduxSlice/categorySlice";
import { Rating } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import getDataFormSubCollection from "../../Utils/dataFetch/getDataFromSubCollection";
import Loading from "../../Componrnts/Loading/Loading";

const CategoryItem = () => {

  const category = useSelector(categorySelector)
  console.log(category);
  const {categoryId} = useParams();//This will output current location of dynamic id
  console.log(categoryId);

  const [categoryDetails] = category.filter((ele)=> ele.id === categoryId);
 
  const [categoryItemsData, setCategoryItemsData] = useState([])

  useEffect(()=>{
    getDataFormSubCollection('category', categoryId, categoryId, setCategoryItemsData)
  },[]);

  console.log('category data', categoryItemsData);

  if(categoryItemsData.length === 0){
    return <Loading/>
  }

  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <h1 className="ml-3 mt-2 font-bold text-lg">{categoryDetails.title}</h1>
      <div className="w-full grid grid-cols-3 grid-rows[auto] gap-4">
        {categoryItemsData?.map(({img,title},index) => <CategoryItemUnit  key={index} img={img} title={title}/>)}
      </div>
    </div>
  )
}

export default CategoryItem

const CategoryItemUnit = ({img, title}) =>(
  <div style={{boxShadow: "rgba(0,0,0,0.24) 0px 3px 8px"}} className="w-full">
      <img src={img} title={title} className="w-full object-contain"/>
      <div className="m-1">
      <h3>{title}</h3>
      <Rating
           name={img}
           value={3.3}
           precision={0.5}
           size='small'
      />
      </div>

    </div>
    )