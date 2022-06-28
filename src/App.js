import './App.css';
import { Card } from './Card';

function App() {
  return (

    <div className="container__home">
      <div className='principal'>

        <section className={'home__principal'}>
          <div className='home__principal--content'>
            <div className='content__titulo'>
              <h1>Welcome!</h1>
              <p>Some projects...</p>
            </div>
            <div className='content__img'>
              <img alt='img' src='https://user-images.githubusercontent.com/87577172/175791946-d66ee908-535d-4e00-b2a2-ede19ce4336a.png' />
            </div>
          </div>
        </section>

        <section className={'home__seccion'}>
          <div className='home__seccion--content'>
            <Card
              img='https://user-images.githubusercontent.com/87577172/176245691-c3215e9c-86cb-4761-8ff4-ae3c3e9158f8.png'
              titulo='Calendario'
              tecnologias='JavaScript, React, Redux, Node.js, Express.js, Mongoose, MongoDB.'
              direccion='https://santiagojsdev.github.io/React-Calendario-Mern/'
            />
            <Card
              img='https://user-images.githubusercontent.com/87577172/176267974-347155ff-2d30-4cc5-8db9-bd78abe4d452.png'
              titulo='Bloc de notas'
              tecnologias='JavaScript, React, Redux, Node.js, Firebase.'
              style1="#d0d8e2"
              style2="#0b3a83"
              direccion="https://santiagojsdev.github.io/React-Autenticaci-n-Firestore"
            />
            <Card
              img='https://user-images.githubusercontent.com/87577172/176271276-c9ac3bd5-2319-46f1-a26a-50f99d1ef4a7.png'
              titulo='Heroes Marvel'
              tecnologias='JavaScript, React.'
              style1="#d0d8e2"
              style2="#0b3a83"
              direccion="https://santiagojsdev.github.io/Aplicacion-Heroes-page/"
            />
            <Card
              img='https://user-images.githubusercontent.com/87577172/175792263-0a00457f-cb71-45c6-9828-8b1767ad8764.gif'
              titulo='VideoGames'
              tecnologias='JavaScript, React, Redux, Node.js, Express.js, Sequelize, PostgreSQL.'
              style1="#d0d8e2"
              style2="#0b3a83"
              direccion= "https://santiagojsdev.github.io/AppCSS/"
            />
            <Card
              img='https://user-images.githubusercontent.com/87577172/175792205-756f2cfd-5428-45d7-9361-9fb77f9049e0.gif'
              titulo='React-TodoApp'
              tecnologias='JavaScript, React.'
              style1="#d0d8e2"
              style2="#0b3a83"
              direccion= "https://santiagojsdev.github.io/React-mi-todo-list/"
            />
            <Card
              img='https://user-images.githubusercontent.com/87577172/175792106-10b1a2f1-b34d-42d4-a775-507144d32aae.gif'
              titulo='Javascript-TodoApp'
              tecnologias='JavaScript'
              style1="#d0d8e2"
              style2="#0b3a83"
              direccion= "https://santiagojsdev.github.io/Todo-JavaScript/"
            />
  <Card
              img='https://user-images.githubusercontent.com/87577172/175791946-d66ee908-535d-4e00-b2a2-ede19ce4336a.png'
              titulo='React-Api-Gif'
              tecnologias='JavaScript, React'
              style1="#d0d8e2"
              style2="#0b3a83"
              direccion= "https://santiagojsdev.github.io/React-app-gif/"
            />
  <Card
              img='https://user-images.githubusercontent.com/87577172/176280260-33e077a8-7a0b-4ff4-8adc-15031843174c.png'
              titulo='React-Api-BreakingBad'
              tecnologias='JavaScript, React'
              style1="#d0d8e2"
              style2="#0b3a83"
              direccion= "https://santiagojsdev.github.io/Api-Breaking-Bad-React/"
            />
  <Card
              img='https://user-images.githubusercontent.com/87577172/176281990-4c97c944-ff65-4bdb-ad7b-689b5cb7fe5e.gif'
              titulo='Api-SuperHero'
              tecnologias='JavaScript, React, Redux.'
              style1="#d0d8e2"
              style2="#0b3a83"
              direccion= "https://santiagojsdev.github.io/superHero-App/"
            />


          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
