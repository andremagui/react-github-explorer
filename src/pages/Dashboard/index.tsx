import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from "react-icons/fi";
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from "./styles";
//componente

// nao é necessario colocar a tipagem de tudo que o repositorio vai retornar
// é preciso colocar só as informações que iremos usar na interface
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}
// function Dashboard() {}
//function componente no formato de função
const Dashboard: React.FC = () => {
  // guardando valores dos estados dos inputs
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);


  //adicionar um novo repositorio
  //consumir api do github
  //salvar novo repositorio no estado
  // previnindo o comportamento padrao do form, de redirecionar a pagina
  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // chamada a API
    const response = await api.get<Repository>(`repos/${newRepo}`);
    console.log(response.data);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    // limpando o estado do input
    setNewRepo('');
  }

  return (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios do Github</Title>

    <Form onSubmit={handleAddRepository}>
      <input
        value={newRepo}
        onChange={e => setNewRepo(e.target.value)}
        placeholder="Digite o nome do repositório"
      />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      {repositories.map(repository => (
        <a key={repository.full_name} href="teste">
        <img
          src={repository.owner.avatar_url}
          alt={repository.owner.login}
        />
        <div>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
        </div>

      <FiChevronRight size= { 20 } />
      </a>
      ))}
    </Repositories>
  </>
  )}

export default Dashboard;
