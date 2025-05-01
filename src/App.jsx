import React from 'react';
import Aluno from './components/Aluno';

const App = () => {
  const alunos = [
    { nome: "Joao", email: "joao@gmail.com", curso: "Sistemas para internet", media: 8.5 },
    { nome: "Maria", email: "Maria@gmail.com", curso: "Sistemas para internet", media: 6.9 },
    { nome: "Luana", email: "luana@gmail.com", curso: "Sistemas de Informação", media: 7.0 }
  ]

  return (
    <div>
      {alunos.map((aluno, index) => (
        <Aluno
          key={index}
          nome={aluno.nome}
          email={aluno.email}
          curso={aluno.curso}
          media={aluno.media}
        />
      ))}
    </div>
  )
}

export default App;
