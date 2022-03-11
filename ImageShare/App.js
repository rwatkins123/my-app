import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import styles from './Styles';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri })
    // console.log(pickerResult);
  };

  let openShareDialogAsync = async () => {
    if (Platform.OS === 'web') {
      alert('Oops, sharing is not available on your platform');
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri)
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri}}
          style={styles.thumbnail}
          />
          <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
            <Text style={styles.buttonText}>Share this photo</Text>
          </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://i.gyazo.com/a7438d48207d95dcaf1213b20c97a42c.jpg"}} style={styles.logo} />
      <Text style={styles.instructions}>
        Press the button to upload your plant photo!</Text>

        <TouchableOpacity
          onPress={openImagePickerAsync}
          style={styles.button}>
          <Text style={styles.buttonText}>Upload a photo</Text>
        </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
