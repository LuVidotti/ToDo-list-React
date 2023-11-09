import './App.css';
import CampoTarefa from './components/CampoTarefa';
import Form from './components/Form';
import FraseDia from './components/FraseDia';
import { useState } from 'react';

function App() {
  const [tarefaAFazer, setTarefaAFazer] = useState([]);
  const [tarefaEmAndamento, setTarefaEmAndamento] = useState([]);
  const [tarefaFeito, setTarefaFeito] = useState([]);
  const [input, setInput] = useState('');

  function aoDigitado(e) {
    setInput(e.target.value);
  }

  function adicionarTarefa(e) {
    e.preventDefault();
    const novaTarefa = input;
    setTarefaAFazer([...tarefaAFazer, novaTarefa]);
    setInput('');
  }

  function iniciar(index) {
    const tarefaSelecionada = tarefaAFazer[index];
    setTarefaEmAndamento([...tarefaEmAndamento, tarefaSelecionada]);
    const novasTarefasAFazer = tarefaAFazer.filter((_, i) => i !== index);
    setTarefaAFazer(novasTarefasAFazer);
  }

  function concluir(index) {
    const tarefaSelecionada = tarefaEmAndamento[index];
    setTarefaFeito([...tarefaFeito, tarefaSelecionada]);
    const novasTarefasEmAndamento = tarefaEmAndamento.filter((_, i) => i !== index);
    setTarefaEmAndamento(novasTarefasEmAndamento);
  }

  function excluir(index) {
    const novasTarefasFeito = tarefaFeito.filter((_, i) => i !== index);
    setTarefaFeito(novasTarefasFeito);
  }

  return (
    <div className="App">
      <h1>To-do List</h1>
      <div className='caixas'>
        <FraseDia />
        <Form valor={input} digitar={aoDigitado} enviarForm={adicionarTarefa}/>
      </div>

      <div className='listas'>
        <CampoTarefa titulo='A fazer' botao="Iniciar" tarefas={tarefaAFazer} funcaoBotao={iniciar}/>
        <CampoTarefa titulo='Em andamento' botao="Concluir" tarefas={tarefaEmAndamento} funcaoBotao={concluir}/>
        <CampoTarefa titulo='Feito' botao="Excluir" tarefas={tarefaFeito} funcaoBotao={excluir}/>
      </div>
    </div>
  );
}

export default App;
