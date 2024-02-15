import React, { useState, useEffect } from 'react';
import { obterLivros } from './livrodados'; // Ajuste o caminho conforme necessário

const LivroLista = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const dadosDosLivros = obterLivros();
    setLivros(dadosDosLivros);
  }, []);

  const excluirLivro = (codigoLivro) => {
    const livrosAtualizados = livros.filter(livro => livro.codigo !== codigoLivro);
    localStorage.setItem('livros', JSON.stringify(livrosAtualizados));
    setLivros(livrosAtualizados);
  };

  return (
    <div className="container mt-5">
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <tr key={index}>
              <td>
                {livro.titulo}
                <br />
                <button 
                  className="btn btn-danger btn-sm mt-2" 
                  onClick={() => excluirLivro(livro.codigo)}
                >
                  Excluir
                </button>
              </td>
              <td>{livro.resumo}</td>
              <td>{livro.editora}</td>
              <td>{livro.autores.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LivroLista;
