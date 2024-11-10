import React from "react";
import { TouchableOpacity, Image } from "react-native";
import icons from "../constants/icons";
import { router } from "expo-router";

const BackButton = () => {
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      className="absolute top-12 left-4 z-10 p-2 bg-white rounded-full shadow"
    >
      <Image source={icons.leftArrow} className="w-4 h-4" />
    </TouchableOpacity>
  );
};

export default BackButton;
