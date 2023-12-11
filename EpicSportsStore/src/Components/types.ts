export interface ICard {
    id: number;
    title: string;
    uri: string;
    preco :  number;
    countItens: (id:number) => void;
}