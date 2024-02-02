export default class Vacina {
  id!: number
  titulo!: string
  doses!: number
  descricao!: string
  periodicidade!: string
  intervalo!: number

  constructor(id : number = 0, titulo: string = '', doses: number = 0, descricao: string = '', periodicidade: string = '', intervalo: number = 0) {
    this.id = id;
    this.titulo = titulo;
    this.doses = doses;
    this.descricao = descricao;
    this.periodicidade = periodicidade;
    this.intervalo = intervalo;
  }

}
