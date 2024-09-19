import { useState } from "react"
import Mainpagedata from "./Mainpagedata"
import Mainpageheader from "./Mainpageheader"

function Mainpage() {

    
    const [isSelectednumber,setIselectednumber] = useState()
    const [totoalScore,setTotalScore] = useState(0)
    const [showError,setShowError] = useState()
    const [randomimg, setRandomimg] = useState(1)

    const generatNo = () => {
        const randomNo = Math.floor((Math.random() * 6) + 1)
        return randomNo;
    }

    const randomdice = () => {

        if(!isSelectednumber) return setShowError("please select no. !");

        const no = generatNo();
        // console.log(no)
        setRandomimg(no)
        setIselectednumber()
        
        
        if(isSelectednumber == no){
            setTotalScore(prev => prev + isSelectednumber)
        }else{
            setTotalScore(prev => prev - 2)
        }

        
            
    }

  return (


    <div>
        <Mainpageheader 
        isSelectednumber={isSelectednumber}
        setIselectednumber={setIselectednumber}
        totoalScore={totoalScore}
        showError={showError}
        setShowError={setShowError}
        />
        <Mainpagedata 
        randomimg={randomimg}
        setRandomimg={setRandomimg}
        setIselectednumber={setIselectednumber}
        setTotalScore={setTotalScore}
        randomdice={randomdice}/>
    </div>
  )
}

export default Mainpage