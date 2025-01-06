import {View, Text} from 'react-native'
import {IconHearts} from '../../../assets/icons'

interface Advicerops {
  text: string;
}

const Advice: React.FC<Advicerops> = ({text})=>{
  return(
  <View className="flex rounded-[12px] bg-[#333338] p-3 gap-2 flex-row ml-2 mb-2 max-w-[346px]">
    <IconHearts/>
    <Text className="text-xs text-[#CBCBD7] "> {text}</Text>
  </View>)
}

export default Advice;