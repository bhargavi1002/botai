import { Box, Stack, Typography } from "@mui/material"; 
import InitialData from "../InitialData/InitialData"
import InputChat from "../InputChat/InputChat";
import ChatCard from "../ChatCard/ChatCard"
import FeedbackPopup from "../FeedbackPopup/FeedbackPopup"
import { useEffect, useRef, useState } from 'react';
import { useOutletContext } from "react-router-dom";
import sampleData from "../../sampleData.json";
import Navbar from "./Navbar";


const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const listRef = useRef(null); 
  const [chatId, setChatId] = useState(1); 
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [scrollToBottom, setScrollToBottom] = useState(false); 
  const { chat, setChat } = useOutletContext();
  
  const generateResponse = (input) => {

    const response = sampleData.find(item => input.toLowerCase() == item.question.toLowerCase())

    let answer = "Sorry, Did not understand your query!"

    if (response != undefined) {
        answer = response.response
    }

    setChat(prev => ([...prev,
    {
        type: 'Human',
        text: input,
        time: new Date(),
        id: chatId
    },
    {
        type: 'AI',
        text: answer,
        time: new Date(),
        id: chatId + 1
    }
    ]))

    setChatId(prev => prev + 2)

}
useEffect(() => {
  listRef.current?.lastElementChild?.scrollIntoView()
}, [scrollToBottom])


  return (
    <Stack
    height={'100vh'}
    justifyContent={'space-between'}
      sx={{
        '@media (max-width: 767px)': {
            background :'linear-gradient(#F9FAFA 60%, #EDE4FF)'
        },
      }}
    >

      <Navbar />
      <Stack height={1} flexGrow={0}>
        {chat.length === 0 && <InitialData generateResponse={generateResponse}/>}
        {chat.length > 0 && (
         <Stack
         height={1}
         flexGrow={0}
         p={{ xs: 2, md: 3 }}
         spacing={{ xs: 2, md: 3 }}
         sx={{
             overflowY: 'auto',
             '&::-webkit-scrollbar': {
                 width: '10px',
             },
             '&::-webkit-scrollbar-track': {
                 boxShadow: 'inset 0 0 8px rgba(0,0,0,0.1)',
                 borderRadius: '8px'
             },
             '&::-webkit-scrollbar-thumb': {
                 backgroundColor: 'rgba(151, 133, 186,0.4)',
                 borderRadius: '8px'
             }
         }}
         ref={listRef}
     >
            
            {chat.map((item, index) => (
              <ChatCard
                details={item}
                key={index}
                updateChat={setChat}
                setSelectedChatId={setSelectedChatId}
                showFeedbackModal={() => setShowModal(true)}
              />
            ))}
          </Stack>
        )}

      
        <InputChat
          generateResponse={generateResponse} 
          setScroll={setScrollToBottom} 
          chat={chat} 
          clearChat={() => setChat([])} 
        />
      </Stack>

    
       <FeedbackPopup
        open={showModal}
        updateChat={setChat}
        chatId={selectedChatId}
        handleClose={() => setShowModal(false)}
      /> 
    </Stack>
  );
}

export default Home;