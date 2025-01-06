
import { View, Text } from "react-native";
interface MessageButtonProps{ IconComponent: React.ComponentType, isUser: boolean, text: string }
const MessageButton: React.FC<MessageButtonProps> = ({ IconComponent, isUser, text } ) => {
  return (
    <View className={`px-3 py-[6px] flex flex-row gap-[6px] rounded-lg font-normal ${isUser ? 'bg-[#7370c6] self-end' : 'bg-[#58585c] self-start'}`}>
      <IconComponent />
      <Text className="text-xs text-white">{text}</Text>
    </View>
  );
};

export default MessageButton;