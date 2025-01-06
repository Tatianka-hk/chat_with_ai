import React, { useState , useRef} from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {IconMicro, IconSend, IconClear,IconScan } from '../../assets/icons'
const UserInput = ({onSendMessage}) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<TextInput | null>(null); 
  const handleSendMessage = () => {
    inputRef.current.blur();
    if (input.trim() === '') return;
    onSendMessage(input.trim())
    setInput('');
  };

  const handleClearInput = () => setInput('');
  
  const styles = StyleSheet.create({
    input: {
      textAlignVertical: "center",
      outlineStyle: 'none'
    },
  });
  return (
    <View className='flex-row relative items-center bg-[#1C1D22] px-4 py-4 rounded-t-[16px] border border-[#333338] mx-[2px]'>
      <TouchableOpacity className="absolute left-[32px]">    <IconScan /></TouchableOpacity>
   
    <TextInput
      ref={inputRef}
      placeholder="Enter text here..."
      placeholderTextColor="#93939F"
      value={input}
      onChangeText={setInput}
       multiline
      style={styles.input}
      className="flex-1 text-white bg-[#333338] pr-4 py-[10px] rounded-lg pl-[52px] text-[16px] rounded-xl outline-['none']"
    />
    {input.length > 0 ? (
      <>
        <TouchableOpacity onPress={handleClearInput} className='ml-[-40px]'>
          <IconClear />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSendMessage} className='ml-6'>
          <IconSend />
        </TouchableOpacity>
      </>
    ) : (
      <TouchableOpacity className='ml-2'>
        <IconMicro />
      </TouchableOpacity>
    )}
  </View>
  );


  
};

export default UserInput;