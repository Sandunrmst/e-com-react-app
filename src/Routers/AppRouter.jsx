import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";
import Login from "../Pages/Login/Login";
import UserProtected from "./UserProtected";
import Category from "../Pages/Category/Category";

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout />,
    children:[
      {
        index: true,
        element:<Home />
      },
      {
        path: 'category',
        element:<Category />
      },
      {
        element:<UserProtected/>,
        children:[
          {
            path:'user',
            element:<User />
          }
        ]
      }
    ]
  },
  {
    path:'/profile',
    element:<Login />
  }

])

const AppRouter = () => {

  return <RouterProvider router={router} />;

  // return (
  //   <BrowserRouter>
  //       <Routes>
  //           <Route path="/" element={<MainLayout/>}>
  //               <Route index element ={<Home/>} />
  //               <Route element={<UserProtected />}>
  //                 <Route path="user" element={<User/>} />
  //               </Route>
  //           </Route>
  //           <Route path="/login" element={<Login />} />
  //       </Routes>
  //   </BrowserRouter>
  // )
}

export default AppRouter