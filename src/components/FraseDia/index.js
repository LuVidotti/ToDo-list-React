import './FraseDia.css';
import { useEffect, useState } from 'react';

//api gerar frase: https://api.adviceslip.com/advice
//api traduzir frase: https://api.mymemory.translated.net/get?q=Hello%20World!&langpair=en|pt-BR

function FraseDia() {
    const [frase, setFrase] = useState('');

    useEffect(() => {
        async function gerarFrase() {
            const resposta = await fetch(`https://api.adviceslip.com/advice`);
            const frase = await resposta.json();

            return frase.slip.advice;
        }

        async function traduzirFrase(frase) {
            const resposta = await fetch(`https://api.mymemory.translated.net/get?q=${frase}!&langpair=en|pt-BR`);
            const fraseTraduzida = await resposta.json();
            setFrase(fraseTraduzida.responseData.translatedText);
        }

        gerarFrase().then(frase => {
            traduzirFrase(frase);
        })
    }, [])

    return(
        <div className="frase-dia">
            <h4>Frase do dia</h4>
            {frase ? <p>{frase}</p> : <div>Carregando...</div>}
        </div>
    )
}

export default FraseDia;