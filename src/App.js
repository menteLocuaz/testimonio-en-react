import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
    <div className='container'>
      <h1>Esto Es Lo Que Dicen </h1>
      <Comentario
      imagen={-1}
      nombre={'marcos'}
      cargo={'supervisor'}
      testimonio={'Deseamos crear una página que ofrezca contenido sobre cursos de Riesgo Crediticio. Modelo similar a Crehana, Platzi, Netzun, etc.'}/>
      <Comentario
        imagen={-2}
        nombre={'Juan villas'}
        cargo={'Diseñador'}
        testimonio={'Estamos buscando socios estratégicos para un proyecto de ERP que tenemos en la república dominicana. El objetivo del proyecto es evaluar una estrategia para integrar salesforce con nuestro ERP que está programado en C#.'}/>
      <Comentario
        imagen={-3}
        nombre={'Arthur vanegas'}
        cargo ={'Admistraccion '}
        testimonio={'Necesito desarrollar Pagina Web que posea motor de busqueda y segmentacion por categorias.'}/>
        
    </div>
    </div>
  );
}

export default App;
