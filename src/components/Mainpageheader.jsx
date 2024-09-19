import { useState } from "react";
import styled from "styled-components"

function Mainpageheader({isSelectednumber,setIselectednumber,totoalScore,showError,setShowError}) {

    let arrNumber = [1, 2, 3, 4, 5, 6];

    const selectNumber = (val)=>{
        setIselectednumber(val);
        setShowError("")
    }
    

    return (
        <Mainpagehead>
            
            <div className="totol-score">
                <h1>{totoalScore}</h1>
                <p>Total Score</p>
            </div>
            <div className="select-number">
                 <Error>{showError}</Error>
                <div className="buttons">
                {arrNumber.map((val, i) => {
                    return (
                        <Button
                        isSelect={val === isSelectednumber}
                        key={i}
                        onClick={()=>{selectNumber(val)}}
                        >{val}</Button>
                    )
                })}
                </div>
                <div className="hint">
                <p>Select Number</p>
                </div>
            </div>
        </Mainpagehead>
    )
}

export default Mainpageheader

const Mainpagehead = styled.div`
max-width: 1180px;
margin: 0 auto;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: space-between;
/* border: 1px solid black; */
padding: 0 10px;
.totol-score{

    h1{
        font-size: 35px;
        text-align: center;
    }
    p{
    font-size: 22px;
    
    }
}
.buttons{
    display: flex;
    gap: 8px;
}

.select-number{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: end;
}
.hint p{
    font-size: 22px;
}
`;

const Button = styled.button`
border: 1px solid black;
font-size: 30px; 
cursor: pointer;
padding:5px 12px;
background-color: ${(props)=>props.isSelect ? "black" : "white"};
color: ${(props)=>(!props.isSelect) ? "black" : "white"};
`;

const Error = styled.div`
color: red;
font-size: 20px;
`;