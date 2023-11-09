import './Form.css';

function Form(props) {
    return(
        <div className='form'>
            <form onSubmit={(e) => props.enviarForm(e)}>
                <h2>Adicione uma tarefa</h2>
                <input placeholder='Digite uma tarefa...' type='text' value={props.valor} onChange={(e) => props.digitar(e)}/>
                <button type='submit'>Adicionar</button>
            </form>
        </div>
    )
}

export default Form;