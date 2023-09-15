import { useLocation, useParams } from "react-router-dom"


const NoUrl = () => {
  const params = useParams()
  console.log(params['*'])

  const {pathname} = useLocation()
  console.log(pathname)

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
        
        <h1 className="text-6xl font-bold">404</h1>
        <p>The requested URL {pathname} was not found on this server</p>
    </div>
  )
}

export default NoUrl