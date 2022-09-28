
var c1 = {
   nome:"Rebecca Chambers",
   imagem: "imagens/rebecca.jpeg",
   atributos: {
      ataque: 8 ,
      agilidade: 10 ,
      defesa: 6
   }
};
var c2 = {
   nome:"Ada Wong",
   imagem: "imagens/ada.jpeg",
   atributos: {
      ataque: 9,
      agilidade: 10,
      defesa: 9
   }
};
var c3 = { 
    nome: "Leon S. Kennedy",
imagem:"imagens/leon.jpeg",
    atributos: {
        ataque: 7,
        agilidade: 10,
        defesa: 8
    }
  };
  
var c4 = {
   nome: "Jill Valentine" ,
   imagem: "imagens/jill.png" ,
   atributos: {
      ataque: 8,
      agilidade: 10,
      defesa: 7
   }
};
var c5 = {
   nome: "Chris Redfield",
   imagem: "imagens/chris.jpeg" ,
   atributos: {
      ataque: 10,
      agilidade: 5,
      defesa: 9
   }
};
var c6 = {
   nome: "Hunk",
   imagem: "imagens/hunk.jpeg",
   atributos: {
       ataque: 10 ,
       agilidade: 4 ,
       defesa: 9
   }
};
var c7 = {
   nome:"Vector",
   imagem: "imagens/vector.jpeg",
   atributos: {
      ataque: 8,
      agilidade: 10,
      defesa: 10
   }
};
var c8 = {
   nome: "Albert Wesker",
   imagem: "imagens/wesker.jpeg" ,
   atributos: {
      ataque: 11,
      agilidade: 9,
      defesa: 10
   }
};
var c9 = {
   nome: "Sherry Birkin",
   imagem: "imagens/sherry.jpeg" ,
   atributos: {
      ataque: 9 ,
      agilidade: 10 ,
      defesa: 8
   }
};
var c10 = {
   nome: "Jake Muller" ,
   imagem: "imagens/jake.jpeg",
   atributos: {
      ataque: 10,
      agilidade: 8,
      defesa: 8
   }
};
var c11 = {
   nome: "Luiz Sera" ,
   imagem: "imagens/luiz.jpeg",
   atributos: {
      ataque: 8 ,
      agilidade: 7 ,
      defesa: 6
   }
};
var c12 = {
   nome: "Barry Burton",
   imagem: "imagens/barry.jpeg",
   atributos: {
      ataque: 9 ,
      agilidade: 6 ,
      defesa: 8
   }
};

var c13 = {
    nome: "Mikhail Victor",
    imagem: "imagens/mikhail.jpg",
    atributos: {
        ataque: 9,
        agilidade: 5 ,
        defesa: 8
    }
};

var c14 = {
    nome: "Moira Burton",
    imagem: "imagens/moira.jpg",
    atributos: {
        ataque: 6,
        agilidade: 10 ,
        defesa: 6
    }
};

var c15 = {
    nome: "Claire Redfield",
    imagem: "imagens/claire_.jpg",
    atributos: {
        ataque: 9,
        agilidade: 9 ,
        defesa: 7
    }
};

var c16 = {
    nome: "Carlos Oliveira",
    imagem: "imagens/carlos.jpeg",
    atributos: {
        ataque: 8,
        agilidade: 6 ,
        defesa: 9
    }
};
var c17 = {
    nome: "Ethan Winters",
    imagem: "imagens/ethan.jpg",
    atributos: {
        ataque: 6,
        agilidade: 7 ,
        defesa: 9
    }
};
var c18 = {
    nome: "Helena Harper",
    imagem: "imagens/helena.jpeg",
    atributos: {
        ataque: 8,
        agilidade: 7 ,
        defesa: 9
    }
};
var c19 = {
    nome: "Parker Luciano",
    imagem: "imagens/parker.jpg",
    atributos: {
        ataque: 7,
        agilidade: 4 ,
        defesa: 9
    }
};
var c20 = {
    nome: "Piers Nivans",
    imagem: "imagens/piers.jpeg",
    atributos: {
        ataque: 8,
        agilidade: 7 ,
        defesa: 7
    }
};

var c21 = {
    nome: "Rocket Launcher",
    imagem: "imagens/bazooka.jpg",
    atributos: {
        ataque: 100,
        agilidade: 0 ,
        defesa: 0
    }
};



var cartas = [c1,c2,c3,c4,c5,c6,c7,c8
,c9,c10,c11,c12, c13,c14,c15,c16,c17,c18,
c19,c20, c21]

var jogador
var maquina



//FUNÇÃO DE SORTEAR CARTA
function sortear(){
   var sortMaquina = parseInt(Math.random() * cartas.length)         
   maquina = cartas[20]
   
   var sortJogador = parseInt(Math.random() * cartas.length)     
   while( sortMaquina == sortJogador){
      sortJogador = parseInt(Math.random() * cartas.length)         
   }
   
   jogador = cartas[sortJogador]
   
   document.getElementById("jogar").disabled = false;
   document.getElementById("jogar").style.transform = "scale(1)"
   
   exibirCartaJogador(jogador) 
   exibirCartaMaquina(maquina)
    document.getElementById("sortear").disabled = true;
document.getElementById("sortear").style.transform = "scale(0.8, 0.8)"
}





