import React, { Component, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  Alert,                 
  Linking,
  Share,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function ShareScreen({ navigation }) {
  const GOOGLE_PACKAGE_NAME = "com.hair.hairstylesstepbystep";
  const APPLE_STORE_ID = "id1547424148";


  const shareApp = () => {
    let text =
      "Want more Knowlage about top trees and flowers?\n\nLet's make your stories get more eyeballs..\nDownload TopList Nature 2021 App ";
    if (Platform.OS === "android") text = text.concat("https://elit-blogs.blogspot.com/2021/01/toplist-nature-2021.html");
    else text = text.concat("http://itunes.apple.com/app/id1547424148");

    Share.share(
      {
        subject: "Download TopList Nature 2021 App Now",
        title: "Download TopList Nature 2021 App Now",
        message: text,
        url: "app://TopList Nature 2021",
      },
      {
        // Android only:
        dialogTitle: "Share TopList Nature 2021 App",
        // iOS only:
        excludedActivityTypes: [],
      }
    );
  };

  const openPrv = () => {
    Linking.openURL(
      `https://elit-blogs.blogspot.com/2021/01/toplist-nature-2021.html`
    ).catch((err) => alert("Please check for the App Store"));
  };


  const openStore = () => {
    Alert.alert(
      "Rate us",
      "Would you like to share your review with us? This will help and motivate us a lot.",
      [
        {
          text: "Sure",
          onPress: () => {
            //This is the main trick
            if (Platform.OS != "ios") {
              Linking.openURL(
                `market://details?id=${GOOGLE_PACKAGE_NAME}`
              ).catch((err) => alert("Please check for Google Play Store"));
            } else {
              Linking.openURL(
                `itms://itunes.apple.com/in/app/apple-store/${APPLE_STORE_ID}`
              ).catch((err) => alert("Please check for the App Store"));
            }
          },
        },
        {
          text: "No Thanks!",
          onPress: () => console.log("No Thanks Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ImageBackground
      blurRadius={5}
      style={{
        flex: 1,
      }}
      source={{
        uri: "https://mfiles.alphacoders.com/307/307418.jpg",
      }}>

      <View style={styles.container}>
        <TouchableOpacity
          // style={globalStyles.mainButtonStyle}
          onPress={() => navigation.navigate("QuotesCatListScreen")}>
          <ImageBackground
            blurRadius={10}
            imageStyle={{
              borderRadius: 200,
            }}
            // style={globalStyles.mainButtonStyle}
            source={{
              uri: "https://fingerpro.net/wp-content/uploads/fingerprinting1.jpg",
            }}>
            {/* <Text style={globalStyles.buttonTextStyle}>Start</Text> */}
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={openPrv} >
          <ImageBackground
            blurRadius={10}
            imageStyle={{
              borderRadius: 200,
            }}
            // style={globalStyles.mainButtonStyle}
            source={{
              uri: "https://fingerpro.net/wp-content/uploads/fingerprinting1.jpg",
            }}>
            {/* <Text style={globalStyles.buttonTextStyle}>Privacy Policy</Text> */}
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={openStore}
          // style={globalStyles.mainButtonStyle}
        >
          <ImageBackground
            blurRadius={10}
            imageStyle={{
              borderRadius: 200,
            }}
            // style={globalStyles.mainButtonStyle}
            source={{
              uri: "https://fingerpro.net/wp-content/uploads/fingerprinting1.jpg",
            }}>
            {/* <Text style={globalStyles.buttonTextStyle}>Rate Us</Text> */}
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={shareApp} 
        // style={globalStyles.mainButtonStyle}
        >
          <ImageBackground
            blurRadius={10}
            imageStyle={{
              borderRadius: 200,
            }}
            // style={globalStyles.mainButtonStyle}
            source={{
              uri: "https://fingerpro.net/wp-content/uploads/fingerprinting1.jpg",
            }}>
            {/* <Text style={globalStyles.buttonTextStyle}>Share Now</Text> */}
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: "center"
  },
});
export default ShareScreen;
