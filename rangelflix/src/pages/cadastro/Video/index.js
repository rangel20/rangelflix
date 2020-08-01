import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

const CadastroVideo = () => {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=rsfQ5Knbsjk',
    categoria: 'Front End',
  });
  return (
    <PageDefault>
      <h1>Página de Cadastro de Video</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          // alert('Vídeo Cadastrado com sucesso!!!');

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaID: 1,
          })
            .then(() => {
              console.log('Cadastrado com sucesso!!');
              history.push('/');
            });
        }}
      >
        <FormField
          label="Título do Vídeo"
          name="nome"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="nome"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="nome"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default CadastroVideo;
