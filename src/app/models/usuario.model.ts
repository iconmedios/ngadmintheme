// video 149

export class Usuario {

// las opciones son ? son opcionales
    constructor( 
        public nombre: string,
        public email: string,
        public password: string,
        public img?: string,
        public role?: string,
        public google?: boolean,
        public _id?: string 

    ){

    }
}