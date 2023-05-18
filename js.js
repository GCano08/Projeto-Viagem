    var readline = require('readline-sync');

var assentos = ""
var assentosB = ""
var assento = ""
var nome = ""
var sobrenome = ""
var idade = ""
var origem = ""
var destino = ""


//Repeticão
rep = 0
while (rep == 0) {

    //Pergunta ------------------
    console.clear()
    console.log("Passagens Aéreas \n 1 - Comprar Passagem \n 2 - Consultar Voos \n 3 - Mapa de Assentos \n 4 - Emitir Ticket \n 0 - Encerrar Programa");
    var escolha = readline.question('O que deseja fazer?');

    //Esolha 1 ------------------
    if (escolha == "1") {
        console.clear()
        console.log("Você está em -> Comprar Passagem");
        nome = readline.question('Nome:');
        sobrenome = readline.question('Sobrenome:');
        idade = readline.question('Idade:');
        assento = readline.question('Assento:');

        assentos = ""
        assentosB = ""
        var assentoValido = false

        while (assentoValido == false) {

            for (let index = 1; index < 13; index++) {
                assentos = "A" + index
                assentosB = "B" + index

                if (assentos == assento || assentosB == assento) {
                    assentoValido = true
                }
            }

            if (assentoValido == false) {
                console.log("Assento Inválido")
                assento = readline.question('Assento:');
            }

        }




        origem = readline.question('Origem:');
        destino = readline.question('Destino:');
        console.log("\n Pressione S para prosseguir \n Pressione qualquer tecla para voltar \n")


        var pv = readline.question('')
        if (pv == "S") {
            console.log("\n Você está em ---> Resumo da compra \n Nome = " + nome + " " + sobrenome + "\n Idade= " + idade + "\n Assento= " + assento + "\n Origem/Destino= " + origem + "/" + destino + "\n Valor = 3500 R$")

            console.log("\n Pressione C para confirmar")
            var confirmaPass = readline.question('')
            if (confirmaPass == "C") {
                console.clear()
            }
        }
        else {

        }
    }
    //Escolha 2 -----------------
    if (escolha == "2") {
        console.clear()
        console.log("\n Você está em -> Consultar Voos \n \n Origem ----------------> Destino \n \n Pres Prudente ---------> EUA \n Pres Prudente ---------> França \n Pres Prudente ---------> China \n Pressione V para voltar");
    }

    //Esolha 3 ------------------

    if (escolha == "3") {
        assentos = ""
        assentosB = ""
        console.clear()
        for (let index = 1; index < 13; index++) {            
            
            if(assento ==  "A"+index ){
                assentos += " X "
                assentosB += "B"+index+" "
               
            }
            else if( assento ==  "B"+index){
                assentosB += " X "
                assentos +=  "A"+index+" "
            }
            else{
                assentos +=  "A"+index+" "
                assentosB += "B"+index+" "
            }
        }
        
        console.log(assentos)
        console.log(assentosB)
        console.log("Pressione qualque tecla para voltar")
        var voltar1 = readline.question('')
        if (voltar1 == "v") {
            escolha == "0"
            console.clear(  )
        }
    }

    //Esolha 4 ------------------
    if (escolha == "4") {
        console.clear()
        console.log("  Você está em ----> Emitir Ticket  ")
        console.log("------------------------------------")
        console.log("    Obrigado por viajar conosco!    ")
        console.log("Cliente: " + nome + " " + sobrenome)
        console.log("Idade: " + idade + " Assento: " + assento)
        console.log("Origem/Destino: "+ origem + " > " + destino)
        console.log("Pressione qualque tecla para voltar")
    }

    //Escolha 0 -----------------
    if (escolha == "0") {
        console.clear()
        rep = 1
    }
}

