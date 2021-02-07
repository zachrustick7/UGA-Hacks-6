import React, { useEffect, useState } from 'react';

import { createWorker, PSM, PT } from 'tesseract.js';
import { Button, Card } from '@material-ui/core';
import Cam from './Cam.js'
import Webcam from "react-webcam";
import './App.css';
import scrabbleTest from "./images/scrabbleTest.png";
import words from "./words.json";


const worker = createWorker({
  logger: m => console.log(m),
});


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "loading...",
      cameraOpen: false,
      photoUri: null,
      taken: false
    }
  }


  openCamera() {
    this.setState({
      cameraOpen: true,
      body: "loading...",
      photoUri: null
    })
  }

  async readBoard(img) {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    
    const { data: { text } } = await worker.recognize(img);
    
    this.setState({
      body: text
    });
  }

  handlePhoto = (uri) => {
    console.log(uri);
    this.setState({
      cameraOpen: false,
      photoUri: uri,
      taken: true
    });
    this.readBoard(uri);
  }

  

  render() {
    console.log(words.words.length);
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    return (
      <div className = "content">
      <h1 style={{color:"#FFFFFF"}}>
        Optical Character Recognition Hangman
      </h1>

      {this.state.cameraOpen &&
        <Cam
          handlePhoto={this.handlePhoto}
        ></Cam>
      }
      {!this.state.cameraOpen &&
        <React.Fragment>
          <p style={{color: "#FFFFFF"}}>
            This OCR tool will take in a handwritten picture of an incomplete word and find all combinations of what it may be! Just snap a pic!
          </p>
          <Button style={{backgroundColor: "#152238", color: "#FFFFFF"}} onClick={() => this.openCamera()}>Take a picure</Button>
        </React.Fragment>
      }
      {this.state.photoUri!=null &&
        <Card style={{backgroundColor: "#1c2e4a", color: "#FFFFFF", padding: "5px", marginBottom: "10px"}}>
          {this.state.body}
        </Card>
      }
      {(this.state.taken && this.state.body!="loading...") &&
      
      
      
      <React.Fragment>
                {words.words.map((word)=>{
                  
                  if (word.includes(this.state.body)) {
                    return (
                      <Card style={{backgroundColor: "#1768ac", color: "#FFFFFF", padding: "5px", marginBottom: "5px"}}>
                        {word}
                      </Card>
                    );
                  }
                })}
        </React.Fragment>}
      
      
      </div>
      );
  }
}

export default App;