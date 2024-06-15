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
            }
            if(batalhar === 1){
                let atacar = Number(prompt(`[1] Bater\n[2] Magia\n[3] Voltar`))

                if(atacar === 1){
                    danoPlayer = 6 + jogador.forca - ini.def
                    danoIni = 6 + ini.forca - jogador.def
                    taxaDano = Math.floor(Math.random()*danoPlayer)
                    taxaIni = Math.floor(Math.random()*danoIni)
    
                    if(taxaDano > danoPlayer/ini.des){
                        ini.hp -= danoPlayer
                    }
                    if(taxaIni > danoIni/jogador.des){
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
                }
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
            }else if(jogador.hp <= 0){
                console.clear()
                console.log(`\n\n Vida ${jogador.nome}: 0\n =========================\n Vida ${ini.nome}: ${ini.hp}`)
                alert(`===============Game Over!!===============`)
                alert(`=============Tente novamente=============`)
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

function status (){
    let sta = `==================jogador===================
    nome: ${jogador.nome}
    lvl: ${jogador.lvl}
    classe: ${jogador.classe}
    hp: ${jogador.hp}
    forca: ${jogador.forca}
    def: ${jogador.def}
    mag: ${jogador.mag}
    des: ${jogador.des}
    xp: ${jogador.xp}`
    return sta
}

function inventario(inventario){
    let ordem
    for(let x in inventario){
        if(inventario[x] === inventario[0]){
            ordem = `[${Number(x)+1}] ${inventario[x].nome}`
        }else if(inventario[x] !== inventario[0]){
            ordem += `\n[${Number(x)+1}] ${inventario[x].nome}`
        }
    }
    return ordem
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

function desEquip(desequip){
    let parte = ["Capacete","Peitoral","Calça","Bota", "Arma"]
    jogador.inventario.push(equipamento[desequip])

    if(parte[desequip] != parte[parte.length-1]){
        alert(equipamento[desequip].nome)
            jogador.def -= equipamento[desequip].def
            equipamento[desequip] = parte[desequip]
    }else{
        if(jogador.inventario[desequip].atacar){

            jogador.atacar -= equipamento[desequip].atacar
            equipamento[desequip] = parte[desequip]

        }else if(jogador.inventario[desequip].mag){

            jogador.mag -= equipamento[desequip].mag
            equipamento[desequip] = parte[desequip]
        }
    }

    return equipamento[desequip]
}

function equipar(jog, indice){
    let jogClasse
    let compararParte = ["Capacete","Peitoral","Calça","Bota","Arma"]
    let pegarIndice = [1,2,3,4,5]
    let indiceEquip 

    for(let x in pegarIndice){
        if(compararParte[Number(x)]===jog[indice].classe){
            indiceEquip = Number(x)
        }
    }

    if(jog[indice].mag){
        jogClasse = `mag`
    }else{
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
                jogador[jogClasse] += equipamento[indiceEquip][jogClasse]
                jog.splice(indice, 1)
            }else{
                jog.push(equipamento[indiceEquip])
                jogador[jogClasse] -= equipamento[indiceEquip][jogClasse]
                equipamento.splice(0,1)
                equipamento[indiceEquip] = jog[indice]
                jogador[jogClasse] += equipamento[indiceEquip][jogClasse]
                jog.splice(indice, 1)
            }
        }
    }
    return equipamento[indiceEquip]
}

function jogXp (){
    let restrixp = 100
    let subirStats = 2
    if(jogador.xp === restrixp){
        jogador.lvl += 1
        restrixp += 50
        jogador.xp = 0
        if(jogador.lvl === subirStats){
            jogador.forca += 3
            jogador.hp += 3
            jogador.mag += 3
            jogador.def += 3
            jogador.des += 3
            subirStats += 1
        }
    }
    return jogador.lvl
}

function drops (ini){
    alert(`Recebe:\n====> +${ini.xp}`)
    jogador.xp += ini.xp
    jogXp()
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
moedas: {ouro: 2, prata: 15, cobre: 30}

}

let itens = [chapeuDeMago = {
        nome: "chapeu de mago", 
        classe: "Capacete",
        def: 2
    },chapeu = {
        nome: "chapeu", 
        classe: "Capacete",
        def: 2
    },varinha = {
        nome: "Varinha", 
        classe: "Arma",
        mag: 15
    },livro = {
        nome: "Livro"
    },]

let inimigos =[rato={
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
}]

let equipamento = ['Capacete', 'Peitoral', 'Calça', 'Bota', 'Arma']//Guarda os itens do jogo
let lixo = []
let acao//Para as açoes
let inimigosMortos = 0
let sair
let item//para guardar um item

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
        jogador.inventario = [itens[2], itens[0], itens[1], itens[3]]
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
    classe: ${jogador.classe}
    hp: ${jogador.hp}
    forca: ${jogador.forca}
    def: ${jogador.def}
    mag: ${jogador.mag}
    des: ${jogador.des}
    inventario: \n${inventario(jogador.inventario)}
     `)//Imprimir o jogador

do{
    acao = Number(prompt("Faça uma ação:\n[1] Prosseguir\n[2] Inventário\n[3] Equipamentos\n[4] Status\n[5] Sair"))
    console.clear()
    
    
    if(acao === 1){
        if(inimigos[inimigosMortos].hp <= 0){//prosseguir para batalhas
            inimigosMortos += 1
        }
        batalha(inimigos[inimigosMortos]) 

    }else if(acao === 2){
        console.log(`Inventário:\n${inventario(jogador.inventario)}`)//Motra o inventário e os equipamentos equipados
        item = Number(prompt(`Inventário:\n${inventario(jogador.inventario)}`)) - 1
        if(jogador.inventario[item]){
            acao = Number(prompt("[1] Equipar\n[2] Vender"))
            if(acao === 1){
                equipar(jogador.inventario, item)
            }
        }       
    }else if(acao === 3){
        let desequipNu = Number(prompt(`Equipamentos:\n${equipamentos(equipamento)}`))-1

        if(desequipNu <= 4 && desequipNu !== toString(desequipNu)){
            let desequip
            desequip = Number(prompt(`============> Desequipar <============\n\n[1] Sim\n[2] Não`))
            if(desequip === 1){
                desEquip(desequipNu)
            }else{
                acao = undefined
            }
        }
    }else if(acao === 4){
        alert(status())

    }else if(acao === 5){
        sair = Number(prompt(`[1] Recomeçar\n[2] Parar Jogo`))
        if(sair === 1){
            window.location.reload()
        }
    }
}while(acao === undefined || batalha() === undefined && sair !== 2 && sair !== 1)