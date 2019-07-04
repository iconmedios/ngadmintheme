import { Injectable } from '@angular/core';

import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }

  subirArchivo( archivo: File, tipo: string, id: string ){
    return new Promise ( (resolve, reject ) =>{
      // configuración de la petición Ajax 
      let formData = new FormData();
      let xhr = new XMLHttpRequest();
      formData.append( 'imagen', archivo, archivo.name );
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 ){
          if( xhr.status === 200 ){
            console.log('Imagen Subida');
            resolve( JSON.parse(xhr.response ));
          } else {
            console.log('Falló la subida del archivo');
            reject( xhr.response );
          }
        }
       };
       // Recivir los valores del archivo 
       //let url = URL_SERVICIOS + '/upload/'+ tipo +'/'+id;
        let url = `${URL_SERVICIOS}/upload/${tipo}/${id}`;
       xhr.open('PUT', url, true);
       xhr.send( formData );



     });
 }
}


// V173 aadv  Cosas por hacer en js puro para subir las imagenes
// ==================================================
// 1. Crear funcion subirArchivo 
// 1.1 recibir un archivo de tipo File de tipo texto desde el backend
// 1.2 Recibir el id
// 2. Creamos las variables let para configurar el  XMLHttpRequest
// 2.1 Hacer la configuración de formData con los valores imagen, value archivo y el nombre
// 2.2 Hacer la configuración AJAX en una funcion xhr.onreadystatechange
// 3. Crear una promesa y meter el codigo 1 y 2 dentro 
