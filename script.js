let comecar = Number(prompt(`Começar\n[1] Sim\n[2] Sim`))

if(comecar === 1){
function batalha (ini){//função batalha
    let batalhar
    let danoPlayer
    let danoIni 
    let taxaDano 
    let taxaIni 

    if(ini){
        console.clear()
        console.log(`\n\n Vida ${jogador.nome}: ${jogador.hp}\n =========================\n Vida ${ini.nome}: ${ini.hp}`)
        alert(`Você enconta ${ini.nome}`)
        
        while(jogador.hp > 0 && ini.hp > 0 && batalhar !== 2){
            if(batalhar === undefined){
                batalhar = Number(prompt(`Em batalha:\n[1] Atacar\n[2] Fugir`))
            } else if(batalhar === 1){
                let atacar = Number(prompt(`[1] Bater\n[2] Magia\n[3] Voltar`))

                if(atacar === 1){
                    danoPlayer = 6 + jogador.forca - ini.def
                    danoIni = 6 + ini.forca - jogador.def
                    taxaDano = Math.floor(Math.random()*danoPlayer)
                    taxaIni = Math.floor(Math.random()*danoIni)
    
                    if(taxaDano > danoPlayer - ini.des){
                        ini.hp -= danoPlayer
                    }
                    if(taxaIni > danoIni - jogador.des){
                        jogador.hp -= danoIni
                    }
                }else if(atacar === 2){
                    if(jogador.classe !== "Guerreiro"){
                        danoPlayer = 5 + jogador.mag - ini.def
                        danoIni = 5 + ini.mag - jogador.def
                        taxaDano = Math.floor(Math.random()*danoPlayer)
                        taxaIni = Math.floor(Math.random()*danoIni)

                        if(taxaDano > danoPlayer/ini.des){
                            ini.hp -= danoPlayer
                        }
                        if(taxaIni > danoIni/jogador.des){
                            jogador.hp -= danoIni
                        }
                    }
                    if(jogador.classe === "Guerreiro"){
                        alert("Você não pode usar magia")
                    }
                } else if(atacar === 3){
                    batalhar = undefined

                } else {
                    batalhar = undefined

                }
            } else {
                batalhar = 2
            }

            if(jogador.hp > 0 && ini.hp > 0){
                console.clear()
                console.log(`\n\n Vida ${jogador.nome}: ${jogador.hp}\n =========================\n Vida ${ini.nome}: ${ini.hp}`)
            }else if(ini.hp <= 0){
                console.clear()
                console.log(`\n\n Vida ${jogador.nome}: ${jogador.hp}\n =========================\n Vida ${ini.nome}: 0`)
                alert(`Você venceu!!`)
                acao = undefined
                console.clear()
                drops(ini)
                if(inimigos[inimigosMortos].hp <= 0){//prosseguir para batalhas
                    inimigosMortos += 1
                }
            }else if(jogador.hp <= 0){
                console.clear()
                console.log(`\n\n Vida ${jogador.nome}: 0\n =========================\n Vida ${ini.nome}: ${ini.hp}`)
                alert(`===============Game Over!!===============`)
                alert(`=============Tente novamente=============`)
                sair = 1
                window.location.reload()
            }
        }
        if(batalhar === 2){
            alert(`-------Você fugiu-------`)
            console.clear()
            acao = undefined
            return acao
        }
    }
}

function itensMonstros(ini){

}

function statu (xpM){
    let sta = `==================jogador===================
    nome: ${jogador.nome}
    lvl: ${jogador.lvl}
    classe: ${jogador.classe}
    hp: ${jogador.hp}
    forca: ${jogador.forca}
    def: ${jogador.def}
    mag: ${jogador.mag}
    des: ${jogador.des}
    xp: ${jogador.xp}/${xpM}`
    return sta
}

function inventario(inventario){
    let ordem
    
    for(let x in inventario){

        if(Number(x) === 0){
            if(inventario[x].quantidade){
                ordem = `[${Number(x)+1}] ${inventario[x].nome} ==> ${inventario[x].quantidade}`
            }else{
                ordem = `[${Number(x)+1}] ${inventario[x].nome}`
            }
        }else{
            if(inventario[x].quantidade){
                ordem += `\n[${Number(x)+1}] ${inventario[x].nome} ==> ${inventario[x].quantidade}`
            }else{
                ordem += `\n[${Number(x)+1}] ${inventario[x].nome}`
            }
        }
    }
    return ordem
}

function desEquip(desequip){
    let parte = ["Capacete","Peitoral","Calça","Bota", "Arma"]
    let jogClasse
    
    if(equipamento[desequip] !== parte[desequip]){
        if(parte[desequip] !== parte[parte.length-1]){
            jogador.inventario.push(equipamento[desequip])
                jogador.def -= equipamento[desequip].def
                equipamento[desequip] = parte[desequip]
        }else{
            jogador.inventario.push(equipamento[desequip])
            if(parte[desequip] === parte[parte.length-1]){
                if(equipamento[Number(desequip)].mag){
                    jogClasse = `mag`
                }else{
                    jogClasse = `forca`
                }
            }

            if(equipamento[desequip][jogClasse]){

                jogador[jogClasse]-= equipamento[desequip][jogClasse]
                equipamento[desequip] = parte[desequip]

            }
        }
    }
    return equipamento[desequip]
}

function equipamentos(equipa){
    let ordem
    let classes = ["Capacete","Peitoral","Calça","Bota","Arma"]
    let localEquip = [1,2,3,4,5]
    
    for(let x in localEquip){
        localEquip[Number(x)] = equipa[Number(x)]
        if(equipamento[Number(x)].classe){
            if(localEquip[Number(x)] === localEquip[0]){
                ordem = `[${Number(x)+1}] [${classes[Number(x)]}]====> <${localEquip[Number(x)].nome}>`
            }else if(localEquip[x] !== localEquip[0]){
                ordem += `\n[${Number(x)+1}] [${classes[Number(x)]}]====> <${localEquip[Number(x)].nome}>`
            }
        }else if(equipa[Number(x)] !== equipa.classe){
            
            if(localEquip[Number(x)] === localEquip[0]){
                ordem = `[${Number(x)+1}] [${classes[Number(x)]}]====> <${localEquip[Number(x)]}>`
            }else if(localEquip[x] !== localEquip[0]){
                ordem += `\n[${Number(x)+1}] [${classes[Number(x)]}]====> <${localEquip[Number(x)]}>`
            }
        }
    }
    return ordem
}

function equipar(jog, indice){
    let jogClasse
    let itenclasse
    let compararParte = ["Capacete","Peitoral","Calça","Bota","Arma", "Poção"]
    let pegarIndice = [1,2,3,4,5]
    let indiceEquip 

    for(let x in pegarIndice){
        if(compararParte[Number(x)]===jog[indice].classe){
            indiceEquip = Number(x)
        }
    }

    if(jog[indice].mag){
        itenclasse = `mag`
        jogClasse = `mag`
    }else{
        itenclasse = `ataque`
        jogClasse = `forca`
    }

    if(indiceEquip !== toString && indiceEquip <=3){
        for(let x in compararParte){
            if(jog[indice].classe === compararParte[x]){
                if(equipamento[indiceEquip].classe !== compararParte[x]){
                    equipamento[indiceEquip] = jog[indice]
                    jogador.def += equipamento[indiceEquip].def
                    jog.splice(indice, 1)
                }else{
                    jog.push(equipamento[indiceEquip])
                    jogador.def -= equipamento[indiceEquip].def
                    equipamento[indiceEquip] = jog[indice]
                    jogador.def += equipamento[indiceEquip].def
                    jog.splice(indice, 1)
                }
            }
        }
    }else if(indiceEquip === 4){
        if(jog[indice].classe === "Arma"){
            if(equipamento[indiceEquip].classe !== "Arma"){
                equipamento[indiceEquip] = jog[indice]
                jogador[jogClasse] += equipamento[indiceEquip][itenclasse]
                jog.splice(indice, 1)
            }else{
                jog.push(equipamento[indiceEquip])
                jogador[jogClasse] -= equipamento[indiceEquip][itenclasse]
                equipamento.splice(0,1)
                equipamento[indiceEquip] = jog[indice]
                jogador[jogClasse] += equipamento[indiceEquip][itenclasse]
                jog.splice(indice, 1)
            }
        }
    }
    return equipamento[indiceEquip]
}

function loja (itens){
    let valAle    

    if(inimigosMortos === lojaIni || umaVez === 1){
        for(let x in lojaItens){
            lojaItens.shift()
            lojaItens.pop()
        }
        lojaItens.pop()

        do{
            valAle = Math.floor(Math.random()*itens.length)
            
            if(lojaItens[0] === undefined){
                lojaItens.push(valAle)
            }else{
                for(let x in lojaItens){
                    if(lojaItens.includes(valAle) === false){
                        lojaItens.push(valAle)
                    } 
                }
            }
        }while(lojaItens.length-1 < 4)
            lojaIni += 5
            umaVez = null
    }
    let ordem
    for(let x in lojaItens){
        if(lojaItens[x] === lojaItens[0]){
            ordem = `[${Number(x)+1}] ${itens[lojaItens[x]].nome} ==> Preço: ${itens[lojaItens[x]].valor}`
        }else if(lojaItens[x] !== lojaItens[0]){
            ordem += `\n[${Number(x)+1}] ${itens[lojaItens[x]].nome} ==> Preço: ${itens[lojaItens[x]].valor}`
        }
    }
    return ordem
}

function comprar (item, quatidade){
    if(jogador.dinheiro > 0){
        if(itens[lojaItens[item]].quantidade){
            for(let x =0; x < quatidade; x++){
                if(jogador.inventario.includes(lojaItens[item])){
                    jogador.inventario[lojaItens[item]].quantidade += x
                    jogador.dinheiro -= itens[lojaItens[item]].valor
                }else{
                    jogador.inventario.push(itens[lojaItens[item]])
                }
            }
        }else{
            for(let x =0; x < quatidade; x++){
                if(jogador.dinheiro > 0 && jogador.dinheiro >= itens[lojaItens[item]].valor){
                    jogador.inventario.push(itens[lojaItens[item]])
                    jogador.dinheiro -= itens[lojaItens[item]].valor
                } else {
                    alert(`Não há dinheiro o suficiente.`)
                    x = quatidade
                }
            }
        }
    } else {
        alert(`Não há dinheiro o suficiente.`)
        acao = undefined
    }
    inventario()
    return jogador.inventario
}

function vender(itemInven){
    if(jogador.inventario[itemInven].quantidade){
        let venderQuantia = Number(prompt(`Quantos?`))
        if(venderQuantia > 0){
            while(venderQuantia > 0 &&jogador.inventario[itemInven].quantidade > 0){
                jogador.inventario[itemInven].quantidade -= 1
                jogador.dinheiro += jogador.inventario[itemInven].valor
                venderQuantia -= 1
            }
            if(jogador.inventario[itemInven].quantidade === 0){
                jogador.inventario.splice(itemInven, 1)
            }
        }
    } else{
        jogador.dinheiro += jogador.inventario[itemInven].valor
        jogador.inventario.splice(itemInven, 1)
    }
   return jogador 
}

function pocao (){

}

function jogXp (){

    if(jogador.xp >= xpMaximo){
        jogador.lvl += 1
        jogador.xp -= xpMaximo
        xpMaximo += 50
        
        if(jogador.lvl === subirStats){
            jogador.forca += 3
            jogador.hp += 3
            jogador.mag += 3
            jogador.def += 3
            jogador.des += 3
            subirStats += 1
        }
    }
    return xpMaximo
}

function drops (ini){
    alert(`Recebe:\n====> +${ini.xp}`)
    jogador.xp += ini.xp
    jogXp(xpMaximo)
    return jogador.xp
}

let jogador = {//base para o jogador
nome: "",
lvl: 1,
classe: "",
hp: 10,
forca: 0, 
def: 0,
mag: 0,
des: 0,
inventario: [],
xp: 0,
dinheiro: 100
}

let itens = [
    chapeuDeMago = {
        nome: "chapeu de mago", 
        classe: "Capacete",
        def: 2,
        valor: 10
    },
    chapeu = {
        nome: "chapeu", 
        classe: "Capacete",
        def: 2,
        valor: 5
    },
    varinha = {
        nome: "Varinha", 
        classe: "Arma",
        mag: Number(15),
        valor: 15
    },
    livro = {
        nome: "Livro",
        valor: 5
    },
    espada = {
        nome: "espada",
        classe: "Arma",
        ataque: Number(20),
        valor: 15
    },
    marreta = {
        nome: "Marreta",
        classe: "Arma",
        ataque: Number(20),
        valor: 15
    },
    pocaodevida = {
        nome: "Poção de vida",
        classe: "Poção",
        cura: 5,
        valor: 5,
        quantidade: 5
    },]

let inimigos =[
rato={
    nome:"Mestre Splinter",
    hp: 15,
    forca: 5,
    def: 5,
    des: 5,
    drops:[],
    xp: 50
}, 
Pato={
    nome:"Ganso",
    hp: 15,
    forca: 5,
    def: 5,
    des: 5,
    drops:[],
    xp: 50
},goblin={
    nome:"Goblin",
    hp: 15,
    forca: 5,
    def: 5,
    des: 5,
    drops:[],
    xp: 50
},lobo={
    nome:"Lobo Pidão",
    hp: 15,
    forca: 5,
    def: 5,
    des: 5,
    drops:[],
    xp: 50
},atumalaca={
    nome:"Atumalaca",
    hp: 50,
    forca: 15,
    def: 10,
    des: 10,
    drops:[],
    xp: 150
}]


let equipamento = ['Capacete', 'Peitoral', 'Calça', 'Bota', 'Arma']//Guarda os itens do jogo
let lixo = []
let acao//Para as açoes
let inimigosMortos = 0
let sair
let item//para guardar um item
let xpMaximo = 100
let subirStats = 2
let umaVez = 1
let lojaItens = []
let lojaIni = 0


console.log("===Bem vindo(a)=====\nVamos criar seu personagem.")//Boas vindas


jogador.nome = prompt("Primeiro, qual seu nome?")//Nome


console.log("Agora, vamos escolher a sua classe.\n[1] Mago:\n[2] Arqueiro\n[3] Guerreiro\n[4] Bardo")//mostrar as classes

let esc = Number(prompt("Digite o número da classe escolhida:\n[1] Mago\n[2] Arqueiro\n[3] Guerreiro\n[4] Bardo"))//escolher as classes
switch(esc){
    case 1:
        jogador.classe = "Mago"
        jogador.hp = jogador.hp+10
        jogador.forca = jogador.forca+5
        jogador.def = jogador.def+7
        jogador.mag = jogador.mag+20
        jogador.des = jogador.des+3
        jogador.inventario = [itens[2], itens[0], itens[1], itens[3], itens[6]]
        break
    case 2:
        jogador.classe = "Arqueiro"
        jogador.hp = jogador.hp+12
        jogador.forca = jogador.forca+8
        jogador.def = jogador.def+8
        jogador.mag = jogador.mag+5
        jogador.des = jogador.des+20
        jogador.inventario = ["arco", "aljava", "chapéu de arqueiro"]
        break
    case 3:
        jogador.classe = "Guerreiro"
        jogador.hp = jogador.hp+20
        jogador.forca = jogador.forca+15
        jogador.def = jogador.def+10
        jogador.mag = jogador.mag+0
        jogador.des = jogador.des+2
        jogador.inventario = ["espada", "escudo", "chapéu de guerreiro"]
        break
    case 4:
        jogador.classe = "Bardo"
        jogador.hp = jogador.hp+15
        jogador.forca = jogador.forca+5
        jogador.def = jogador.def+10
        jogador.mag = jogador.mag+16
        jogador.des = jogador.des+8
        jogador.inventario = ["flauta", "gaita", "chapéu de bardo", "alaude", "triângulo", "ratos"]
        break
    default:
        console.log("Indigente")
        jogador.classe =
        jogador.hp =
        jogador.forca =
        jogador.def =
        jogador.mag =
        jogador.inventario = []
}
console.clear()
console.log(`==================jogador===================
    nome: ${jogador.nome}
    lvl: ${jogador.lvl}
    classe: ${jogador.classe}
    hp: ${jogador.hp}
    forca: ${jogador.forca}
    def: ${jogador.def}
    mag: ${jogador.mag}
    des: ${jogador.des}
    xp: ${jogXp()}
    inventario: \n${inventario(jogador.inventario)}
     `)//Imprimir o jogador

do{
    acao = Number(prompt("Faça uma ação:\n[1] Prosseguir\n[2] Inventário\n[3] Equipamentos\n[4] Status\n[5] loja\n[6] Sair"))
    console.clear()
    
    
    if(acao === 1){
        
        batalha(inimigos[inimigosMortos]) 

    }else if(acao === 2){
        console.log(`Inventário:\n${inventario(jogador.inventario)}`)//Motra o inventário e os equipamentos equipados
        item = Number(prompt(`Inventário:\n${inventario(jogador.inventario)}`)) - 1
        
        if(jogador.inventario[item]){
            if(jogador.inventario[item].classe === "Poção"){
                acao = Number(prompt("[1] Vender"))+1
            }else{
                acao = Number(prompt("[1] Equipar\n[2] Vender"))
            }
            if(acao === 1 && jogador.inventario[item].classe !== "Poção"){
                equipar(jogador.inventario, item)
            }else if(acao === 2){
                vender(item)
            }
        }       
    }else if(acao === 3){
        let desequipNu = Number(prompt(`Equipamentos:\n${equipamentos(equipamento)}`))-1
        if(equipamento[desequipNu]){
            let desequip
            desequip = Number(prompt(`============> Desequipar <============\n\n[1] Sim\n[2] Não`))
            if(desequip === 1){
                desEquip(desequipNu)
            }else{
                acao = undefined
            }
        }
    }else if(acao === 4){
        alert(statu(xpMaximo))

    }else if(acao === 5){
        let compra = Number(prompt(`Comprar:\n${loja(itens)}\n============Dinheiro: ${jogador.dinheiro}=======`))-1
        if(itens[lojaItens[compra]]){
            let quantia = Number(prompt(`Quntos?`))
            comprar(compra, quantia)
        }

    }else if(acao === 6){
        sair = Number(prompt(`[1] Recomeçar\n[2] Parar Jogo`))
        if(sair === 1){
            window.location.reload()
        }
    }
}while(acao === undefined || batalha() === undefined && sair !== 2 && sair !== 1)
}