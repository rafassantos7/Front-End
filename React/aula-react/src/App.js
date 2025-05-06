import './App.css';
import { useState } from 'react';
import imagem from   './imagem.png'
import imagemfundo from './background.jpg'   

function App() {
  // Permite adicionar estado ao componente(monitorar mudanças no conteúdo)
  const [usuario,setUsuario] = useState('');
  const [usuarios,setUsuarios] = useState(['Maria','Lucas','José']);
  
  const adicionarUsuario = () => {
    // Verificando se o novo usuário já existe na lista.
    if(usuarios.includes(usuario)){
      alert('Usuario ja existe na lista');
      return;
    }

    // Adicionar novo usuário na lista, mantendo os anteriores.
    setUsuarios([...usuarios,usuario]);
    // Limpar campo de entrada.
    setUsuario('');
  }

  return (
    <div className='App'>
      
      <img src={imagem} alt='logo empresa' class='logo'/>
      {/* <img src={imagemfundo} class='background'/> */}

      <h1>Lista de usuarios</h1>
      <hr/>
      <h2>Adicionar usuario</h2>
      <input
      type='text'
      placeholder='Digite o nome do usuário'
      value={usuario}
      onChange={(e) => setUsuario(e.target.value)}
      />
      <button onClick={adicionarUsuario}>Adicionar</button>
      <hr/>
      <h2>Lista de usuários</h2>
      <ol>{usuarios.map((usuario,index) => (
        <li key={index}>{usuario}</li>
      ))}
      </ol>
    </div>
  );
}

export default App;
