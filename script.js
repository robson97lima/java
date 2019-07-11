//console.log('Hello Word');
//let nomeDoUsuario = prompt('Qual o seu nome?')
//let idade = prompt('Quantos anos você tem?')
//let progamador = confirm('Você é um programados')

//console.log('Olá ' +nomeDoUsuario);
//alert('Ola ' + nomeDoUsuario + ', você tem ' +idade + 'anos.')
//Console.log(idade);
//console.log(vivo);
//if(progamador){
    //alert('Você é um programador, Parabéns!')}
//else if(Number(idade)>=16 && Number(idade)<= 25){
    //alert('Que pena, você já ouviu falar da estação Hack?');}
//else{
    //alert('Que pena, você deveria aprender JavaScript, ele é muito legal.');}
    //let nomeDoUsuario = prompt('Qual o seu nome?')
    //let Materia = prompt('Você é essa materia?')
    //let Nota = prompt('Qual a sua nota?')
    //let media = 6

    //if (Number(Nota)>= media) {
    //alert('Parabéns!, você passou de ano')}
    //else if(Number(Nota)>= media - 0.5){
        //alert('Passou pelo sistema!')}
    //else {
        //alert('Você não Passou!!!')}
    //Isso é um teste
    //let vetor =['Felipe','Carol','Lolo',false, 12, 256,-1000]
    //let joaozinho = {
        //nome: 'Joãozinho',
        //sobrenome: 'Das Neves',
        //idade: 16,
        //pets: {
            //nome: 'Rex',
            //raca: 'Vira-Lata',
    
            //nome: 'Spike',
            //raca: 'Tomba-potes',}};
//Para um laço precisamos de um 
//CONTADOR;
//CONDIÇÃO;

//PASSO;

//prompt('Quantos Lances de escada vc quer subir?')

let lances = Number (prompt ('Quantos Lances de escada vc quer subir?'))
let perguntaMaterial = prompt ('Qual o material da escada?')
let material = "";
let i = 0;
    while (i < lances){
        material += perguntaMaterial;
        console.log (material);
        i ++;
    }
