import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

const Hello = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center items-center px-4">
          <Image
            source={images.logo}
            resizeMethod="contain"
            className="w-[250px] h-[250px]"
          />
          <Text className="text-[36px] text-black-100 font-pbold text-center">
            TAMAQSAVE
          </Text>
          <Text className="text-sm font-psemibold text-black-200 text-center">
            Save the food. Save the planet
          </Text>
        </View>

        <View className="px-4 mb-10">
          <CustomButton
            title="START"
            handlePress={() => {
              router.push("/sign-in");
            }}
            containerStyles="w-full mt-16"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hello;
