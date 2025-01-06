import React, { useState } from 'react';
import { View,ScrollView } from 'react-native';
import { Header, SearchInput, UserInput, BottomBar, AssistantList, AdvicesList, PromptList} from '../components';
import { IconPremium , IconNext, IconLawyer, IconEnglishTeacher, IconPsychologist} from '../../assets/icons';
import 'nativewind';
export default function ExploreScreen({ navigation }) {
  const [inputText, setInputText] = useState('');
  const handleSendMessage = (inputData:string) => {
    navigation.navigate('ChatScreen', {
      initialUserMessage: inputData,
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1C1D22',  }}>
      <Header title="Explore"/>
      <SearchInput/>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className='p-4' >
        <View style={{ height: 86, justifyContent: 'center', alignItems: 'center' }}>
          <IconPremium />
        </View>
        <AssistantList navigation={navigation} />
        <PromptList navigation={navigation} />
        <AdvicesList navigation={navigation} />  
      </ScrollView>
      <UserInput   onSendMessage={handleSendMessage}/>
      <BottomBar/>
    </View>
  );
}