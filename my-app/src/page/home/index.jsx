import { useNavigate } from "react-router-dom"
const Home = ()=>{
    const navigate = useNavigate()
    // return (<div onClick={()=>navigate('/login?id=10&name=张三')}>首页</div>)
    return (<div onClick={()=>navigate('/login/10')}>首页</div>)
    
}
export default Home