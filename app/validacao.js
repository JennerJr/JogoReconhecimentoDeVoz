    function verificaChuteSeValorValido(chute){
        const numero =+chute;

        if(chuteIsInvalido()(numero)){
            elementoChute.innerHTML += '<div>Valor Invalido</div>'
        }

        if(numeroMaiorOuMenorQueValorP(numero)){
            elementoChute.innerHTML += `<div> Valor invalido: Fale um numero entre ${menorValor} e ${maiorValor} </div>`
        }

        if(numero === numeroSecreto){
            document.body.innerHTML = `
            <h2>Voce Acertou!</h2>
            <h3> O numero secreto era ${numeroSecreto}</h3>
            <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>
            `
        } else if(numero > numeroSecreto){
           elementoChute.innerHTML += `<div> o numero secreto e menor <i class="fa-sharp fa-solid fa-angle-down"></i> </div>`
        } else{
            elementoChute.innerHTML += `<div> o numero secreto e maior <i class="fa-sharp fa-solid fa-angle-up"></i> </div>`
        }
    }
    function chuteIsInvalido() {
        return Number.isNaN
    }

    function numeroMaiorOuMenorQueValorP(numero){
        return numero > maiorValor || numero < menorValor

    }

    document.body.addEventListener('click', (e)=>{
        if(e.target.id == "jogarNovamente"){
            window.location.reload();
        }
    })