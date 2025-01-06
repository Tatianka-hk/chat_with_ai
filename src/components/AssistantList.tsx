import {AssistantContainer} from './ui'
import { View, TouchableOpacity , FlatList, Text} from 'react-native';
import { AI_ASSISTANTS } from '../static';
import {IconNext} from '../../assets/icons'
const AssistantList = ({navigation}) =>{
  const handleCreateChat = (type, content) => {
    const newChat = {
      id: Date.now().toString(),
      type,
      messages: [{ sender: 'AI', text: content }],
    };
    navigation.navigate('ChatScreen', { chat: newChat });
  };

  return(  <View>
    <div className="mt-[24px] mb-2" style={{display: 'flex', justifyContent:'space-between', alignItems:'start', textAlign: 'start', height:24}}><Text style={{ color: '#FFFFFF', fontSize: 18, marginBottom: 8 }}>AI assistants</Text>
    <div  style={{fontSize: 14, lineHeight: 16, color:'white', display:'flex',}} > <Text
    style={{fontSize: 14, lineHeight: 16, color:'white'}}>See all </Text><IconNext/></div>
    </div>
    
    <FlatList
      data={AI_ASSISTANTS}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ backgroundColor: '#2D2D2D', padding: 16, borderRadius: 8, marginRight: 8 }}
          onPress={() => handleCreateChat('AI Assistants', `Hello! I'm ${item.name}. How can I assist you?`)}
        >
          <AssistantContainer IconComponent={item.icon} text={item.name}/>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
    </View>)
}
export default AssistantList;
