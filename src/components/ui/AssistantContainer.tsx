import {View, Text} from 'react-native'

interface AssistantContainerProps { IconComponent: React.ComponentType, text:string}

const AssistantContainer : React.FC<AssistantContainerProps> = ({ IconComponent, text } )=>{
  return(
    <View>
      <IconComponent/>
        <View className=' w-full flex-1 py-1 rounded-[48px] bg-[linear-gradient(172.45deg,_#448ACA_-32.98%,_#5C34B1_122.31%)] '>
          <Text className="text-xs text-white flex justify-center w-full">{text}</Text>
        </View>
    </View>
  
  )
}
export default AssistantContainer