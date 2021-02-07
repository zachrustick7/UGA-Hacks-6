import React from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { Button, Card } from '@material-ui/core';

 
// function Cam (props) {
//   function handleTakePhoto (dataUri) {
//     // Do stuff with the photo...
//     console.log('takePhoto');
//   }
 
//   function handleTakePhotoAnimationDone (dataUri) {
//     // Do stuff with the photo...
//     console.log('takePhoto');
//   }
 
//   function handleCameraError (error) {
//     console.log('handleCameraError', error);
//   }
 
//   function handleCameraStart (stream) {
//     console.log('handleCameraStart');
//   }
 
//   function handleCameraStop () {
//     console.log('handleCameraStop');
//   }
 
//   return (
//     <Card>
//         <Camera
//         onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
//         onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
//         onCameraError = { (error) => { handleCameraError(error); } }
//         idealFacingMode = {FACING_MODES.ENVIRONMENT}
//         idealResolution = {{width: 640, height: 480}}
//         imageType = {IMAGE_TYPES.PNG}
//         imageCompression = {0.97}
//         isMaxResolution = {true}
//         isImageMirror = {false}
//         isSilentMode = {false}
//         isDisplayStartCameraError = {true}
//         isFullscreen = {false}
//         sizeFactor = {1}
//         onCameraStart = { (stream) => { handleCameraStart(stream); } }
//         onCameraStop = { () => { handleCameraStop(); } }
//         />
//     </Card>
//   );
// }

class Cam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleTakePhotoAnimationDone (dataUri) {
        this.props.handlePhoto(dataUri);
    }
    handleCameraError(error) {
        console.log(error);
    }
    render() {
        return(
            <Card>
                <Camera
                    onTakePhotoAnimationDone = { (dataUri) => { this.handleTakePhotoAnimationDone(dataUri); } }
                    onCameraError = { (error) => { this.handleCameraError(error); } }
                    idealFacingMode = {FACING_MODES.ENVIRONMENT}
                    idealResolution = {{width: 640, height: 480}}
                    imageType = {IMAGE_TYPES.PNG}
                    imageCompression = {0.97}
                    isMaxResolution = {true}
                    isImageMirror = {false}
                    isSilentMode = {false}
                    isDisplayStartCameraError = {true}
                    isFullscreen = {false}
                    sizeFactor = {1}
                />
            </Card>
        );
    }
}
export default Cam;