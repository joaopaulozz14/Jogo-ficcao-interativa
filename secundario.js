/*if(numEquipamentos.indexOf("1") == true){
    console.log(`existe`)
    personagem.status = status + 2;
};

if(numEquipamentos.indexOf('2') == true){
    console.log("Qualquer coisa")
    personagem.energia += 2;
};

if(numEquipamentos.indexOf('3') == true){
    console.log("bandana");
    personagem.saude += 2;
};
if(numEquipamentos.indexOf('4') == true){
    console.log("cantil");
    personagem.energia += 2;
};
if(numEquipamentos.indexOf('5') == true){
    console.log("rum");
    personagem.energia += 2;
    personagem.saude += 2;
};
if(numEquipamentos.indexOf('6') == true){
    personagem.status += 2;
    console.log("corda");
};
console.log(personagem);
*/

/*
let jogador1 = {

    fome: 50,

    comida: 1,
    comer: function(comida){
        this.fome += comida * 20;
        this.comida--;
        return this.fome;
    }
}

console.log(`Quantidade de comida: ${jogador1.comida}`)
console.log(`Fome agora:  ${jogador1.fome}`)
console.log(`Fome após comer: ${jogador1.comer(jogador1.comida)}`);
console.log(`Quantidade de comida: ${jogador1.comida}`)

if (jogador1.comida > 0)
{
      jogador.comer();
}


*/
/*
let jogador1 = {

    fome: 50,
    saude: 40,
    energia: 30,

    comida: 1,
    comer: function(){

        this.fome += this.comida * 50;
        this.energia += this.comida * 20;
        this.saude +=  this.comida * 30;
        this.comida--;

    }
}

console.log(Quantidade de comida: ${jogador1.comida})
console.log(Fome agora:  ${jogador1.fome})
console.log(Saude agora:  ${jogador1.saude})
console.log(Energia agora:  ${jogador1.energia})
jogador1.comer();
console.log(Fome após comer: ${jogador1.fome});
console.log(Saude agora:  ${jogador1.saude})
console.log(Energia agora:  ${jogador1.energia})
console.log(Quantidade de comida: ${jogador1.comida})*/

function reposicao(escolhaReposicao, reposicao){
    reposicao = prompt('Deseja repor as energias?(s/n): ');
    if(reposicao.toUpperCase() != 'N' || reposicao.toUpperCase() != 'NAO'){
        console.log(suprimentos);
        console.log(equipamentos);
    for(let i in equipamentos){
        console.log(`(${numEquipamentos[i]}) para usar ${equipamentos[i]}`);
    }
        escolhaReposicao = prompt("Escolha o que irá utilizar: ");
    for(let i = 0; i <= 1; i++){
        if(escolhaReposicao == numEquipamentos[i] && escolhaReposicao == 1){
            personagem.energia += suprimentos.comida * 1;
            personagem.saude +=  suprimentos.comida * 1;
            suprimentos.comida--;
        }
        if(escolhaReposicao == numEquipamentos[i] && escolhaReposicao == 2){
            personagem.saude += 2;
            suprimentos.bandana--;
        }
        if(escolhaReposicao == numEquipamentos[i] && escolhaReposicao == 3){
            personagem.energia += 1;
            personagem.saude += 1;
            suprimentos.cantil--; 
        }
        if(escolhaReposicao == numEquipamentos[i] && escolhaReposicao == 4){
            personagem.energia += 1;
            suprimentos.rum--;
        }   
    }
    }
    console.log(personagem);