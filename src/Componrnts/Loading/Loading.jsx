
import style from './loading.module.css'; //This is a one way of css import 

const Loading = () => {
  return (
    <div className="relative bg-white z-[101] w-screen h-screen flex flex-col justify-center items-center">
      
      <div className={style.e_com_loader}></div>
      <div className='mt-3'>Loading...</div>
    </div>
  )
}

export default Loading