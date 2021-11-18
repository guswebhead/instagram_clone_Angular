import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'instagram';



  ngOnInit(): void{

    const firebaseConfig = {
      apiKey: "AIzaSyBojjfR_Up2sFUOgmq5uYQ01V97RWpW1-U",
      authDomain: "angular-instagram-clone-2edc3.firebaseapp.com",
      projectId: "angular-instagram-clone-2edc3",
      storageBucket: "angular-instagram-clone-2edc3.appspot.com",
      messagingSenderId: "1030245738650",
      appId: "1:1030245738650:web:3afb8e05098706a0dcd723",
      measurementId: "G-DZMVZLGL5K"
    };

    firebase.initializeApp(firebaseConfig)
  }
}
