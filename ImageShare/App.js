import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, BackHandler, TextInput, Button, FlatList } from 'react-native';
import styles from './Styles';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import uploadToAnonymousFilesAsync from 'anonymous-files';


export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)

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

    if (Platform.OS === 'web') {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri })
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    }
  };


  // let openShareDialogAsync = async () => {
  //   if (Platform.OS === 'web') {
  //     alert(`You can upload your image at: ${selectedImage.remoteUri}`);
  //     return;
  //   }
  //   Sharing.shareAsync(selectedImage.remoteUri || selectedImage.localUri);
  // };

  const [ text, setText ] = useState(null);
  let count = true
  const onPressText = () => {
    if (count) {
    setText("This is not a plant. This is Bart, the creator of react hooks and terminal wordle aka Turdle. Enter your zip code below and let's see if we can find your agricultural growing zone!")
    count = !count
    } else {
    setText("testing 123")
    }
  }


  const [zipCode, setZipCode] = useState(null)
  const [data, setData] = useState([])

  const fetchZone = async (zip) => {
    try {
      let res = await fetch(`https://phzmapi.org/${zip}.json`)
      let zipRes = await res.json()
      setData(zipRes)
      console.log(zipRes)
    } catch (error) {
      console.error(error)
    }
  }

  if (zipCode && zipCode.length == 5) {
    let result = fetchZone(zipCode)
    return (
      <View style={{flex: 1, padding: 24}}>
            <Text style={styles.titleText}>zone 6a</Text>
      </View>
    )
  }

    if (text !== null) {
      return (
        <View style={styles.container}>
          <Text style={styles.titleText}>{text}</Text>
          <Image
            source={{ uri: selectedImage.localUri}}
            style={styles.thumbnail}
            />
          <TextInput
          style={styles.input}
          placeholder="Enter your zip code!"
          onChangeText={setZipCode}
          defaultValue={zipCode}
          maxLength={5}
          minLength={5}
          />
        </View>
    )
  }



  if (selectedImage !== null) {

    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri}}
          style={styles.thumbnail}
          />
          <TouchableOpacity onPress={onPressText} style={styles.button}>


            <Text style={styles.buttonText}>Identify Plant</Text>

          </TouchableOpacity>



      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://i.gyazo.com/a7438d48207d95dcaf1213b20c97a42c.jpg"}} style={styles.logo} />
      <Text style={styles.instructions}>
        Press to upload your plant photo!</Text>

        <TouchableOpacity
          onPress={openImagePickerAsync}
          style={styles.button}>
          <Text style={styles.buttonText}>Upload a photo</Text>
        </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
