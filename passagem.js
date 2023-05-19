var readine = require("readline-sync");
console.log("")
console.log("+---------passagens aerias-----------+")
console.log("|                                    | ")
console.log("| 1- comprar passagem                | ")
console.log("| 2- consultar voos                  | ")
console.log("| 3- mapa de assentos                | ")
console.log("| 4- emitir ticket                   | ")
console.log("| 0- encerrar o programa             | ")
console.log("|                                    | ")
console.log("+------------------------------------+")
var escolha= readine.question("Escolha uma opcao:")


if(escolha==1){
var Nome=readine.question("Nome:")
var SobreNome=readine.question("Sobrenome:")
var Idade=readine.question("Idade:")
var Origem=readine.question("Origem:")
var Destino=readine.question("Destinatario:")

console.log("")
console.log("+----------- Passagens Aereas -----------+ ")
console.log("|                                        | ")
console.log("|Voce esta em ---> Comprar passagem      | ")
console.log("| *Resumo da compra*                     | ")
console.log("|                                        | ")
console.log("|Cliente: "+Nome+" "+SobreNome              )
console.log("|Idade: "+Idade                             )
console.log("|Assento: A1                             | ")
console.log("|Voo: "+Origem+" X "+Destino                )
console.log("|                                        | ")
console.log("|Valor: R$:10000000                      | ")
console.log("+----------------------------------------+ ")
}


else if(escolha==2){
var Origem=readine.question("Origem:")
console.log("+----------- Passagens Aereas ----------+ ")
console.log("                                          ")
console.log("   Voce esta em ---> consulta de Voos     ")
console.log("                                          ")
console.log("       Origem      X   Destino            ")
console.log("------------------------------------------")
console.log("                                          ")
console.log(Origem+"                  Boston")
console.log(Origem+"                  Miami")
console.log(Origem+"                  Los Angeles")
console.log(Origem+"                  Denver")
}
else if(escolha==3){
console.log("+----------- Passagens Aereas ----------+ ")
console.log("                                          ")
console.log("     Voce esta em --->  Assentos          ")
console.log("                                          ")   
console.log("----------------------------------------- ")
console.log("A1 A2 x A4  A5 A6 A7 A8 x A10 A11 A12     ")
console.log("B1 B2 B3 B4 B5 x B7 B8 B9 B10 B11 B12     ")
console.log("----------------------------------------- ")
}
else if(escolha==4){
var Nome=readine.question("Nome:")
var SobreNome=readine.question("Sobrenome:")
var Idade=readine.question("Idade:")
var Origem=readine.question("Origem:")
var Destino=readine.question("Destinatario:")
console.log("+----------- Passagens Aereas ----------+ ")
console.log("")
console.log("**********************************************")
console.log("*       OBRIGADO PELA PREFERÊNCIA            *")
console.log("*                                            *")
console.log("* Cliente: "+Nome+" "+SobreNome+"            *")
console.log("* idade: "+Idade+"    Assento: B6            *")
console.log("* Origem/Destino: "+Origem+" > "+ Destino+"  *")
console.log("*      Status do Voo: confirmado             *")
console.log("*                                            *")
console.log("**********************************************")
} 
else if(escolha==0){

     console.log("encerrar os serviços")
    
    }
