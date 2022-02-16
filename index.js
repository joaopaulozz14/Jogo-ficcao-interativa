const prompt = require("prompt-sync")();
//Professor, somente a história 01 funciona, a 02 é semelhante com a 01, e 03 dos piratas o personagem seria como um vilão. Então na testagem só vai funcionar o primeiro blz.

let companhia = 0;
let status = 3;
let equipamentos = [];
let numEquipamentos = [];
let mensagem;
let dia = 1;
const personagem = {
    status: 3,
    energia: 3,
    saude: 3
};
const suprimentos = { };

//**Pegando as horas */
let agora = new Date();
let hora = agora.getHours();
let minutos = agora.getMinutes();
let horaJogo = 0;

//********Boas-vindas ***********/

function boasVindas(){
    console.log(`Seja bem-vindo ao jogo. Escolha a sua companhia para embarcar nesta viagem! `);
    while(companhia != '1' && companhia != '2' && companhia != '3'){
    companhia = prompt(` 1- Para companhia mercante Salazaar 2- Para companhia mercante Stalinberg 3- Para navio pirata `);
    }
    return companhia;
    }

//*************Escolha da companhia pelo usuário ******************/

let pergunta;
function escolhaCompanhia(comp){
    if(comp == '1'){
        console.log("");
        console.log(`Olá jovem Jake seja bem-vindo a bordo do navio mercante Salazaar, esperamos contar com sua ajuda! 
Sou a sub-capitã Driana `);
    }else if(comp == '2'){
        console.log("");
        console.log(`Olá jovem Jake seja bem-vindo a bordo do navio mercante Stalinberg, esperamos contar com sua ajuda! 
Sou o sub-capitão Washington`);
    }else if(comp == `3`){
        console.log("");
        console.log(`Olá jovem Jake seja bem-vindo a bordo do navio pirata Queen, és destemido certo! 
Sou o sub-capitão Drake `);
    }
    pergunta = prompt(`Soube da garrafa encontrada contendo um mapa de tesouro? `);
    return pergunta;
}

//*************Escolha dos equipamentos, traçando a jornada ********************/

function escolhaEquipamentos(pergunta, equipamentos, mensagem){
    if(hora > 18 || hora <= 6){
        horaJogo = 6;
        mensagem = '----------Seja breve, partiremos ao amanhecer(06h)!----------';
    }else if(hora >= 6 || hora < 18){
        horaJogo = 18;
        mensagem = '----------Seja breve, partiremos ao anoitecer(18H)!----------';
    }else{

    }
 

     if(pergunta.toUpperCase() == 'SIM' || pergunta.toUpperCase() == 'S'){
        console.log("");
        console.log(`Estás bem informado, parece-me ser um bom navegante! Vá buscar seu equipamento, traga somente o 
necessário, pode ser uma viagem sem volta!`);

        personagem.status++
        console.log(`Agora são exatamente ${hora}:${minutos}h`);
        console.log(mensagem);
        console.log(horaJogo);
        status++
    }else if(pergunta.toUpperCase() == 'NAO' || pergunta.toUpperCase() == 'N'){
        console.log("");
        console.log(`Estás muito mal informado, espero que não me dê problemas! Vá buscar seu equipamento, traga somente o necessário, pode ser uma viagem sem volta!`);
        console.log(`Agora são exatamente ${hora}:${minutos}h`);
        console.log(mensagem);
        status--
    }else{
        console.log("");
        console.log(`Falas grego? Vá buscar seu equipamento! traga somente o necessário, pode ser uma viagem sem volta `);
        console.log(`Agora são exatamente ${hora}:${minutos}h`);
        console.log(mensagem);
        status--
    }

    let vazio = prompt(`A partir de agora você escolherá os seus equipamentos de viagem, escolha-os bem! Escolha três opções! Não repita as escolhas!`)
    console.log(`  
                   \t1- Comida -- energia +1, saude +1
                   \t2- Bandanas p/ ferimentos -- saude +2
                   \t3- Cantil -- energia +1 saude+1
                   \t4- Rum -- energia +2`)

    for(let i = 0; i <=1; i++){
        console.log(`${i}º escolha`);
        let escolha = prompt(`Digite a escolha: `);
        while(escolha != "1" && escolha != "2" && escolha != "3" && escolha != "4"){
           console.log(`Opção inválida!`);
           escolha = prompt(`Digite novamente: `);
       }
       
       if(escolha == "1"){
            escolha = "comida";
            equipamentos.push(escolha);
            numEquipamentos.push(1);
            suprimentos.comida = 1;
       }else if(escolha == "2"){
            escolha = "bandanas";
            equipamentos.push(escolha);
            numEquipamentos.push(2)
            suprimentos.bandana = 1
       }else if(escolha == "3"){
            escolha = "cantil";
            equipamentos.push(escolha);
            numEquipamentos.push(3)
            suprimentos.cantil = 1;
       }else if(escolha == "4"){
            escolha = "rum";
            equipamentos.push(escolha);
            numEquipamentos.push(4)
            suprimentos.rum = 1;
       }
    }
    console.log(equipamentos);
    console.log(suprimentos);
}
/*******Missão inicial, function que chama as functions principais**********/
function missaoInicial(){
    let vazio = prompt("");
    if(companhia == '1'){
        console.log(`O navio Salazaar têm o mapa do tesouro em mãos, a missão confiada é decifrar este mapa mágico. Este mapa revela as pistas uma de cada vez! Por isso estás aqui! Não nos decepcione!`);

        let vazio = prompt("");
        campanha1(numEquipamentos, personagem);
    }/*else if(companhia == '2'){
        console.log(`O navio Stalinberg têm o mapa do tesouro em mãos, a missão confiada é decifrar este mapa mágico. Este mapa revela as pistas uma de cada vez! Por isso estás aqui! Não nos decepcione!`);
    }else{
        console.log(`O navio pirata está aqui as escondidas caro Jake, me diz o que te faz querer fazer parte desta frota? Somos desertores, ladrões e sem destino! Estás atrás de ouro não é mesmo? Iremos seguir estes dois navios e na hora exata roubaremos aquele mapa e descobrir onde está localizado o tesouro do Barba Negra! Lembre-se que o mapa possui uma magia, que revela as pistas uma de cada vez`);
        console.log(`Esperaremos partirem e na escuridão da noite roubamos seu navio e o mapa! `);
    }*/
    vazio = prompt("");

}
boasVindas();
escolhaCompanhia(companhia);
escolhaEquipamentos(pergunta, equipamentos, mensagem);
console.log(numEquipamentos);
missaoInicial();


