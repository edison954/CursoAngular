import { FileItem } from './../models/file-item';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { compileNgModule } from '@angular/core/src/render3/jit/module';


@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';


  constructor(private db: AngularFirestore) { }

  private guardarImagen(imagen: { nombre: string, url: string }) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`)
      .add(imagen);
  }

  cargarImagenesFirebase(imagenes: FileItem[]) {
    console.log(imagenes);
    const storageRef = firebase.storage().ref();


    for (const item of imagenes) {

      item.estaSubiendo = true;
      if (item.progreso >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask =
        storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
          .put(item.archivo);

      let urlDownload;
      storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`).getDownloadURL().then(ref => {
        urlDownload = ref;
      });

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.log('Error al subir', error),
        () => {
          console.log('Imagen cargada correctamente');
          // item.url = uploadTask.snapshot.downloadURL;
          item.url = urlDownload;
          item.estaSubiendo = false;
          this.guardarImagen({
            nombre: item.nombreArchivo,
            url: item.url
          });
        }
      );
    }
  }


}
