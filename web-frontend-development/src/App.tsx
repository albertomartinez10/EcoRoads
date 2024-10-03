import { Routes, Route } from 'react-router-dom';
import Reports from './pages/Reports/Reports';
import styled from 'styled-components';
import Chat from './pages/Chat/Chat';
import Navbar from './components/navbar/Navbar';

const Container = styled.div`
  padding: 15px;
`
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  max-width: 90%;
  height: 80vh;
  margin: 4rem auto;
  overflow-y: auto;
  scroll-behavior: smooth;
`

const App = () => {
  return (
    <Container>
      <Navbar/>
      <HomeContainer>
        <Routes>
          <Route path="/" element={<Chat/>}/>
          <Route path="/Reports" element={<Reports/>}/>
        </Routes>
      </HomeContainer>
    </Container>
  )
}

export default App;
