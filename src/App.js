import styled from "styled-components";
import ContactList from "./Components/ContactList.js"
import Conversation from "./Components/Conversation.js";

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: row;
   background: #f8f9fb;
`

function App() {
  return (
    <Container>
       <ContactList/>
       <Conversation/>
    </Container>
  );
}

export default App;
