import { useRef } from "react"
import prod1 from '../../img/prod1.jpg'
import prod2 from '../../img/prod2.jpg'
import prod3 from '../../img/prod3.jpg'
import prod4 from '../../img/prod4.jpg'


const itemImageArr = [prod1,prod2,prod3,prod4]

const ItemPage = () => {
  const mainImageRef = useRef();
  const subImageRef = useRef([]);

  const mainImageChanger = (index)=>{
    subImageRef.current[index].style.border = "2px solid gold";
    mainImageRef.current.src = subImageRef.current[index].src
    for(let i=0; i<itemImageArr.length; i++){
      if(i !== index){
        subImageRef.current[i].style.border = 'none';
      }
    }
  }

  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <h1 className="text-lg font-bold px-3 mb-5 mt-5"> Item Title</h1>
      <img 
        ref={mainImageRef}
        src={itemImageArr[0]} 
        alt="main item" 
        className="w-full object-cover rounded-md h-[260px]"/>

      <div className="w-full mt-5 grid grid-cols-4 grid-rows-1 gap-3 mb-5">
        {itemImageArr.map((ele,index)=>
          <img 
            onClick={() => mainImageChanger(index)}
            name= {`Item image ref : ${index}`}
            ref={(refEle)=> subImageRef.current[index]=refEle}
            src={ele} 
            key={index} 
            alt={ele} 
            className="w-full h-[60px] object-cover rounded-sm cursor-pointer"/>
          
        )}
      </div>
    </div>
  )
}

export default ItemPage