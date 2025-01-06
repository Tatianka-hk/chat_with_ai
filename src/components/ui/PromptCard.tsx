import React from 'react';
import { View, Text } from 'react-native';

interface PromptCardProps {
  title: string;
  description: string;
  IconComponent: React.ComponentType;
  colorType : number
}



const PromptCard: React.FC<PromptCardProps> = ({ title, description, IconComponent , colorType}) => {
  return (
    <View className={`flex-column items-start  p-3 rounded-xl m-2  h-[116px] min-h-[116px] min-w-[169px] max-w-[169px]  !rounded-[12px] border border-[transparent] overflow-hidden ${colorType === 0 ? 'bg-[linear-gradient(128.06deg,_rgba(250,_134,_97,_0.07)_5.21%,_rgba(247,_217,_109,_0.07)_91.7%)]  [border-image:linear-gradient(to_right,_#FA8661,_#F7D96D)_1]' : colorType === 1 ? 'bg-[linear-gradient(128.06deg,_rgba(128,_108,_246,_0.07)_5.21%,_rgba(112,_216,_249,_0.07)_91.7%)] [border-image:linear-gradient(to_right,_#806CF6,_#70D8F9)_1]' : 'bg-[linear-gradient(128.06deg,_rgba(133,_245,_177,_0.07)_5.21%,_rgba(140,_231,_251,_0.07)_91.7%)] [border-image:linear-gradient(to_right,_#85F5B1,_#8CE7FB)_1]' }`} >
      <View className="mb-2">
        <IconComponent />
      </View>
      <View>
        <Text className="text-white font-semibold text-[14px] leading-[18px]">{title}</Text>
        <Text className="text-[#CBCBD7] text-xs">{description}</Text>
      </View>
    </View>
  );
};

export default PromptCard;
