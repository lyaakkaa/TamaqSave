import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import icons from "../constants/icons";
import PhoneInput from "react-native-phone-number-input";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  isPhoneInput = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-black-200 text-base font-pregular">{title}</Text>
      <View className="w-full h-16 bg-[#F0F5FA] px-4 rounded-2xl flex flex-row items-center">
        {isPhoneInput ? (
          <PhoneInput
            value={value}
            defaultCode="KZ"
            layout="first"
            onChangeFormattedText={handleChangeText} 
            placeholder=""
            textContainerStyle={{
              backgroundColor: "#F0F5FA",
              paddingVertical: 0,
              paddingHorizontal: 0,
              marginLeft: -5,
            }}
            textInputStyle={{
              color: "#232533",
              fontSize: 16,
              lineHeight: 24,
              fontFamily: "Poppins",
              fontWeight: "medium"
            }}
            codeTextStyle={{
              color: "#232533",
              fontSize: 16,
              fontWeight: "normal",
            }}
            flagButtonStyle={{
              backgroundColor: "#F0F5FA",
              padding: 0,
              marginLeft: -5,
              marginRight: 5,
            }}
          />
        ) : (
          <TextInput
            className="flex-1 text-black-200 font-pmedium text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#A0A5BA"
            onChangeText={handleChangeText}
            secureTextEntry={
              (title === "Password" || title === "Re-Type Password") &&
              !showPassword
            }
            keyboardType={keyboardType}
            {...props}
          />
        )}

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
