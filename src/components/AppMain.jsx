import { Info } from "./Info"
import { Tripi } from "./Tripi"

export const AppMain = () => {
    return(
        <>
        <div style={{display:'flex',alignItems:'center',flexDirection:'column',marginBottom:10}}>
        <h3 style={{marginBottom:2}}>Result University</h3>
        <p style={{fontSize:10}}>Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами</p>
        </div>
          <Info />
          <Tripi />
        </>
    )
}