import * as Speech from "expo-speech";

export class Cachorro{
    public id : number;
    public nome: string;
    public raca: string;
    public dataNascimento: string;

    constructor(obj?: Partial<Cachorro>){
        if(obj){
            this.id = obj.id;
            this.nome = obj.nome
            this.raca = obj.raca
            this.dataNascimento = obj.dataNascimento
        }
    }

    latir(){
        Speech.speak("Au au au"+ this.nome,
        {language :"pt-br"})
    }

    toString(){
        const fields=Object.values(this).join(", ")
        return 'Cachorro[${fields}]'
    }

}