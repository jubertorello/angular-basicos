import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    //Private: solo podemos hacer uso aquí.
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 1203
        },
        {
            nombre: 'Vegeta',
            poder: 2330
        }
    ]

    //Getters and Setters
    get personajes(): Personaje[] {
        //Puede ser manipulable, entonces agregamos el operador SPREAD [...]
        //[...] buena practica de JS
        return [...this._personajes];
    }

    //Constructor
    constructor() { }

    //Methods
    agregarPersonaje(data: Personaje) {
        this._personajes.push(data);
    }



}