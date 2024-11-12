import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import BackButton from "../../components/BackButton";
import Animated, { FadeInRight } from "react-native-reanimated";

const ForgotPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const submit = async () => {
    if (!email) {
      Alert.alert("Error", "Please fill in all the fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }
    setIsSubmitting(true);
 
    router.push({
      pathname: "/verification",
      params: { email },
    });
    setIsSubmitting(false);
  };

  return (
    <SafeAreaView className="bg-mintyGray h-full">
      <ScrollView>
        <BackButton />
        <View className="w-full flex items-center px-4 mt-24">
          <Animated.Text
            className="text-[30px] text-black-200 font-pbold"
            entering={FadeInRight.delay(300).duration(500)}
          >
            Forgot Password
          </Animated.Text>
          <Animated.Text
            className="text-[16px] text-black-300 font-pregular mb-8"
            entering={FadeInRight.delay(500).duration(500)}
          >
            Please enter your email
          </Animated.Text>
        </View>

        <View
          className="bg-white w-full h-full rounded-t-3xl p-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <FormField
            title="Email"
            value={email}
            placeholder="example@gmail.com"
            handleChangeText={(e) => {
              setEmail(e);
            }}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <CustomButton
            title="SEND CODE"
            handlePress={submit}
            isLoading={isSubmitting}
            containerStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
