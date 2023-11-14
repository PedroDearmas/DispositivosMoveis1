export class Cachorro {
    public id: number;
    public nome: string;
    public raca: string;
    public datanasc: string;

    constructor(obj?: Partial<Cachorro>) {
        if (obj) {
            this.id = obj.id
            this.nome = obj.nome
            this.raca = obj.raca
            this.datanasc=obj.datanasc
        }
    }

    toString() {
        const fields = Object.values(this).join(', ')
        return `Cachorro [${fields}]`
    }

    toObjeto() {
        const Cachorro = {
            id: this.id,
            nome: this.nome,
            raca: this.raca,
            datanasc:this.datanasc
        }

        return Cachorro
    }
};