import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  const [whoIsActive, setWhoIsActive] = useState({
    Home:true,
    Category: false,
    Profile:false
  })

  return (
    <footer className="fixed bottom-0 left-0 z-[99] w-full p-5 bg-my-background flex items-center justify-between">
      <FooterIcon clickFun={{whoIsActive, setWhoIsActive}} Icon={HomeOutlinedIcon} IconText='Home'/>
      <FooterIcon clickFun={{whoIsActive, setWhoIsActive}} Icon={AppsOutlinedIcon} IconText='Category'/>
      <FooterIcon clickFun={{whoIsActive, setWhoIsActive}} Icon={AccountCircleOutlinedIcon} IconText='Profile'/>

    </footer>
  )
}

export default Footer;

// Repeat component 
const FooterIcon = ({Icon, IconText, clickFun}) => {

  const clickHandle = () => {
    const obj = {
      Home:true,
      Category: false,
      Profile:false
    }
    if(IconText === "Category"){
      obj.Category=true,
      obj.Home = false,
      obj.Profile = false
    }else if(IconText ==='Profile'){
      obj.Category=false,
      obj.Home = false,
      obj.Profile = true
    }   

    clickFun.setWhoIsActive(obj)
  }
  return (

  <Link to={IconText==="Home"? '/' : `/${String(IconText).toLowerCase()}`}>

  <IconButton 
    sx={{padding:"4px", borderRadius: "5px", color:"red"}}
    onClick={clickHandle}
    >
    <div 
      style={{
        borderBottom: clickFun.whoIsActive[IconText] && "2px solid red",
        color: clickFun.whoIsActive[IconText] && "red",
      }}
      className='hover:text-[#c82196] transition-all text-gray-800'>
      <Icon/>
      <p className='text-xs font-semibold pb-2'>{IconText}</p>
    </div>
  </IconButton>

  </Link>
)};
// Repeat component 