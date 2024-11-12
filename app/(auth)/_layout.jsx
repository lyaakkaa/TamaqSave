import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import icons from "../../constants/icons";
import { router } from "expo-router";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            // headerTitle: "Sign In",
            // headerTitleAlign: "center",
    
            // headerLeft: () => (
            //   <TouchableOpacity onPress={() => router.back()}>
            //     <Image
            //       source={icons.leftArrow}
            //       resizeMethod="contain"
            //       className="w-[15px] h-[15px]"
            //     />
            //   </TouchableOpacity>
            // ),
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="forgot-password"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="verification"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default AuthLayout;