//****************8**Funções das campanhas do jogo*******************************/
function campanha1(numEquipamentos, personagem, escolhaJogo){

    console.log(personagem);
    console.log(`------DIA ${dia} //${horaJogo} horas-------`);
    console.log("Vejamos a descrição do mapa: ");
    console.log("-----------------------------Mapa-----------------------------");
    console.log('EM TERRAS NATALÍCIAS ENCONTRARÁ MINHA ESPADA NO CUME MAIS ALTO');
    console.log('---------------------------------------------------------------')
    console.log("Muito bem, a primeira pista nos leva a terra natal do capitão Barba Negra, MonteVerde!");
    console.log(`Encontraremos a espada do capitão Barba Negra presa no cume mais alto`);
    let vazio = prompt('');
    console.log("VAMOS PARTIR!");
    
    if(personagem.status >= 4){
        console.log(`Estás com bom status, podes escolher onde vai trabalhar nesta pequena viagem para Monteverde`);
        console.log(`(1) - Limpar navio`);
        console.log(`(2) - Trabalhar de galeiro(remando)`);
        let escolha = +prompt(`Escolha: `);
        while(escolha < 1 && escolha > 2){
            escolha = +prompt(`Escolha: `);
        }
        if(escolha == 1){
            personagem.energia--;
        }else{
            personagem.energia--;
            personagem.saude--;
        }
    }else{
        console.log("Estão desconfiados de sua capacidade!")
        console.log(`Status: ${status}`);
        console.log(`Por isso te designaram ao serviço mais pesado! Serviço de galeiro! Boa sorte!`);
        personagem.energia--;
        personagem.saude--;
    }
    console.log(personagem);
    
    /********TÉRMINO ENTRADA NAVIO*********/

    /*******Amizade com Afonso**************/
    vazio = +prompt("");
    console.log(`Bem-vindo jovem!`);
    console.log(`Sou Afonso, vejo que está animado, han?`);
    console.log(`Sente-se aqui, vamos conversar!`);
    console.log(`Você aceita uma partida de truco? `);
    escolhaJogo = +prompt(`(1) - Aceito; (2) - Não aceito  `);
    while(escolhaJogo != 1 && escolhaJogo != 2){
        console.log(`Número inválido!`);
        escolhaJogo = +prompt(`(1) - Aceito; (2) - Não aceito  `);
    }

    if(escolhaJogo == 1){
        truco();
        console.log(`Saiba que pode contar comigo jovem!`);
        console.log(`Todos estão inquietos pela descoberta do mapa, muitas gerações de nossas famílias cobiçaram o mapa`);
        console.log(`E nós somos os primeiros a tê-lo em mãos`);
        console.log(`Então mãos ao serviço!`);    
    }else{
        console.log("Uma pena que não deseja jogar");
        console.log(`Saiba que pode contar comigo jovem!`);
        console.log(`Todos estão inquietos pela descoberta do mapa, muitas gerações de nossas famílias cobiçaram o mapa`);
        console.log(`E nós somos os primeiros a tê-lo em mãos`);
        console.log(`Então mãos ao serviço!`);
    }
    horaJogo();
    vazio = prompt("");
    console.log("------------CHEGADA A MONTEVERDE---------------") 
    //Aqui vai uma imagem ascii
    console.log('Aqui precisamos ser inteligentes e chegar ao topo daquela montanha');
    console.log('Leve suprimentos, não será fácil');
    vazio = prompt('');
    primeiroAto();
    segundoAto();
}


