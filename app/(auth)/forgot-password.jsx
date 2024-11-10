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
    // Submit logic here
    router.push("/verification")
    setIsSubmitting(false);
   
  };

  return (
    <SafeAreaView className="bg-mintyGray h-full">
      <ScrollView>
        <BackButton/>
        <View className="w-full flex items-center px-4 mt-36">
          <Text className="text-[30px] text-black-200 font-pbold">
            Forgot Password
          </Text>
          <Text className="text-[16px] text-black-300 font-pregular mb-8">
            Please enter your email
          </Text>
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
