
import menu from '../../img/menu-svgrepo-com.svg'
import search from '../../img/search-svgrepo-com.svg'
import cart from '../../img/cart-large-4-svgrepo-com.svg'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { IconButton, colors } from '@mui/material'; //when user click on icons it will highlight with given colors like hover
import { useState } from 'react';


const Header = () => {

  const [isSearch, setIsSearch] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-[100] w-full p-5 bg-my-background flex items-center justify-between drop-shadow-header-shadow">

    {/* header right  */}
    <div className='flex items-center'>
      <IconButton sx={{color:'red'}}>
        <MenuIcon sx={{color:'black'}}/>
      </IconButton>

      <h1 style={{ display: window.innerWidth < 640 ? isSearch ? "none" : "inline-block" : "inline-block",}}>RMST <span>Dev</span></h1>
      <div type="text" 
        placeholder="Search" 
        style={{
          background: window.innerWidth < 640 ? isSearch ? "#fdf3f3" : "inherit" : "#fdf3f3", 
        }}
      className='ml-2 flex items-center rounded-full overflow-hidden bg-[#fdf3f3]'>
        <input 
        type="text" 
        placeholder="Search" 
        style={{
          display:
            window.innerWidth < 640 ? isSearch ? "inline-block" : "none" : "inline-block", 
        }}
        className='hidden ml-2 sm:inline-block outline-none p-2 font-semibold text-sm w-[200px] bg-inherit' />
        <IconButton onClick={()=> {
          if(window.innerWidth < 640) { // This only re-rendering on mobile view
            setIsSearch(!isSearch) //If isSearch false it will true if it false it will true
          }
        }}>
          <SearchIcon sx={{
                color:
                window.innerWidth < 640 ? isSearch ? "rgb(156 163 175)" : "black" : "rgb(156 163 175)", 
          }}/>
        </IconButton>
      </div>
    </div>

    {/* header left  */}
    <IconButton>
      <div className='relative p-1'>
      <ShoppingCartOutlinedIcon className='cursor-pointer text-black'/>
      <div className='absolute top-[-1px] right-0 rounded-full bg-black text-white w-4 h-4 text-[10px] font-semibold flex justify-center items-center'>0</div>

      </div>
    </IconButton>
    </header>
  )
}

export default Header