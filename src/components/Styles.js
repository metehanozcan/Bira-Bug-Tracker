import styled from "styled-components";

//background
import background from "./../assets/beerbg.png";

export const colors = {
  primary: "#f28e1c",
  secondary:"#814D30",
  theme: "#BE185D",
  light1: "#F3F4F6",
  light2: "#E5E7EB",
  dark1: "#1F2937",
  dark2: "#4B5563",
  dark3: "#9CA3AF",
  red: "#Dc2626",
};
//*Styled components
export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    // url(${background});
  background-size: cover;
  background-attachment: fixed;
`;

//*Home
export const StyledTitle = styled.h1`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 20px;
`;
export const StyledSubTitle = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.secondary)};
  padding: 5px;
  margin-bottom: 25px;
`;
//! SOLUTION https://stackoverflow.com/questions/53920405/change-background-image-with-styled-component
export const Avatar = styled.div`
  background-image: url(${props => props.img});
  width: 85px;
  height: 85px;
  background-repeat: no-repeat;
  background-position:center;
  margin:auto;
`;

