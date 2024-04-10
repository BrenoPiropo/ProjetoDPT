import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Modal, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { AntDesign } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel'; // Importe o Carousel
import { styles } from './style';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [showGallery, setShowGallery] = useState<boolean>(true);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setCapturedPhoto(uri);
      setPhotos([...photos, uri]);
      setShowGallery(true);
    }
  };

  const deletePhoto = (index: number) => {
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
  };

  const submitForm = () => {
    // Implemente aqui a lógica para submeter o formulário
    Alert.alert('Formulário submetido!', 'Os dados foram enviados com sucesso.');
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => setZoomedImage(item)}>
      <View style={styles.photoContainer}>
        <Image source={{ uri: item }} style={styles.photo} />
        <TouchableOpacity style={styles.deleteButton} onPress={() => deletePhoto(index)}>
          <AntDesign name="closecircleo" style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const retakePhoto = () => {
    setCapturedPhoto(null);
    setShowGallery(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {showGallery ? (
          <>
            <Carousel
              data={photos}
              renderItem={renderItem}
              sliderWidth={300}
              itemWidth={250}
              loop={true}
              autoplay={true}
              autoplayInterval={3000}
            />
            <TouchableOpacity style={styles.newPhotoButton} onPress={retakePhoto}>
              <Text style={styles.newPhotoButtonText}>Tirar nova foto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
              <Text style={styles.submitButtonText}>Submeter Formulário</Text>
            </TouchableOpacity>
          </>
        ) : capturedPhoto ? (
          <Image source={{ uri: capturedPhoto }} style={styles.capturedPhoto} />
        ) : (
          <Camera
            style={styles.cameraView}
            type={Camera.Constants.Type}
            ref={(ref) => setCameraRef(ref)}
          >
            <View style={styles.cameraButtonContainer}>
              <TouchableOpacity style={styles.cameraButton} onPress={takePicture}>
                <Text style={styles.cameraButtonText}>Tirar Foto</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        )}
      </View>
    </View>
  );
};

export default CameraScreen;
