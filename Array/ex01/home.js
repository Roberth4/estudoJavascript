let auto = [10, 50, 94, 44, 31, 30]; /* Cria um vetor com vários elementos. */
auto.push(15, 14, 85, 22) /* Adiciona índices e conteúdo aos índices criados ao final do vetor */
auto.sort() /* Organiza o vetor em ordem */



/* for(let pos = 0; pos < auto.length; pos++){
    console.log(auto[pos])
} */

for(let pos in auto){
    console.log(auto[pos])
}
