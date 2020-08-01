import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND_TOP}/categorias`;

const getAll = () =>
  fetch(`${URL_CATEGORIAS}`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  });

const getAllWithVideos = () =>
  fetch(`${URL_CATEGORIAS}?_embed=videos`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  });

export default {
  getAllWithVideos,
  getAll,
};
