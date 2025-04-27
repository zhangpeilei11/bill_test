import { Outlet,Link } from "react-router-dom"
function Layout(){
  const location = {
    // pathname:'/layout/mine',
    // state:{name:'张三'}
    name:'张三',
    id:2
  }  
  return (
    (<div>Layout
        <Link to='/layout'>首页</Link>
        <Link to='/layout/mine' state={location}>我的</Link>
         <Outlet/>
    </div>)
    
  )
}

export default Layout