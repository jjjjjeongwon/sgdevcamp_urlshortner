import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

//pages
import MainPage from './page/main/MainPage';
import ResultPage from './page/result/ResultPage';
import RedirectPage from './page/redirect/RedirectPage';

function App() {
  const [full, setFull] = useState();
  const [short, setShort] = useState();

  return (
    <Container>
      <Routes>
        <Route path="/" element={<MainPage setFull={setFull} setShort={setShort} />} />
        <Route path="/:shortUrl" element={<RedirectPage/>} />
        <Route path="/result" element={<ResultPage full={full} short = {short} />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div``;
export default App;