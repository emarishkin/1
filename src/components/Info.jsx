import { info } from "../../data"


export const Info = () =>{
    return(
        <div style={{display:'flex',alignItems:'center',flexDirection:'column',marginBottom:10}}>
                    <h3>Чем мы отличаемся от других</h3> 
                       {info.map((inf)=>(
                        <div style={{width:400,border:'1px solid black',padding:10,marginBottom:10}} key={inf.title}>
                           <h3>{inf.title}</h3> 
                           <p>{inf.descriptions} </p>
                        </div>
                       ))}
                    </div>
    )
}