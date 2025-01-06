import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {IconMicro, IconSend, IconClear} from '../../assets/icons'
import { UserInput, ChatTop, Message } from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { placeholderResponses} from '../static'
const ChatScreen = ({route}) => {
  const { chat, initialUserMessage } = route.params || {};
  const [firstMessageSent, setАirstMessageSent] = useState(0)


  const [messages, setMessages] = useState(chat ?  chat.messages  : initialUserMessage ? [
    {
      id: '1',
      text: initialUserMessage,
      isUser: true,
    },
  ] :{
    id: '2',
    text: placeholderResponses[0],
    isUser: false,
  }, );
  if ( initialUserMessage?.length && firstMessageSent ===0){
    console.log("a1")
    setTimeout(() => {
      console.log("a2")
      const newAIMessage =     {
        id: '2',
        text:placeholderResponses[1],
        isUser: false,
      }
      setMessages(prev => [newAIMessage, ...prev]);
      setАirstMessageSent(1)
    }, 1000);
  }

  const [streaming, setStreaming] = useState(false);
  const chatRef = useRef();

  useEffect(() => {
    const saveChatMessages = async () => {
      const storedChats = await AsyncStorage.getItem('chats');
      let updatedChats = storedChats ? JSON.parse(storedChats) : [];
      const chatIndex = updatedChats.findIndex((c) => c.id === chat.id);
      if (chatIndex !== -1) {
        updatedChats[chatIndex].messages = messages;
        await AsyncStorage.setItem('chats', JSON.stringify(updatedChats));
      }
    };
    saveChatMessages();
  }, [messages]);

  const handleSendMessage = (inputData: string) => {
    const userMessage = { id: Date.now().toString(), text: inputData, isUser: true };
    setMessages(prev => [userMessage, ...prev]);
    startStreamingResponse();
  };
  
  const startStreamingResponse = () => {
    setStreaming(true);
    let index = 0;
    let responseText = placeholderResponses[Math.floor(Math.random() * placeholderResponses.length)];
    let streamedText = '';

    const interval = setInterval(() => {
      if (index < responseText.length) {
        streamedText += responseText[index];
        index++;
        setMessages(prev => [
          { id: 'streaming', text: streamedText, isUser: false },
          ...prev.filter(msg => msg.id !== 'streaming'),
        ]);
      } else {
        clearInterval(interval);
        setMessages(prev => [
          { id: Date.now().toString(), text: responseText, isUser: false },
          ...prev.filter(msg => msg.id !== 'streaming'),
        ]);
        setStreaming(false);
      }
    }, 50);
  };



  return (
    <KeyboardAvoidingView className='flex-1 bg-[#1C1D22]' behavior="padding">
      <ChatTop title="Chat"/>
      <FlatList
        ref={chatRef}
        data={messages}
        inverted
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
         <Message item={item}/>
        )}
      />
      <UserInput  onSendMessage={handleSendMessage}/>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
