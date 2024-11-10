import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import icons from "../../constants/icons";
import BackButton from "../../components/BackButton";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
  });
  const [reTypePassword, setReTypePassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    let error = "";
    if (!value) {
      error = "This field is required";
    } else if (fieldName === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Please enter a valid email address";
      }
    } else if (fieldName === "phone" && value.length < 10) {
      error = "Please enter a valid phone number";
    } else if (fieldName === "reTypePassword" && value !== form.password) {
      error = "Passwords do not match";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
  };

  const handleInputChange = (fieldName, value) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
    validateField(fieldName, value);
  };

  const submit = async () => {
    if (Object.values(form).some((field) => !field) || !reTypePassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    // todo send form values to server
    console.log(form);
    setIsSubmitting(false);
  };

  return (
    <SafeAreaView className="bg-mintyGray h-full">
      <ScrollView>
        <BackButton/>

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
            handleChangeText={(e) => handleInputChange("name", e)}
            otherStyles="mt-7"
          />
          {errors.name && (
            <Text className="text-red-500 font-pmedium">{errors.name}</Text>
          )}

          <FormField
            title="Email"
            value={form.email}
            placeholder="example@gmail.com"
            handleChangeText={(e) => handleInputChange("email", e)}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          {errors.email && (
            <Text className="text-red-500 font-pmedium">{errors.email}</Text>
          )}

          {/* <FormField
            title="Phone Number"
            value={form.phone}
            placeholder="+1234567890"
            handleChangeText={(e) => handleInputChange("phone", e)}
            otherStyles="mt-7"
            keyboardType="numeric"
          /> */}
          <FormField
            title="Phone Number"
            value={form.phone}
            placeholder="+1234567890"
            otherStyles="mt-7"
            isPhoneInput
            handleChangeText={(e) => handleInputChange("phone", e)}
            keyboardType="numeric"
          />
          {errors.phone && (
            <Text className="text-red-500 font-pmedium">{errors.phone}</Text>
          )}

          <FormField
            title="Password"
            value={form.password}
            placeholder="**********"
            handleChangeText={(e) => handleInputChange("password", e)}
            otherStyles="mt-7"
          />
          {errors.password && (
            <Text className="text-red-500 font-pmedium">{errors.password}</Text>
          )}

          <FormField
            title="Re-Type Password"
            value={reTypePassword}
            placeholder="**********"
            handleChangeText={(e) => {
              setReTypePassword(e);
              validateField("reTypePassword", e);
            }}
            otherStyles="mt-7"
          />
          {errors.reTypePassword && (
            <Text className="text-red-500 font-pmedium">
              {errors.reTypePassword}
            </Text>
          )}

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
