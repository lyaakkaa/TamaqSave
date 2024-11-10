import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import BackButton from "../../components/BackButton";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (!form.password || !form.email) {
      Alert.alert("Error", "Please fill in all the fields");
      return;
    }
    setIsSubmitting(true);
    // Submit logic here
  };

  return (
    <SafeAreaView className="bg-mintyGray h-full">
      <ScrollView>
        <BackButton/>
        <View className="w-full flex items-center px-4 mt-36">
          <Text className="text-[30px] text-black-200 font-pbold">Log In</Text>
          <Text className="text-[16px] text-black-300 font-pregular mb-8">
            Please sign in to your existing account
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
            value={form.email}
            placeholder="example@gmail.com"
            handleChangeText={(e) => {
              setForm({ ...form, email: e });
            }}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            placeholder="**********"
            handleChangeText={(e) => {
              setForm({ ...form, password: e });
            }}
            otherStyles="mt-7"
          />

          <View className="items-center mt-4 mb-6">
            <TouchableOpacity onPress={() => router.push("/forgot-password")}>
              <Text className="text-secondary font-psemibold">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <CustomButton
            title="LOG IN"
            handlePress={submit}
            isLoading={isSubmitting}
          />

          <View className="flex flex-row items-center justify-center mt-4">
            <Text className="text-center text-black-200 font-pregular">
              Don’t have an account?{" "}
            </Text>
            <Text
              onPress={() => router.push("/sign-up")}
              className="text-secondary font-pbold"
            >
              SIGN UP
            </Text>
          </View>

          <Text
            className="text-center text-gray-500 font-pbold"
            onPress={() => router.push("/sign-in")}
          >
            Skip
          </Text>

          <Text className="text-center text-gray-500 mb-4 mt-11 font-pregular">Or Login With</Text>

          <View className="flex flex-row justify-center space-x-4">
            {/* <TouchableOpacity>
                <Image source={images.facebookIcon} className="h-10 w-10" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={images.twitterIcon} className="h-10 w-10" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={images.appleIcon} className="h-10 w-10" />
              </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