//*************JOGO TRUCO***************/
function truco(){
    let totalUsuario = 0;
    let totalMaquina = 0;
    let naipeUsuario;
    let naipeMaquina;

        console.log("");
        console.log("Muito Bem! Jogaremos!");
        console.log("Valendo uma garrafa de rum! ");
        vazio = prompt("");
        console.log(` Do maior para o menor: 
                    0 - (1 de espada);
                    1 - (1 de paus);
                    2 - (7 de espadas);
                    3 - (7 de ouros);
                    4 - (3 de copas)
        `)
        vazio = prompt("");
        let jogo = 's';
        while(jogo == 's'){
        numeroAleatorioUsuario = Math.floor(Math.random() * 3);
        console.log(numeroAleatorioUsuario);
        numeroAleatorioMaquina = Math.floor(Math.random() * 3);
        console.log(numeroAleatorioMaquina);

        if(numeroAleatorioMaquina == 0){
            naipeMaquina = '1 de espada';
        }else if(numeroAleatorioUsuario == 0){
            naipeUsuario =  '1 de espada';
        }

        if(numeroAleatorioMaquina == 1){
            naipeMaquina = '1 de paus';
        }else if(numeroAleatorioUsuario == 1){
            naipeUsuario = '1 de paus';
        }
        
        if(numeroAleatorioMaquina == 2){
            naipeMaquina = '7 de espadas'
        }else if(numeroAleatorioUsuario == 2){
            naipeUsuario = '7 de espadas';
        }

        if(numeroAleatorioMaquina == 3 || numeroAleatorioUsuario == 3){
            naipeMaquina = '7 de ouros'
        }else if(numeroAleatorioUsuario == 3){
            naipeUsuario = '7 de ouros';
        }

        if(numeroAleatorioMaquina == 4 || numeroAleatorioUsuario == 4){
            naipeMaquina = '3 de copas'
        }else if(numeroAleatorioUsuario == 4){
            naipeUsuario = '3 de copas';
        };

        if(numeroAleatorioMaquina < numeroAleatorioUsuario){
            console.log("------------------------------------------------")
            console.log("Afonso: ",naipeMaquina, "x Jake: ", naipeUsuario);
            console.log("Afonso venceu");
            totalMaquina++
        }else if(numeroAleatorioUsuario < numeroAleatorioMaquina){
            console.log("------------------------------------------------")
            console.log("Jake: ",naipeUsuario, "x Afonso: ", naipeMaquina);
            console.log("Jake venceu");
            totalUsuario++
        }else{
            console.log("------------------------------------------------")
            console.log("Empate");
        }
        if(totalMaquina > totalUsuario){
            console.log(`Afonso: -Ganhei por ${totalMaquina} a ${totalUsuario}`);
        }else if(totalUsuario > totalMaquina){
            console.log(`Jake: - Ganhei por ${totalUsuario} a ${totalMaquina}`);
        }else{
            console.log(`Deu empate!`);
        }
            jogo = prompt("Jogar mais uma rodada? (s/n): ");
            if(jogo != 's' ){
                if(totalMaquina > totalUsuario){
                    console.log(" ");
                    console.log(`Afonso: - Resultado final, ganhei por ${totalMaquina} a ${totalUsuario}`);
                    console.log(`Não se ganha da experiência!`);
                }else if(totalUsuario > totalMaquina){
                    console.log(" ");
                    console.log(`Jake: - Resultado final, ganhei por ${totalUsuario} a ${totalMaquina}`);
                    console.log(`Jake: - Dê-me logo essa garrafa de rum!`);
                    console.log(`Afonso: - Na próxima não terá tanta sorte!`);
                    suprimentos.rum = 1;
                    suprimentos.rum += 1;
                    status++
                }else{
                    console.log(`Empatado!`);
                }
            }
        }
        vazio = prompt("");

}

