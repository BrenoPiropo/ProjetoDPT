import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
  },
  
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cameraView: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  cameraButtonContainer: {
    width: '100%',
    marginBottom: 20,
  },

  cameraButton: {
    backgroundColor: 'blue',
    borderRadius: 50,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },

  cameraButtonText: {
    fontSize: 20,
    color: 'black',
  },

  capturedPhoto: {
    flex: 1,
    width: '100%',
  },

  photosContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  photoContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
  },

  photo: {
    width: 250,
    height: 250,
  },

  deleteButton: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 5,
  },

  deleteIcon: {
    color: '#fff',
    fontSize: 18,
  },

  newPhotoButton: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },

  newPhotoButtonText: {
    color: '#fff',
    fontSize: 18,
  },

  submitButton: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },

  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },

  fullScreenContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },

  fullScreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
