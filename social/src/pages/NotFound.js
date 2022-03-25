import React from 'react';
import Layout from '../components/shared/Layout';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Layout title="⛔️ - Não Encontrado">
      <p className="h5">Desculpe, essa página não está disponível.</p>
      <p>O link que você tentou acessar está quebrado ou foi removido.</p>
      <Link to="/">Retornar para o Senacgram</Link>
    </Layout>
  );
};

export default NotFound;
