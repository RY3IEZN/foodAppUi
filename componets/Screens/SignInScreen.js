/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

function SignInScreen(props) {
  return (
    <View style={styles.container}>
      <View>
        <Ionicons />
        <Text>Sign In</Text>
      </View>

      <Text>Welcome</Text>
      <Text>Enter your username and password, and enjoy ordering food</Text>

      <View>
        <View>
          <Feather />
          <TextInput />
        </View>
      </View>

      <View>
        <View>
          <Feather />
          <TextInput />
          <Feather />
        </View>
      </View>

      <Text></Text>
      <View>
        <View>
          <Text>Remeber me</Text>
        </View>
        <Text>Forgot Password?</Text>
      </View>
      <TouchableOpacity>
        <Text>Sign in</Text>
      </TouchableOpacity>
      <View>
        <Text>Dont have an account?</Text>
        <Text>sign up</Text>
      </View>
      <Text>Or</Text>
      <TouchableOpacity>
        <View>
          <View>
            <Image />
          </View>
          <Text>Connect with Google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <View>
            <Image />
          </View>
          <Text>Connect with Facebook</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignInScreen;
