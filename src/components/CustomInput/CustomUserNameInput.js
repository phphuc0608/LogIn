import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomInput = ({ value, setValue, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "80%",

    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    width: "50%",
    padding: 10,
  },
});

export default CustomInput;
