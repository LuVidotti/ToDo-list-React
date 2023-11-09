import './CampoTarefa.css';

function CampoTarefa(props) {
    return(
        <div className='campo-tarefa'>
            <h2>{props.titulo}</h2>
            <ul className='lista-tarefas'>
                {props.tarefas.map((tarefa, index) => {
                    return (
                       <li 
                        style={{
                            backgroundColor: props.titulo === 'A fazer' ? '#cde6de' : 
                            (props.titulo === 'Em andamento' ? '#deeee9' : 
                            (props.titulo === 'Feito' ? '#eef7f4' : 'white'))
                        }} key={index}>
                            <p style={{textDecoration: props.titulo === 'Feito' ? 'line-through' : 'none'}}>{tarefa}</p>
                            <button onClick={() => props.funcaoBotao(index)}>{props.botao}</button>
                        </li> 
                    )
                })}
            </ul>
        </div>
    )
}

export default CampoTarefa;