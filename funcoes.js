
export function criarFila(tamanho=2) {
    return [...new Array(tamanho)]
    }
    
    export function InserirNaFila(fila = [], item) {
        if (fila.includes(undefined)) {
            fila[fila.indexOf(undefined)] = item
            return
        }
        console.log("fila cheia");
        return
    }
    export function removerDaFila(fila = []) {
    if (fila[0] === undefined) {
    console.log("fila vazia");
    return
    }
    let primeiroLugar = fila[0]
    for (let i = 0; i < fila.length -1; i++) {
    fila[i] = fila[i+1]
    }
    fila[fila.length -1] = undefined
    console.log(primeiroLugar);
    return primeiroLugar
    }
    export function DeletarFila(fila=[]) {
    if (fila[0] === undefined) {
    console.log("a fila ja esta vazia");
    return
    }
    let primeiro = fila[0]
    for (let i = 0; i < fila.length; i++) {
    fila[i]=undefined
    }
    fila[0]= primeiro
    }

    export function verTamanhoFila(fila = [1]){
        let emptySpaces = (fila, length - fila.indexOf(undefined))
        let usedSpaces = emptySpaces
        let size = fila.length
        let subQueue = [1]
        for (let i = 0; i < fila. indexOf (undefined); i++){
        subQueue [il = fila[i]]
        }
        console. log( fila,
        {
        "emptySpaces": emptySpaces,
        "usedSpaces": usedSpaces,
        "size": size,
        "subQueue": subQueue,
        }
        )
        }
    
