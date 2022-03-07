interface Usuario {
  nombreUsuario: string;
  password: string;
  confirmarPassword?: string;
}

let usuario1: Usuario = { nombreUsuario: "Juan", password: "1234" };

console.log(usuario1);
console.log(usuario1.nombreUsuario);

interface Abordar {
  // no recibe nada por eso es tipo void
  abordarTransporte(): void;
}

let avion: Abordar = {
  abordarTransporte: function () {
    console.log("abordando");
  },
};

avion.abordarTransporte();