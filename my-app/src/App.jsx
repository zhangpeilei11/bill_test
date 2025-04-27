
import { useState,useRef,createContext,useContext,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { decrement,increment,addToNumber } from "./store/modules/counterStore"
import { getList } from "./store/modules/channeStore"
const ValueContext = createContext()
const URL = 'http://geek.itheima.net/v1_0/channels'
const Son = ()=>{
  const value = useContext(ValueContext)
  console.log(value);
  
  return <span>{value}</span>
}
const useToggle = ()=>{
  const [showText,setShowText] = useState(true)
  const toggle =  ()=>{
    setShowText(!showText)
  }
  return {
    showText,
    toggle
  }
}
function App() {
  const {count} = useSelector(state=>state.counter);

  const dispatch = useDispatch()
  // const [list,setList] = useState([
  //   {name:'张三',content:'这是一条评论',like:8,date:'2025-4-21'},
  //   {name:'李四',content:'这是一条评论',like:8,date:'2025-4-21'},
  //   {name:'王五',content:'这是一条评论',like:8,date:'2025-4-21'}
  // ])
  const [value,setValue] = useState('')
  const inputRef = useRef(null)
  useEffect(()=>{
    // async function getlist(){
    //   await fetch(URL)
    // }
    // getlist()
    dispatch(getList());
    // setTimeout(() => {
    //   console.log(list);
    // }, 500);
    
    
  },[dispatch])
  const {list} = useSelector(state=>state.lister);
  const {showText,toggle} = useToggle()
  return (
      <div style={{color:'red'}} className="App">
        <span>{count}</span>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(addToNumber(10))}>10</button>
        <button onClick={()=>dispatch(addToNumber(20))}>20</button>
        <ul>
          {list.map(item=><li key={item.name}>{item.name}</li>)}
        </ul>
        <input type="text" ref={inputRef} value={value} onInput={(e)=>setValue(e.target.value)}/>
        {showText&&<span>显示</span>}
        <button onClick={toggle}>切换</button>
        <ValueContext.Provider value={value}>
          <Son/>
        </ValueContext.Provider>
      </div>
     
  )
}
//http://geek.itheima.net/v1_0/channels
export default App
