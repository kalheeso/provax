export default class Allergy{
  id !: number;
  nome !: string;
  vacina !: string;
  vacinaId !: number;

  constructor(id:number, nome:string, vacina:string, vacinaId:number) {
    this.id = id;
    this.nome = nome;
    this.vacina = vacina;
    this.vacinaId = vacinaId
  }
}
