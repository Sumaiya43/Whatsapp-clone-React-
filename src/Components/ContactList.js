import React from 'react'
import styled from "styled-components";
import {FaSearch} from "react-icons/fa"
import {AiOutlineMenu, AiOutlineHistory} from "react-icons/ai"
import {BsFillChatLeftTextFill} from "react-icons/bs"
import { Link } from 'react-router-dom';
import users from '../Users.js';


const Container = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   background: #f8f9fb;
   flex: 1.6;
`

const ProfileInfo = styled.div`
   display: flex;
   flex-direction: row;
   background-color: #ededed;
   padding: 10px;
   justify-content: space-between;
   align-items: center;
`

const ProfileImg = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
`
const ProfileMenu = styled.div`
    display: flex;
    align-items: center;
    color: gray;
`

const SeacrhBox = styled.div`
    background-color: #f6f6f6;
    padding: 10px;
    
`

export const SeacrhContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    width: 100%;
    padding: 5px 10px;
`

export const SearchInput = styled.input`
    width: 100%;
    padding: 0px 10px;
    border: none;
    outline: none;
    font-size: 1rem;
`

const ContactItem = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   border-bottom: 1px solid #f2f2f2;
   background-color: white;
   cursor: pointer;
   padding: 15px 12px;
 
`

const ProfileMessage = styled(ProfileImg)`
    width:  50px  ;
    height: 42px;
   
    
`

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
    width:100%

`

const ConatctName = styled.span`
    
`

const LastMessage = styled.span`
    font-size: 14px;
    
    margin-top: 5px;
`

const MessageTime = styled.span`
    font-size: 12px;
    color: rgba(0,0,0,0.8);
    display: flex;
    justify-content: flex-end;
    
`

const Contacts = ({user}) => {
     return (
        <ContactItem>
           <ProfileMessage src={user.img} alt=""/>
           <ContactInfo>
               <ConatctName>{user.name}</ConatctName>
               <LastMessage>{user.chat}</LastMessage>
           </ContactInfo>
           <MessageTime>{user.time}</MessageTime>
        </ContactItem>
     )
};



const ContactList = () => {
  return (
    <Container>
        <ProfileInfo> 
            <ProfileImg src="https://s3.zerochan.net/240/45/47/3537395.jpg" alt="" />
            <ProfileMenu>
                <AiOutlineHistory style={{marginRight:"1rem"}}/>
                <BsFillChatLeftTextFill style={{marginRight:"1rem"}}/>
                <AiOutlineMenu/>
            </ProfileMenu>
        </ProfileInfo>
        <SeacrhBox>
             <SeacrhContainer>
                 <FaSearch style={{color: "gray"}}/>
                 <SearchInput placeholder='Search or start new chat' />
             </SeacrhContainer>
        </SeacrhBox>
        
         {
             users.map((item) => (
                 <Contacts user={item} key={item.id}/>
             ))
         }
        
    </Container>
  )
}

export default ContactList