import { StyledTitle, StyledSubTitle,Avatar } from "./../components/Styles";


import logo from "./../assets/ico.png";
const Home = () => {
  return (
    
    <div>
      <div style={{
        // position:"absolute",
        top:0,
        left:0,
        backgroundColor: "transparent",
        width: "100%",
        height:"100%",
        padding: "15px",
        display:"cover",
        // justifyContent:"",
      }}
      >

       
    <Avatar img={logo}/>
      </div>

      <StyledTitle size={65}>Free BEER!🍻</StyledTitle>

      <StyledSubTitle size={25}>Work in progress⏳</StyledSubTitle>
    </div>
  );
};

export default Home;
