import './App.css';
import News from './components/News';

const news = [
  {
    theme: {
      label: 'NBA',
      url: 'https://www.nba.com/',
    },
    title: 'No fundo do poço!',
    text: 'Lakers não troca Russell Westbrook e declara a temporada encerrada.',
  },
  {
    theme: {
      label: 'BBB',
      url: 'https://gshow.globo.com/realities/bbb/',
    },
    title: 'Perdeu tudo!',
    text: 'Jade Picon é eliminada, perde tudo e vai morar de aluguel.',
  },
];

function App() {
  return (
    <div>
      <header className='d-flex justify-content-between align-items-center p-4 menu'>
        <a href='/' className='text-dark'>Assine</a>
        <h1><a href='/' className='text-dark'>Notícias</a></h1>
        <a href='/' className='text-dark'>Login</a>
      </header>
      <main>
        <div className='row justify-content-center'>
          {
            news.map((article) => {
              return (
                <News
                  theme={ article.theme }
                  title={ article.title }
                  text={ article.text }
                />
              )
            })
          }
        </div>
      </main>
    </div>
  );
}

export default App;
