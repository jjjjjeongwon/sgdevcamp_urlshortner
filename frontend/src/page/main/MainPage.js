import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MainTitle = ({ setFull, setShort }) => {

  const inputRef = useRef();
  const navigate = useNavigate();


  async function postUrl() {
      await axios.post('http://localhost:8080/shorts', {
        full: inputRef.current.value,
      })
      .then((res) => {
        console.log(res.data);
        console.log('전체',res);
        setFull(res.data.full);
        setShort(res.data.short);
    navigate('/result');
      })
      .catch((e) => {
        console.log("연결 오류", e);
        alert('단축할 url을 입력해주세요!');
      })
  }

  const onSubmitUrl = () => {
    console.log(inputRef.current.value);
    postUrl();
  };
  
  return (
    <Container>
      <Title>Title</Title>
      <SearchContainer>
        <InputBox placeholder="단축할 url을 입력하세요" ref={inputRef} />
        <SearchButton onClick={onSubmitUrl}>Shorten</SearchButton>
      </SearchContainer>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  font-size: large;
  margin: 200px auto 50px;
  font-size: xx-large;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InputBox = styled.input`
  width: 500px;
  height: 45px;
  border: none;
  border-radius: 3px;
  background-color: #f0f0f0;
  padding: 10px;
  box-sizing: border-box;
  &:focus {
    outline: 1.5px solid gray;
  }
`;

const SearchButton = styled.button`
  margin-left: 5px;
  width: 100px;
  background-color: lightgray;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  &:hover {
    background-color: gray;
    color: white;
  }
`;
export default MainTitle;