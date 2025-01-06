import { ADVICES, ADVICE_Response } from "../static"
import { FlatList, View, TouchableOpacity, Text } from "react-native"
import {IconNext} from '../../assets/icons'
import {Advice} from './ui'

const AdvicesList = ({navigation})=>{
  const chunkedAdvices = (data, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      chunks.push(data.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const chunkedData = chunkedAdvices(ADVICES, 5);
  const handleCreateChat = () => {
    const newChat = {
      id: Date.now().toString(),
      messages: [{ sender: 'AI', text: ADVICE_Response }],
    };
    navigation.navigate('ChatScreen', { chat: newChat });
  };
  return(
  <View>
    <div className="mt-[24px] mb-2" style={{display: 'flex', justifyContent:'space-between', alignItems:'start', textAlign: 'start', height:24}}>
      <Text style={{ color: '#FFFFFF', fontSize: 18, marginBottom: 8 }}>Advices</Text>
      <div  style={{fontSize: 14, lineHeight: 16, color:'white', display:'flex',}} >
        <Text style={{fontSize: 14, lineHeight: 16, color:'white'}}>See all </Text>
        <IconNext/>
      </div>
    </div>
    <FlatList
        horizontal={true} // Горизонтальна прокрутка
        data={chunkedData} // Дані, які розбиті на колонки
        renderItem={({ item: columnData }) => (
          <FlatList
            data={columnData}
            renderItem={({ item: advice }) => (
              <TouchableOpacity onPress={() => handleCreateChat()} >
                <Advice text={advice.text} />
              </TouchableOpacity>
            )}
            keyExtractor={advice => advice.id.toString()}
            showsVerticalScrollIndicator={false} // Вимикаємо вертикальний скролл індикатор
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false} // Вимикаємо горизонтальний скролл індикатор
      />
  </View>)

}
export default AdvicesList