import { Link, useSearchParams,useParams } from "react-router-dom"
const Login = ()=>{
    // const [params] = useSearchParams()
    const params = useParams()
    // console.log(params.get('id'));
    console.log(params.id);
    
    return (
    <div>login<Link to='/home'>跳转首页</Link></div>
    
)
    
}
export default Login