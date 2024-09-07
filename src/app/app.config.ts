import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: 
  [provideRouter(routes), 
    provideClientHydration(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"fir-crm-11b6e","appId":"1:567200091042:web:cf7f087399761a84f6c0fb","storageBucket":"fir-crm-11b6e.appspot.com","apiKey":"AIzaSyAH8QMxoqyl35D3slyhTZNllP8ZbPDp6MQ","authDomain":"fir-crm-11b6e.firebaseapp.com","messagingSenderId":"567200091042"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFirebaseApp(() => initializeApp({"projectId":"fir-crm-11b6e","appId":"1:567200091042:web:49860c43a79c81a6f6c0fb","storageBucket":"fir-crm-11b6e.appspot.com","apiKey":"AIzaSyAH8QMxoqyl35D3slyhTZNllP8ZbPDp6MQ","authDomain":"fir-crm-11b6e.firebaseapp.com","messagingSenderId":"567200091042"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFirebaseApp(() => initializeApp({"projectId":"fir-crm-11b6e","appId":"1:567200091042:web:65b08d6206adb4c4f6c0fb","storageBucket":"fir-crm-11b6e.appspot.com","apiKey":"AIzaSyAH8QMxoqyl35D3slyhTZNllP8ZbPDp6MQ","authDomain":"fir-crm-11b6e.firebaseapp.com","messagingSenderId":"567200091042"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFirebaseApp(() => initializeApp({"projectId":"fir-crm-11b6e","appId":"1:567200091042:web:65b08d6206adb4c4f6c0fb","storageBucket":"fir-crm-11b6e.appspot.com","apiKey":"AIzaSyAH8QMxoqyl35D3slyhTZNllP8ZbPDp6MQ","authDomain":"fir-crm-11b6e.firebaseapp.com","messagingSenderId":"567200091042"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
