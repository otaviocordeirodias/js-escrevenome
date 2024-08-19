let parcial = palavra.substring(0, quantidade);
return parcial;
}

function draw() {

inicializaCores();

let texto = palavraParcial(0, width);
  
text(texto, 200, 200);

}

function modoNoturno(horario) {
if (horario > 18) {
  console.log("Você precisa ligar o modo escuro!");
} else {
  console.log("Modo noturno não é necessário neste momento.");
}
}

modoNoturno(15);
modoNoturno(20);
