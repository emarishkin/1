import { useState } from "react"
import logo from '/222.png'
export const AppHeader = () => {

const [now,setNow] = useState(new Date())
setInterval(()=>setNow(new Date()),1000)

    return(
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'grey',padding:10}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <img style={{width:20,height:20}} src={logo} alt="" />
                <h3>Сайт</h3>
            </div>
            <div>
              {now.toLocaleTimeString()}
            </div>
            <div>
              <button>Меню</button>
            </div>
        </div>
    )
}