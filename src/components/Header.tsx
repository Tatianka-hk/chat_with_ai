import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {  IconStar , IconSetting} from '../../assets/icons';
const Header = ({ title }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: '#1C1D22' }}>
       <TouchableOpacity style={{ marginRight: 16 }}>
          <IconSetting width={24} height={24} fill="#FFFFFF" />
        </TouchableOpacity>
        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 500 }}>{title}</Text>
       <TouchableOpacity>
          <IconStar width={24} height={24} fill="#FFFFFF" />
        </TouchableOpacity> 
    </View>
  );
};

export default Header;