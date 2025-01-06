import {PromptCard} from './ui'
import { View, TouchableOpacity , FlatList, Text} from 'react-native';
import { PROMPTS } from '../static';
import {IconNext} from '../../assets/icons'
const PromptList = ({navigation}) =>{
  const handleCreateChat = (type, content) => {
    const newChat = {
      id: Date.now().toString(),
      type,
      messages: [{ sender: 'AI', text: content }],
    };
    navigation.navigate('ChatScreen', { chat: newChat });
  };

  return(
  <View>
    <div className="mt-[24px] mb-2" style={{display: 'flex', justifyContent:'space-between', alignItems:'start', textAlign: 'start', height:24}}>
      <Text style={{ color: '#FFFFFF', fontSize: 18, marginBottom: 8 }}>Popular prompts</Text>
      <div  style={{fontSize: 14, lineHeight: 16, color:'white', display:'flex'}}>
         <Text style={{fontSize: 14, lineHeight: 16, color:'white'}}>See all </Text><IconNext/>
      </div>
    </div>
    <FlatList
      data={PROMPTS}
      horizontal
      // showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => handleCreateChat('AI Assistants', `Hello! I'm ${item.title}. How can I assist you?`)}>
        <PromptCard title={item.title} description={item.description} IconComponent={item.icon} colorType={index%3}/>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  </View>)
}
export default PromptList;
