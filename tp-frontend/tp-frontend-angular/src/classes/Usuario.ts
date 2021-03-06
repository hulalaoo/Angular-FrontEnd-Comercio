import { Persona } from '../classes/Persona';
import { Direccion } from '../classes/Direccion';

export class Usuario extends Persona{
    constructor(nombre : string, apellido : string, telefono : string,
        direccion : Direccion, email : string, estado : string,
        public username : string, public isOpen : boolean,
        public ultFechaEntrada : Date, public ultFechaSalida : Date) {
            
            super(nombre, apellido, telefono, direccion, email, estado  )
        
    }
}
