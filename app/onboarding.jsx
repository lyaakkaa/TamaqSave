import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";
import PageIndicator from "../components/PageIndicator";
import { router } from "expo-router";

const onboardingData = [
  {
    title: "Save Food, Support Your Community",
    description: "Help reduce food waste by saving fresh meals from local restaurants, bakeries, and stores.",
    image: images.rectangle,
  },
  {
    title: "Find Great Deals Nearby",
    description: "Discover affordable meals close to you. Choose from a variety of offers and pick them up at your convenience.",
    image: images.rectangle,
  },
  {
    title: "Join a Movement to Reduce Food Waste",
    description: "Together, we can reduce food waste and protect the environment. Start saving today with Tamaq Save.",
    image: images.rectangle,
  },
];

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("/sign-in"); // Перенаправление на главный экран после последнего слайда
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center items-center px-4">
          <Image source={onboardingData[currentIndex].image} resizeMethod="contain" />
          <Text className="text-[24px] text-black-100 font-pbold text-center mt-4">
            {onboardingData[currentIndex].title}
          </Text>
          <Text className="text-[16px] font-pregular text-black-300 text-center mt-2">
            {onboardingData[currentIndex].description}
          </Text>

         
          
        </View>
        <PageIndicator currentIndex={currentIndex} total={onboardingData.length} />
        <View className="px-4 mb-10">
          <CustomButton
            title="NEXT"
            handlePress={handleNext}
            containerStyles="w-full mt-4 bg-[#4CAF50] rounded-lg p-4"
            textStyles="text-white text-center text-lg font-semibold"
          />
          <Text
            className="text-center text-gray-500 mt-2"
            onPress={() => router.push("/sign-in")} // Перенаправление при нажатии "Skip"
          >
            Skip
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Onboarding;
