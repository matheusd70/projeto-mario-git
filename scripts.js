 /* Variáveis 
        Um espaço de memória que você
        reserva e pode guardar o que quiser lá dentro.
 
        3 jeitos de criar uma variável
            - var / jeito antigo -  NÃO USAR
            - let -> Pode alterar o valor depois
            - const -> constante
 
tag= <script></script>

* Para guardar texto na variável, preciso usar "  "  ou ' '
ex.: const abacate="texto aqui"
    const numero1= 100
    const numero2= 300
    const numerototal = numero1 + numero2

    console.log (numerototal) -> Para ver o resultado na tela

        Funções

É um trecho de código que, só executa quando é chamado.

ex.: const abacate= "oi, eu sou um abacate"
const pera= "oi, eu sou uma pera"
const conta= 100-30

console.log (abacate)
console.log (pera)
console.log (conta)

--- Quando o javascript é executado, ele sai resolvendo tudo em sequência

 const numero1 = 100
const numero2 = 100

function soma ()  {

        const somatoria = numero1 + numero2
    console.log (somatoria)
}

soma()

--> Quando tem uma função no código, ele só executa quando é chamado.
--> Para chamar a função, é só colocar o nome dela e depois colocar parenteses,
nesse caso foi soma ()
--> Posso executar a função várias vezes

                        DOM

    A Dom é uma árvore de elementos do browser, são todos elemetos do nosso site, tag e tudo mais.
    E  o Javascript tem o poder de manipular tudo, para fazer o que eu quiser.

            Eventos

    Todos os eventos começam com on.

Existem vários eventos na minha página. Ex.: Clicar no botão, passar o cursor do mouse a palavra mudar a cor.
--> Para aparecer algo na tela, preciso criar uma função no javascript e ir no html informar o que vai aparecer na tela, nesse exemplo a função foi criar um alerta ao clicar no botão.

Ex.:
function cliqueiNoBotao () {
    alert("Você clicou no botão!")
}

HTML:
<button ONCLICK="cliqueNoBotao()"
 */

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
} 

function esconderForm () {
    form.style.left = "-300px"
    form.style.transform = "translateX(0%)"
    mascara.style.visibility = "hidden"
}
