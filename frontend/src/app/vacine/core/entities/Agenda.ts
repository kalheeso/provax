import Vacina from "./Vacina";


export default class Agenda {
  id !: number
  data !: Date
  situacao !: string

  vacina !: Vacina
  paciente !: any

  constructor(id:number, data : Date, situacao : string, vacina : Vacina, paciente : any){
    this.id = id
    this.data = data
    this.situacao = situacao
    this.vacina = vacina
    this.paciente = paciente
  }
}
