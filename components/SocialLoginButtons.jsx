import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import images from "../constants/images";
import Animated, { FadeInDown } from "react-native-reanimated";

const SocialLoginButtons = (props) => {
  const { emailHref } = props;
  return (
    <View className="w-full">
      <Animated.View entering={FadeInDown.delay(300).duration(500)}>
        <Link href={emailHref} asChild>
          <TouchableOpacity className="flex-row items-center justify-center border rounded-full p-3 mb-4">
            <Ionicons name="mail-outline" size={20} color="#333" />
            <Text className="text-base font-semibold ml-2">Continue with Email</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(700).duration(500)}>
        <TouchableOpacity className="flex-row items-center justify-center border rounded-full p-3 mb-4">
          <Image source={images.google} className="w-5 h-5" resizeMethod="cover" />
          <Text className="text-base font-semibold ml-2">Continue with Google</Text>
        </TouchableOpacity>
      </Animated.View>
      
      <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
        <TouchableOpacity className="flex-row items-center justify-center border rounded-full p-3 mb-4">
          <Ionicons name="logo-apple" size={20} color="#333" />
          <Text className="text-base font-semibold ml-2">Continue with Apple</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SocialLoginButtons;
