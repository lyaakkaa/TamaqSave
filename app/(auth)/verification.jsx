import {
  View,
  Text,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import BackButton from "../../components/BackButton";

const CELL_COUNT = 4;

const Verification = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);
    // Logic for code submission
    console.log(value);
    setIsSubmitting(false);
  };

  return (
    <SafeAreaView className="bg-mintyGray h-full">
      <ScrollView>
        <BackButton/>
        <View className="w-full flex items-center px-4 mt-24">
          <Text className="text-[30px] text-black-200 font-pbold">
            Verification
          </Text>
          <Text className="text-[16px] text-black-300 font-pregular mb-8">
            We have sent a code to your email
          </Text>
        </View>

        <View
          className="bg-white w-full h-full rounded-t-3xl p-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <View className="flex flex-row justify-between">
            <Text className="text-[13px] text-black-300 font-pregular">
              CODE
            </Text>
            <Text className="text-[13px] text-black-300 font-pregular">
              Resend in.50sec
            </Text>
          </View>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                className={`w-20 h-20 bg-[#F0F5FA] rounded-xl justify-center items-center ${
                  isFocused ? "border border-orange-400" : ""
                }`}
              >
                <Text
                  className="text-2xl text-gray-700 text-center font-pmedium"
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />

          <CustomButton
            title="VERIFY"
            handlePress={submit}
            isLoading={isSubmitting}
            containerStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: {
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginTop: 20,
  },
});

export default Verification;