function primeiroAto(resposta){
    let listaSeta = [];
    let listaSetaDesenho = [];
    let desenho;
    console.log("Sub-capitão: 'Nossa missão é chegar ao topo daquele monte!'");
    reposicaoEnergia();

    let vazio = prompt("");
    console.log(`Capitã Driana: - A missão é descobrirmos o caminho de acordo com as pistas do mapa!`)
    console.log(`Capitã Driana: - Ele revela a sequência da trilha e nós devemos segui-lá`);
    vazio = prompt("Preparado? Vamos começar!");
    console.clear();

    for(let i = 1; i <= 4; i++){
    let seta = Math.floor(Math.random() * 3);
    if(seta == 0){
    console.log("^^ (0)");
    desenho = '^^'
    }else if(seta == 1){
    console.log(`< (1)`);
    desenho = '<';
    }else if(seta == 2){
    console.log(`> (2)`);
    desenho = '>';
     }else if( seta == 3){
    console.log(`v (3)`)
    desenho = 'v';
    }

    listaSetaDesenho.push(desenho);
    listaSeta.push(seta);

    
    vazio = prompt("");
    console.clear();
    }
    console.log(listaSetaDesenho);
    console.log(listaSeta);
    let terminar = false;
    primeiro: while(personagem.energia > 0 && terminar == false){
        for(let i = 0; i <= 3; i++){
            console.log(i,'i');
            resposta = prompt(`Qual a ${i}º direção?(Digite o número): `);

            if(listaSeta[i] == resposta){
                if(resposta == 0){
                    console.log('^^')
                }else if(resposta == 1){
                    console.log('<');
                }else if(resposta == 2){
                    console.log('>');
                }else if(resposta == 3){
                    console.log('v');
                }
                if(i >= 3){
                    terminar = true;
                    console.log("Muitíssimo bem marujo, você descobriu o local, vejamos o que há aqui");
                    vazio = prompt('');
                    console.clear();
                    console.log('---------------------------MAPA--------------------------');
                    console.log('A última luz do dia de fogo brilhará onde a estrela do mar apontar !');
                    console.log('----------------------------------------------------------');
                    console.log('Sub-capitã Driana: - A estrela do mar sempre aponta para o sul, acredito que seja para as ilhas perdidas do sul! Vamos partir!');
                    horaJogo2();
                    console.log(horaJogo);
                }
            }else if(listaSeta[i] != resposta){
                console.log('Você errou o caminho!')
                console.log(personagem);
                personagem.energia--;
                personagem.status--;
                console.log(personagem);
                i = 0;
                if(personagem.energia = 1){
                    reposicaoEnergia();
                    if(personagem.energia >= 1){
                        console.log('continuando');
                    }else{
                        console.log('continuando, mas perdeu')
                    } 
                }
                if(personagem.energia == 0 || personagem.status == 0){
                    console.log('Uma pena, você perdeu o jogo!');
                    break;
                }
                console.log(personagem);
                console.log('Tentando novamente!');
                terminar = false;
                console.log('');
            }
        }
    }
   
}

