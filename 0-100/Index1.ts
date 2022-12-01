let a: string = "Hola";
const b: number = 1;
const c: boolean = true;
const d: boolean[] = [true, false];

let e: any;
e = 1;
e = "uno";
e = [1];

// Class
class Trasnporte {
  private velocidad: number;

  constructor(velocidad: number) {
    this.velocidad = velocidad;
  }

  getVelocidad(): number {
    return this.velocidad;
  }
  setVelocidad(velocidad: number): void {
    this.velocidad = velocidad;
  }
}

class Auto extends Trasnporte {
  private numeroDePuerta: number;

  constructor(velocidad: number, numeroDePuerta: number) {
    super(velocidad);
    this.numeroDePuerta = numeroDePuerta;
  }

  getVelocidad(): number {
    return this.getVelocidad() * 2;
  }
}

// Polimorfismo

const trasnporte = new Trasnporte(255);
const auto = new Auto(255, 2);

const trasnporteArray: Trasnporte[] = [trasnporte, auto];
// Segun la entidad se comporta diferente eso es polimorfismo
trasnporteArray.forEach((t) => console.log(t.getVelocidad() + 2));

// Interfaces

interface Persona {
  nombre: string;
  edad: number;
  getVelocidad: (param: number) => number;
}

// Creando un objecto con la interfaz persona
const persona: Persona = {
  nombre: "Edward",
  edad: 21,
  getVelocidad: (param) => {
    return param * 2;
  },
};

// Estructura bien una inferaz

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOrigin;
}

interface CharacterOrigin {
  name: string;
  url: string;
}

// Utilizar

const ArrayCharaters: Character[] = [
  {
    id: 1,
    name: "Edward",
    status: "Soltero",
    species: "Humano",
    type: "Humano",
    gender: "Hombre",
    origin: {
      name: "Tierra",
      url: "Cutupu",
    },
  },
];

const results = ArrayCharaters;
results.forEach((e) => e);

// Custun Tyoes

type Dni = string;

const dni: Dni = "hakaka";
const tellMeMyDni = (dni: Dni) => {
  console.log(dni);
};

// Extencion de interfaces

interface Personita {
  nombre: string;
  edad: number;
}

interface Abogado extends Personita {
  legado: string;
}

const personita: Personita = {
  nombre: "Edward",
  edad: 21,
};
const abogado: Abogado = {
  nombre: "Edward",
  edad: 21,
  legado: "123",
};

// Union de tipos

interface Interface1 {
  prop1: string;
}
interface Interface2 {
  prop2: number;
}

type InterfaceMix = Interface1 | Interface2;

const mixUnion: InterfaceMix = {
  prop1: "aa",
  prop2: 2,
};

// Interseccion de tipos
type InterfaceMixInterseccion = Interface1 & Interface2;

const mixInterseccion: InterfaceMixInterseccion = {
  prop1: "aa",
  prop2: 1,
};

// Types para metodos
type SumaFunction = (param1: number, param2: number) => number;
const expectSuma = (suma: SumaFunction) => {
  return suma(1, 2);
};

const sumaFunction = (param: number, param2: number): number => {
  return param + param2;
};

const sumaFunction1: SumaFunction = (param, param2): number => {
  return param + param2;
};
