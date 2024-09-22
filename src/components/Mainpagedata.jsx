import { useState } from "react"
import styled from "styled-components"

function Mainpagedata({ randomimg, setRandomimg, randomdice, setTotalScore, setIselectednumber }) {

    const [showRule,setshowRule] = useState(false)

    const resetdata = () => {
        setTotalScore(0)
        setIselectednumber()
        setRandomimg(1)
    }

    const showRules = ()=>{
        setshowRule(!showRule)
    }


    return (
        <Maincontentblock>
            <div className="maindata">
                <div className="img">
                    <img
                        onClick={() => { randomdice() }}
                        src={`./images/dice_${randomimg}.png`} alt="" />
                    <div className="text">
                        Click on Dice to roll
                    </div>
                </div>
                <div className="btns">
                    <button id="btn1"
                        onClick={() => { resetdata() }}>Reset Score</button>
                    <button id="btn2"
                    onClick={() => { showRules() }}>
                        {showRule ? "Hide" : "Show"} Rules</button>
                </div>
            </div>
            
            {showRule ? <Rules className="rulesbook">
                <div className="rules">
                <h2>How to play dice game</h2><hr/>
                <p>Select any number, Click on dice image</p>
                <p>after click on dice, If selected number is equal to dice number you will get some points according to selected number, If you get wrong guess than 2 points will be diducted </p>
                </div>
                <button onClick={()=>{showRules()}}>&times;</button>
            </Rules> :
            " "
            }

        </Maincontentblock>
    )
}

export default Mainpagedata

const Maincontentblock = styled.div`
max-width: 1180px;
margin: 0 auto;
max-height: 100vh;

.maindata{
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

}
img{
    cursor: pointer;
}

.text{
    font-size: 25px;
    text-align: center;
}

.btns{
    display: flex;
flex-direction: column;
gap: 30px;
margin-top: 20px;
}

.btns #btn1{
    background-color:white;
    color:black;
    min-width: 220px;
    height: 40px;
    border-radius: 2px;
    border:2px solid black;
    cursor: pointer;
}

.btns #btn1:hover{
    background-color: #f3f2f1;
    font-size: 14px;
}

.btns #btn2{
    background-color: black;
    color:white;
    min-width: 220px;
    height: 40px;
    border-radius: 2px;
    border: transparent;
    cursor: pointer;
}
.btns #btn2:hover{
    background-color: rgb(20, 20, 20);
    font-size: 14px;
}
`;

const Rules = styled.div`
background-color: #e4d8c0;
max-width: 892px;
text-align: start;
padding: 0 20px;
margin: 5px auto;
border-radius: 5px;
display: flex;
align-items: start;
justify-content: space-between;
font-size: 15px;


button{
    font-size: 30px;
    margin-top: 10px;
    border-radius: 10px;
    color: black;
    border: 1px solid black;
    background-color: transparent;
    cursor: pointer;
}

`;