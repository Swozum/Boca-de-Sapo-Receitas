import pyrebase

firebase_config ={
    "apiKey": "AIzaSyDGQhavf3RIHtmonalfYbd-99CYwU3vRKk",
    "authDomain": "boca-de-sapo-receitas.firebaseapp.com",
    "databaseURL": "",
    "projectId": "boca-de-sapo-receitas",
    "storageBucket": "boca-de-sapo-receitas.appspot.com",
    "messagingSenderId": "353874977514",
    "appId": "1:353874977514:web:c8ef6155a18d2671802d93",
    "measurementId": "G-1BMVD4NSJE"

}

firebase = pyrebase.initialize_app(firebase_config)