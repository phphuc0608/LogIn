import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const setPasswordVisibilit = ({ value, setValue, placeholder }) => {
  const [passwordVisible, setpasswordVisible] = useState(true);
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={passwordVisible}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.touchableButton}
        onPress={() => setpasswordVisible(!passwordVisible)}
      >
        <Image
          source={
            passwordVisible
              ? require("../../../asset/images/hide.png")
              : require("../../../asset/images/show.png")
          }
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "80%",

    borderColor: "white",
    borderWidth: 2,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },

  touchableButton: {
    position: "absolute",
    right: 3,
    height: 40,
    width: 35,
    padding: 2,
  },

  buttonImage: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },

  input: {
    width: "50%",
    padding: 10,
  },
});

export default setPasswordVisibilit;
