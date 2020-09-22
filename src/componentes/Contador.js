import React, {useState} from 'react';

export default function Contador(){
    const [contador, setContador] = useState(() =>{
        const valorStorage = localStorage.getItem("contador")

        if(!valorStorage){
            return 0;
        }
        return Number(valorStorage)
    });

    const adicionarClick = () =>{
        alterarContador(contador + 1)
        
    }

    const subtrairClick = () =>{
        if (contador > 0){
            alterarContador(contador - 1)            
        }               
    }


    const alterarContador = (novoValor) =>{
        setContador(novoValor)
        localStorage.setItem("contador", novoValor)
    }

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={adicionarClick}>Adicionar</button>
            <button onClick={subtrairClick}>Subtrair</button>
        </div>
    )
}