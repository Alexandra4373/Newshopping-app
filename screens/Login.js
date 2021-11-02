import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
 

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          transform: [{ rotate: "45deg" }],
          borderRadius: 20,
          marginBottom: 60,
          width: 200,
          height: 200,
        }}
        source={
          require("../assets/bike.png")
        }
      />
      <Text style={{ fontSize: 30, color: "grey" }}>Welcome to</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Alexie's Bike Shop</Text>
     
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "grey",
        }}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ fontSize: 17,paddingLeft: 5, color: "white" }}>Login with Apple</Text>
</TouchableOpacity>

<TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 20,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "grey",
        }}
      >
        <AntDesign name="google" size={24} color="orange" />
        <Text style={{fontSize: 17, paddingLeft: 5, color: "black"}}>Login with Gmail</Text>

      </TouchableOpacity>

      <TouchableOpacity>

      <Text Style={{marginTop:10, fontWeight:500, color:"grey"}}>Not a member?
      <Text Style={{color:"orange" , fontWeight: "bold"}}>SignUp</Text>
      </Text>
      </TouchableOpacity>

    </View>
  );
}