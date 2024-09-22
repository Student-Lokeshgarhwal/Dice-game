import styled from "styled-components"

function Homepage({isactive,setIsactive}) {
  return (
    <Homepagecontainer>
       <div className="container">
       <div className="image">
            <img src="./images/dices.png" alt="" />
        </div>
        <div className="contant">
         <h1> DICE GAME</h1>
          <Button onClick={()=>{setIsactive(!isactive)}}>Play Now</Button>
        </div>
       </div>
    </Homepagecontainer>
  )
}

export default Homepage

const Homepagecontainer = styled.div`
width: 100vw;
height: 100vh;
.container{
  display: flex ;
align-items: center;
justify-content:space-between;
margin: auto ;
width: 1180px;
/* border: 1px solid black; */
margin-top: 100px;
padding:0px 20px;
}
.contant{
  display: flex;
  flex-direction: column;
  margin: auto;
}
h1{
  font-size: 50px;
}
`;

const Button = styled.button`
background-color: black;
color:white;
min-width: 220px;
height: 40px;
border-radius: 2px;
border: transparent;
&:hover{
  background-color: #232222;
}
`;