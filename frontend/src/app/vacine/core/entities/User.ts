import Agenda from "./Agenda";
import Allergy from "./Allergy";

export default class User {

  id !: number;
  nome !: string;
  dataNascimento !: Date;
  sexo !: string;
  logradouro !: string;
  numero !: number;
  setor !: string;
  cidade !: string;
  uf !: string;
  isAdmin !: boolean;
  email !: string;
  agendamentos !: Agenda[];
  alergias !: Allergy[];


  constructor() {
  }
}


