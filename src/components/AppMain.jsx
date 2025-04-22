import { useState } from "react"
import { Button } from "./Button"
import { Info } from "./Info"
import { tripitropa } from "../../data"

export const AppMain = () => {

const [content,setContent] = useState('нажми на кнопку')


    return(
        <>
        <div style={{display:'flex',alignItems:'center',flexDirection:'column',marginBottom:10}}>
        <h3 style={{marginBottom:2}}>Result University</h3>
        <p style={{fontSize:10}}>Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами</p>
        </div>
         <section>
              <Info />
         </section>
         <section>
            <Button Ontypoy={()=>setContent('way')}>доступность</Button>
            <Button Ontypoy={()=>setContent('easy')}>яркость</Button>
            <Button Ontypoy={()=>setContent('program')}>интерактивность</Button>
            <p>{tripitropa[content]}</p>
         </section>
        </>
    )
}