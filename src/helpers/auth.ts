import firebase from "firebase/app";
import "firebase/auth";

class AuthController {
  public user: firebase.User;

  constructor() {
    this.init();
  }

  init() {
    const config = {
      apiKey: "AIzaSyB1dqMPnYUD5PQ-p26k-2DlMqsXEYVX0g0",
      authDomain: "sos-pollis.firebaseapp.com",
      databaseURL: "https://sos-pollis.firebaseio.com",
      projectId: "sos-pollis",
      storageBucket: "sos-pollis.appspot.com",
      messagingSenderId: "875001918975",
      appId: "1:875001918975:web:481dcf01882e5f56d2e3ca",
      measurementId: "G-M28L68DTVB",
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  }

  async registerUser(email, pass): Promise<firebase.auth.UserCredential> {
    try {
      return await firebase.auth().createUserWithEmailAndPassword(email, pass);
    } catch (error) {
      console.log(error);
    }
  }

  async loginWithEmail(email, pass): Promise<firebase.auth.UserCredential> {
    try {
      return await firebase.auth().signInWithEmailAndPassword(email, pass);
    } catch (error) {
      console.log(error);
    }
  }

  async loginWithGoogle(): Promise<firebase.auth.UserCredential> {
    try {
      let provider: firebase.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
      return await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  }

  async loginWithFacebook(): Promise<firebase.auth.UserCredential> {
    try {
      let provider: firebase.auth.FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();
      return await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  }

  async sendResetLink(email: string): Promise<void> {
    try {
      return await firebase.auth().sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  async sendVerificationEmail(): Promise<void> {
    try {
      return await firebase.auth().currentUser.sendEmailVerification();
    } catch (error) {
      console.log(error);
    }
  }
}
export const AuthService = new AuthController();
