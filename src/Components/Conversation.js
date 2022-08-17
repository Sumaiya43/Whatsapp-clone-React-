import React from 'react'
import styled from "styled-components";
import {BsEmojiLaughing} from "react-icons/bs"
import {SeacrhContainer, SearchInput} from "./ContactList.js"

const Container = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   background: #f6f7f8;
   flex: 3;
`

const Bg = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`

const ProfileHeader = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ededed;
    padding: 10px;
    align-items: center;
    gap: 10px;
`

const ProfileImg = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    
`

const UserName = styled.span`
    
`

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #e5ddd6;
    height: 100%;
    width: 100%;
`

const MessageDiv = styled.div`
    display: flex;
    margin: 5px 15px;
    
`

const  MyMessage = styled.div`
    max-width: 50%;
    color: #303030;
    font-size: 14px;
    padding: 8px 10px;
    background-color: #daf8cb;
    
`


const ChatBox = styled.div`
    display: flex;
    background-color: #f0f0f0;
    padding:10px;
    align-items: center;
    bottom: 0;
`

const Conversation = () => {
  return (
    <Container>
       <ProfileHeader>
          <ProfileImg src="https://img.webnovel.com/bookcover/15393500605196005/300/300.jpg?updateTime=1573980197476" alt="" />
          <UserName>Mahin Rashid</UserName>
       </ProfileHeader>
       <MessageContainer>
            <MessageDiv>
                 <MyMessage>
                     hey!!
                 </MyMessage>
            </MessageDiv>
       </MessageContainer>
       <ChatBox>
            <SeacrhContainer>
                 <BsEmojiLaughing style={{color: "gray"}}/>
                 <SearchInput placeholder='Type a message' />
             </SeacrhContainer>
       </ChatBox>
    </Container>
  )
}

export default Conversation