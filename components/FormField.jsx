import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import icons from "../constants/icons";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-black-200 text-base font-pregular">{title}</Text>
      <View className="w-full h-16 bg-[#F0F5FA] px-4 rounded-2xl flex flex-row items-center">
        <TextInput
          className="flex-1 text-black-200 font-pmedium text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#A0A5BA"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={keyboardType}
          {...props}
        />
        {(title === "Password" || title === "Re-Type Password") && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
