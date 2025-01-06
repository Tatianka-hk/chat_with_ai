import { View, Text, TextInput, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import  MessageButton from './ui/MessageButton.tsx'
import {IconCopy, IconShare} from '../../assets/icons'
import Clipboard from '@react-native-clipboard/clipboard'; 
const Message = ({item}) => {
  const copyText = () =>{
    Clipboard.setString(item.text);
  }

  return( 
  <View  className={`my-2 mr-[9px] ml-[23px] py-3 px-4 rounded-lg rounded-t-[16px]   ${item.isUser ? 'bg-[linear-gradient(172.45deg,_#448ACA_-32.98%,_#5C34B1_122.31%)] self-end rounded-l-[16px] rounded-br-[4px]' : 'bg-[#333338] self-start rounded-r-[16px] rounded-bl-[4px]'}`}>
    <Text className='text-white mb-2'>{item.text}</Text>
    <div className='flex gap-2'>
      <TouchableOpacity onPress={copyText}><MessageButton IconComponent={IconCopy} isUser={item.isUser} text='Copy'/></TouchableOpacity>  
      <MessageButton IconComponent={IconShare} isUser={item.isUser} text='Share'/>
    </div>
  </View>)
}

export default Message;