function segundoAto(){
    console.log('Rumo as ilhas perdidas!');
    console.log('Caminha barco caminha, nas ondas azuis do mar![canção]');
    console.log('Enquanto Afonso entoava uma canção de navegante, de repente surge um grito na escuridão do mar!');
    let vazio = prompt("");
    console.log("FOGO!!!!");
    console.log('E se ouve um tremendo estrondo a bombordo ');
    console.log('Capitão Barbarosa: - É um ataque!!');
    console.log('Homens, assumam suas posições!!!');
    vazio = prompt("");
    console.log('E outro estrondo é então sentindo!')
    console.log('Sub-capitã Driana: - É um ataque pirata capitão!');
    vazio = prompt("");
    console.log('Capitão Barbarosa: - Vamos dar meia volta neste navio e afundar os desgraçados! ')//Foi mal o palavrão professor, empolguei na história kkk
    console.log('Preparem-se para lutar!');
    console.log('Afonso: - A hora do combate veio caro Jake, fique vivo! Pegue sua espada');
    vazio = prompt("");
    console.clear();
    console.log('-------------VIVER OU MORRER-----------');
    console.log('-------------HORA DO COMBATE!----------');
    let comandos = {
            cima: '(0) ^^',
            baixo: '(1) vv',
            direita: '(2) >>',
            esquerda: '(3) <<'
    }
    console.log(comandos)
    for(let i = 0; i < 2; i++){
        let seta = Math.floor(Math.random() * 3);
        if(seta == 0){
            console.log(comandos.cima);
        }else if(seta == 1){
            console.log(comandos.baixo);
        }else if(seta == 2){
            console.log(comandos.direita);
        }else if(seta == 3){
            console.log(comandos.esquerda);
        }
        let defesa = prompt(`Defenda-se! Escolha um comando ${comando}`);
        if(seta == 0){
            if(defesa == 0){
                console.log('Boa defesa!');
            }else{
                personagem.saude--;
                console.log('Ele desferiu um golpe!');
                console.log(personagem);
            }
        }
        if(seta == 1){
            if(defesa == 1){
                console.log('Boa defesa!');
            }else{
                personagem.saude--;
                console.log('Ele desferiu um golpe!');
                console.log(personagem);
            }
        }
        if(seta == 2){
            if(defesa == 2){
                console.log('Boa defesa!');
            }else{
                personagem.saude--;
                console.log('Ele desferiu um golpe!');
                console.log(personagem);
            }
        }
        if(seta == 3){
            if(defesa == 3){
                console.log('Boa defesa!');
            }else{
                personagem.saude--;
                console.log('Ele desferiu um golpe!');
                console.log(personagem);
            }
        }
    }
    horaJogo();
}

/************Funções das campanhas do jogo**********************/
/**************************************************************/



function reposicaoEnergia(escolhaReposicao){
    let reposicao = prompt('Deseja repor as energias?(s/n): ');
    console.log(reposicao)
    let reposicaoUpper = reposicao.toLowerCase();
    console.log(reposicaoUpper);
    if(reposicaoUpper == 's' || reposicaoUpper == 'sim'){
        console.log(suprimentos);
        console.log(equipamentos);
    for(let i in equipamentos){
        console.log(`(${numEquipamentos[i]}) para usar ${equipamentos[i]}`);
    }
        escolhaReposicao = prompt("Escolha o que irá utilizar: ");

    fora: for(let i = 0; i <= 1; i++){
        if(escolhaReposicao == numEquipamentos[i] && escolhaReposicao == 1){
            if(suprimentos.comida > 0){
                personagem.energia += suprimentos.comida * 1;
                personagem.saude +=  suprimentos.comida * 1;
                suprimentos.comida--;
            }else{
                console.log('Item indisponível!!Else Secundário');
                i = 0;
                break fora;
            }
        }else{
            console.log('Item indisponível!Else Principal');
            i=0;
            break fora;
        }

        if(escolhaReposicao == numEquipamentos[i] && escolhaReposicao == 2){
            if(suprimentos.bandana > 0){
                personagem.saude += suprimentos.bandana * 2;
                suprimentos.bandana--;
            }else{
                console.log('Item indisponível! !Else Secundário');
                i = 0;
                break fora;
            }
        }else{
            i = 0;
            console.log('Item indisponível! Else Principal');
            break fora;
        }
        
        if(escolhaReposicao == numEquipamentos[i] && escolhaReposicao == 3){
            if(suprimentos.cantil > 0){
                personagem.energia += suprimentos.cantil * 1;
                personagem.saude += suprimentos.cantil * 1;
                suprimentos.cantil--; 
            }else{
                console.log('Item indisponível!Else secundário');
                i = 0;
                break fora;
            }
        }else{
            console.log('Item indisponível!Else Principal');
            i = 0;
            break fora;
        }

        if(escolhaReposicao == numEquipamentos[i] && escolhaReposicao == 4){
            if(suprimentos.rum > 0){
                personagem.energia += suprimentos.rum * 1;
                suprimentos.rum--;
            }else{
                console.log('Item indisponível!Else Secundário ');
                i = 0;
                break fora;
            }
        }else{
            console.log('Item indisponível!Else Principal');
            i = 0;
            break fora;
        }   
    }
    }else{
        console.log('Que pena');
    }
    console.log(personagem, 'Após modificação');
}

/********Função da hora do jogo**********/
function horaJogo(){
    hora = hora + 4;
    if (hora >= 24){
        dia = dia + 1;
        hora = hora - 24;
    }
    console.log(`São ${hora} h do dia ${dia}`);
}
function horaJogo2(){
    hora = hora + 2;
    if (hora >= 24){
        dia = dia + 1;
        hora = hora - 24;
    }
    console.log(`São ${hora} h do dia ${dia}`);
}