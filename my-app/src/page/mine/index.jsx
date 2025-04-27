import { useLocation } from "react-router-dom"
const Mine = ()=>{
    const location =  useLocation()
    console.log(location);
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name')
    console.log(name);
    
    
    return <div>我的</div>
}
export default Mine