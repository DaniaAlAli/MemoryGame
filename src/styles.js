import styled, { createGlobalStyle } from "styled-components";

const ListWrapper = styled.div`
  align-item: center;
  justify-content: center;
  display: flex;
`;
const TitleWrap = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  margin-top: 60px;
  text-align: center;
  color: white;
  background-color: #2b2b29;
  border: black;
  border-radius: 5px;
  font-family: "Monoton", cursive;
`;

const PhotoWrapper = styled.div`
  align-item: center;
  justify-content: center;
  display: flex;
  margin: 40px;

  img {
    width: 200px;
    height: 200px;
    border: black;
    border-radius: 30px;
    :hover {
      cursor: pointer;
      border: 2px solid white;
      border-radius: 100px;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
body{
background-image: url("https://i.pinimg.com/564x/c8/6f/36/c86f365a39c5e6e4ccc29c9a2b191202.jpg");
align-item: center;
justify-content: center;
display: flex;
}

`;
export { TitleWrap, ListWrapper, PhotoWrapper, GlobalStyle };
