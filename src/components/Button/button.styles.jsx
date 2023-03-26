import styled from "styled-components";


export const InvertedButton = styled.button`
    padding: 10px;
    font-size:20px;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid #000;

    &:hover {
        background-color: #000;
        color: #fff;
        border: 1px solid #fff;
`;



export const NewsletterButton = styled.button`
  flex: 1;
  border: none;
  background-color: #000000;
  color: white;
`;



export const SignInButton = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #000000;
  color: white;
  cursor: pointer;
`;



export const GoogleSignInButton = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #000000;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;