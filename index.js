// import operações
const soma = require('./soma')
const subtracao = require('./subtracao')
const multiplicacao = require('./multiplicacao')
const divisao = require('./divisao')

// atribuição das operações
const calcSoma = soma.soma 
const calcSub = subtracao.subtracao 
const calcMult = multiplicacao.multiplicacao 
const calcDiv = divisao.divisao 

const http = require("http")
const porta = 3000
const inquirer = require('inquirer')

inquirer.prompt(
    [
        {
            name: 'num1',
            message: 'Informe um numero: '
        },
        {
            name: 'num2',
            message: 'Informe outro numero: '
        },
        {
            type: 'rawlist',
            name: 'operacao',
            message: 'Escolha uma operacao: ',
            choices: ['somar', 'subtrair', 'multiplicar', 'dividir'],
            default: 'Operacao'
        },
    ]

).then((answers) => {

    var result = 0
    const num1 = answers.num1
    const num2 = answers.num2
    const operacao = answers.operacao

    if(answers.operacao === 'somar') {
        result = calcSoma(parseInt(num1), parseInt(num2))
        console.log(`Resultado da soma é: ${result}`)

    } else if (answers.operacao === 'subtrair') {
        result = calcSub(parseInt(num1), parseInt(num2))
        console.log(`Resultado da subtração é: ${result}`)

    } else if (answers.operacao === 'multiplicar') {
        result = calcMult(parseInt(num1), parseInt(num2))
        console.log(`Resultado da multiplicação é: ${result}`)

    } else if (answers.operacao === 'dividir') {
        result = calcDiv(parseInt(num1), parseInt(num2))
        console.log(`Resultado da divisão é: ${result}`)
    }

}).catch((err) => {
    console.log(err)
})

// linha de serviço
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end(`<h1>Resposta da Operacao: </h1>
    <p>${result}</p>`)
})

// escutar na porta
server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})