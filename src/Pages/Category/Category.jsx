import prod1 from '../../img/prod1.jpg'

const Category = () => {
  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <div style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", 
      }} className="w-full p-2 grid grid-cols-3 grid-rows-[auto] gap-5">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
      </div>
    </div>
  )
}

export default Category

const CategoryItem = () => <div className="w-full rounded-md border-2 border-pink-600 flex flex-col items-center">

  <img src={prod1}/>
  <h2> Category Name</h2>
</div>