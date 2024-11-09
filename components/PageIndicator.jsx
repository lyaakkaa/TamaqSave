import React from "react";
import { View } from "react-native";

const PageIndicator = ({ currentIndex, total }) => {
  return (
    <View className="flex-row justify-center my-4">
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          className={`w-2.5 h-2.5 rounded-full mx-1 ${
            index === currentIndex ? "bg-[#4CAF50]" : "bg-[#D3EFD0]"
          }`}
        />
      ))}
    </View>
  );
};

export default PageIndicator;
