import styled from "styled-components"
import Homepage from "./Homepage";
import Mainpage from "./Mainpage";
import { useState } from "react";

function Startgame() {

  const [isactive,setIsactive] = useState(false)

  return (
    <>
<MainContainer>
  {isactive ? 
   <Mainpage />
   : <Homepage isactive={isactive} setIsactive={setIsactive}/>}
   
</MainContainer>
    </>
  )
}

export default Startgame

const MainContainer = styled.div`

`;