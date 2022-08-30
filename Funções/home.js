function parImp(n) {
    if(parImp % 2 == 0) {
        return 'Par'
    }else{
        return 'Ímpar'
    }
}
let res = parImp(50)
console.log(`O resultado é ${res}. `)