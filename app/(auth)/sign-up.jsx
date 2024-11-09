import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Alert,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";


const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
  });
  const [reTypePassword, setReTypePassword] = useState("");

  const submit = async () => {
    if (!form.name || !form.email || !form.password || !form.phone || !reTypePassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }
    if (form.phone.length < 10) {
      Alert.alert("Error", "Please enter a valid phone number");
      return;
    }

    if (form.password !== reTypePassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    setIsSubmitting(true);
    // Submit logic here
    setIsSubmitting(false);
  };

  return (
    <SafeAreaView className="bg-mintyGray h-full">
      <ScrollView>
        <View className="w-full flex items-center px-4 mt-36">
          <Text className="text-[30px] text-black-200 font-pbold">Sign Up</Text>
          <Text className="text-[16px] text-black-300 font-pregular mb-8">
            Please sign up to get started
          </Text>
        </View>

        <View
          className="bg-white w-full h-full rounded-t-3xl p-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <FormField
            title="Name"
            value={form.name}
            placeholder="John Doe"
            handleChangeText={(e) => setForm({ ...form, name: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Email"
            value={form.email}
            placeholder="example@gmail.com"
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Phone Number"
            value={form.phone}
            placeholder="+1234567890"
            handleChangeText={(e) => setForm({ ...form, phone: e })}
            otherStyles="mt-7"
            keyboardType='numeric'
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="**********"
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
      
          />
          <FormField
            title="Re-Type Password"
            value={reTypePassword}
            placeholder="**********"
            handleChangeText={(e) => setReTypePassword(e)}
            otherStyles="mt-7"
     
          />


          <CustomButton
            title="Sign Up"
            handlePress={submit}
            isLoading={isSubmitting}
            containerStyles="mt-7"
          />

          <View className="flex flex-row items-center justify-center mt-4">
            <Text className="text-center text-black-200 font-pregular">
              Already have an account?{" "}
            </Text>
            <Text
              onPress={() => router.push("/sign-in")}
              className="text-secondary font-pbold"
            >
              LOG IN
            </Text>
          </View>



        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
