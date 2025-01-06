import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { IconSearch } from '../../assets/icons';  // Імпорт вашої іконки

const SearchInput = () => {
  const [searchText, setSearchText] = useState('');
  const inputRef = useRef<TextInput | null>(null);

  const handleTextChange = (text:string) =>{
    inputRef.current.blur(); 
    setSearchText(text)
  
  }


  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <IconSearch width={20} height={20} fill="#A0A0A0" />
      </View>
      <TextInput
        ref={inputRef}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search"
        placeholderTextColor="#A0A0A0"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#2D2D2D',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    marginHorizontal:16
  },
  iconContainer: {
    marginRight: 8, 
  },
  input: {
    flex: 1, 
    color: '#FFFFFF',
    fontSize: 16,
    outlineStyle: 'none'
  },
});

export default SearchInput;
