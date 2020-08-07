import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://firestore-grafica-4a698.firebaseio.com"
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.json({
      mensaje: 'Hola Mundo desde Funciones Firebase!!!!!'});
});

export const getGOTY = functions.https.onRequest((request, response) => {
    const nombre = request.query.nombre || 'sin nombre';
    response.json({
        nombre
    })
});
