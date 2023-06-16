import Noticia from './Noticias'



const Lista = ({noticias}) => (
    
        <div className="row">
          {noticias.map(noticia => (
            <Noticia />
          ))}
        </div>
    );

export default Lista;