/* Variável contador.*/
let c = 1


/* Apenas a estrutura de repetição simples. com o WHILE assumindo o "enquanto"  / ESTRUTURA DE REPETIÇÃO COM /TESTE LÓGICO NO INICIO*/
while (c < 6){ 
    console.log('Tudo bem?')
    c++
}
console.log('Sim, estou bem!')


/* Estutura de repetição "invertida" com o DO assumindo o "faça". / ESTRUTURA DE REPETIÇÃO COM TESTE LÓGICO NO FINAL. */
do{
    console.log('Tudo bem?')
    c++
}while (c <= 6)
console.log('Sim, estou bem!')

/* A mesma coisa que as anteriores sem a estrutura de repetição, sendo escrita manualmente. */
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Sim, estou bem!')

/*Estrutura de repetição com inicio; teste; incremento. diretamente na estrutura */
for (let c = 1; c <= 6; c++){
    console.log('Olá, tudo bem?')
}
console.log('Estou bem!')