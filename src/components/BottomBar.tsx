import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { IconExplore , IconTask, IconHistory, IconMicro} from '../../assets/icons';

const BottomBar = () => {

  return (
    <View className='bg-gray-900 py-3 px-4'>
      <View className='flex-row justify-between items-center mt-3'>
        <TouchableOpacity className='flex items-center'>
          <IconExplore />
          <div className='text-white text-xs mt-1'> Explore</div>
        </TouchableOpacity>
        <TouchableOpacity className='flex items-center'>
          <IconTask />
          <div className='text-white text-xs mt-1'>Tasks </div>
        </TouchableOpacity>
        <TouchableOpacity className='flex items-center'>
          <IconHistory />
          <div className='text-white text-xs mt-1'> History</div>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;