//EXIBIR CARTA DO JOGADOR
function exibirCartaJogador(cartaJ){

   var obj_p = document.getElementById("frente_p")

var elementop = ""

elementop += "<img id='image_carta' src='"
elementop += cartaJ.imagem + "' alt=''/>"
elementop += "<div id='atr'>"
elementop += "<h5>"+cartaJ.nome+"</h5>"
elementop += "<div>"

   for(var atributo in cartaJ.atributos){
      
      elementop += "<input id='rad'name='radios' type='radio' value='"+ atributo +"'>"+ atributo + ": " + cartaJ.atributos[atributo] + "<br/>"
      
   }

elementop += "</div></div>"

obj_p.innerHTML += elementop 


document.getElementById("ct_p").classList.add("elevarCarta")

document.getElementById("flip_p").style.transform = "rotateY(180deg)"



if(cartaJ.nome == cartas[7].nome){
  document.getElementById("ct_p").classList.add("brilho")
    document.getElementById("flip_p").style.animation = "lendaria 2s infinite"
    
} 
else if(cartaJ.nome == cartas[20].nome)
{
     document.getElementById("ct_p").classList.add("brilho")
    document.getElementById("flip_p").style.animation = "lendaria 2s infinite"
    
}


}




//EXIBIR CARTA DA MAQUINA
function exibirCartaMaquina(cartaM){
   
   var obj_m = document.getElementById("frente_m")

var elementom = ""

elementom += "<img id='image_carta' src='"
elementom += cartaM.imagem + "' alt=''/>"
elementom += "<div id='atr'>"
elementom += "<h5>"+cartaM.nome+"</h5>"
elementom += "<div>"

   for(var atributo in cartaM.atributos){
      
      elementom += "<p>" + atributo + ": " + cartaM.atributos[atributo] + "</p>"
      
   }

elementom += "</div></div>"

obj_m.innerHTML += elementom

   
}




//OBTER OPÇÃO MARCADA PELO USUARIO
function obterEscolha(){
   
   var radio = document.getElementsByName("radios")
   
  var rand = parseInt(Math.random() * 3)
   for(var i = 0; i < radio.length; i++){
     
      if(radio[i].checked == true){
         return radio[i].value;
      }else if(radio.checked == false){
         radio[rand].checked = true
         return radio[rand].value
      }      
   }   
}





var jogou = false;

// FUNÇÃO JOGAR
function jogar()
{
   var op = obterEscolha()
   var result = document.getElementById("res")
   //console.log(jogador.atributos[op])
  
   if(op != null){
   
   if(jogador.atributos[op] > maquina.atributos[op]){
      result.innerHTML = "VOCÊ GANHOU!"
   } 
   else if(jogador.atributos[op] <
      maquina.atributos[op]){
      result.innerHTML = "VOCÊ PERDEU!"
   }else{
      result.innerHTML = "EMPATOU!"
   }
   
   jogou = true;

    document.getElementById("jogar").disabled = true
    document.getElementById("jogar").style.transform = "scale(0.8, 0.8)"
  
  
    document.getElementById("ct_m").classList.add("elevarCarta")
    document.getElementById("flip_m").style.transform = "rotateY(180deg)"
   
    document.getElementById("resultado").style.opacity = "1"
    document.getElementById("resultado").style.transform = "scale(1, 1)" 


if(maquina.nome == cartas[7].nome){
  
    document.getElementById("ct_m").classList.add("brilho")
    document.getElementById("flip_m").style.animation = "lendaria 2s infinite"
   
} 
else if(maquina.nome == cartas[20].nome){
    document.getElementById("ct_m").classList.add("brilho")
    document.getElementById("flip_m").style.animation = "lendaria 2s infinite"
   
}

}

}



// RECARREGAR JOGO
function reload(){
   
   if(jogou == true){           
      document.getElementById("flip_m").style.transform = "rotateY(0)"            
      document.getElementById("flip_p").style.transform = "rotateY(0)"  
         
      document.getElementById("frente_m").innerHTML = ""
      document.getElementById("frente_p").innerHTML = ""
      document.getElementById("sortear").disabled = false;
      document.getElementById("sortear").style.transform = "scale(1, 1)"
      document.getElementById("jogar").style.transform = "scale(0.8)"
      document.getElementById("resultado").style.transform = "scale(0)"
      document.getElementById("resultado").style.opacity = "0"
     
      document.getElementById("ct_p").classList.remove("elevarCarta")
      document.getElementById("ct_m").classList.remove("elevarCarta") 

      document.getElementById("ct_p").classList.remove("brilho")

      document.getElementById("ct_m").classList.remove("brilho")

      document.getElementById("flip_p").style.animation = "none"

      document.getElementById("flip_m").style.animation = "none"



   }
   
}
