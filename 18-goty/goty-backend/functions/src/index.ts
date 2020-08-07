import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';

import * as express from 'express';
import * as cors from 'cors';

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://firestore-grafica-4a698.firebaseio.com"
});

const db = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.json({
      mensaje: 'Hola Mundo desde Funciones Firebase!!!!!'});
});

export const getGOTY = functions.https.onRequest(  async (request, response) => {
    // const nombre = request.query.nombre || 'sin nombre';
    // response.json({
    //     nombre
    // })

    const gotyRef = db.collection('goty');

    const docsSnap = await gotyRef.get();

    const juegos = docsSnap.docs.map( doc => doc.data());

    response.json(juegos);

});


//express
const app = express();
app.use(cors({ origin:true }));

app.get('/goty', async(req, res) => {

    const gotyRef = db.collection('goty');

    const docsSnap = await gotyRef.get();

    const juegos = docsSnap.docs.map( doc => doc.data());

    res.json(juegos);

});

app.post('/goty/:id', async(req, res) => {

    const id = req.params.id;
    const gameRef = db.collection('goty').doc( id );
    const gameSnap = await gameRef.get();

    if ( !gameSnap.exists ) {
        res.status(404).json({
            ok: false,
            mensaje: 'No existe un juego con ese ID ' + id
        })
    } else {
        // res.json('Juego existe');

        const antes = gameSnap.data() || { votos: 0};
        await gameRef.update({
            votos: antes.votos + 1
         });

         res.json({
             ok: true,
             mensaje: `Gracias por tu voto a ${ antes.name }`
         });
    }


});


// exports.api = functions.https.onRequest(app);

// otra forma
export const api = functions.https.onRequest(app);