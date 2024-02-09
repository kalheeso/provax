import {faCalendarDays, faPlus, faSyringe, faUser} from "@fortawesome/free-solid-svg-icons";

export const navBarItems = [
  {
    label: 'Agendamentos',
    icon: faCalendarDays,
    route: 'appointments',
    onlyAdmin: false
  },
  {
    label: 'Novo Agendamento',
    icon: faPlus,
    route: 'appointment/new',
    onlyAdmin: false
  },
  {
    label: 'Vacinas',
    icon: faSyringe,
    route: 'vaccine',
    onlyAdmin: false
  },
  {
    label: 'Nova Vacina',
    icon: faPlus,
    route: 'vaccine/new',
    onlyAdmin: true
  },
  {
    label: 'Alergias',
    icon: faSyringe,
    route: 'allergy',
    onlyAdmin: false
  },
  {
    label: 'Nova Alergia',
    icon: faPlus,
    route: 'allergy/new',
    onlyAdmin: true
  },
  {
    label: 'Perfil',
    icon: faUser,
    route: 'profile',
    onlyAdmin: false
  }
];
