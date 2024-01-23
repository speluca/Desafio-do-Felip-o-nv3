class criarHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    combate(){
        let ataque;
        if (this.tipo == "mago") {
            ataque = "magia";
        } else if (this.tipo == "guerreiro") {
            ataque = "espada";
        } else if (this.tipo == "monge") {
            ataque = "artes marciais";
        } else if (this.tipo == "ninja") {
            ataque = "shuriken";
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

let soldado1 = new criarHeroi("Pedro", "23" , "mago");
let soldado2 = new criarHeroi("Pedro", "23" , "monge");
let soldado3 = new criarHeroi("Pedro", "23" , "guerreiro");
let soldado4 = new criarHeroi("Pedro", "23" , "ninja");

soldado1.combate();
soldado2.combate();
soldado3.combate();
soldado4.combate();

