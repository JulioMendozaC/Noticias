import Noticia from './Noticias'



const Lista = ({noticias}) => (
    
        <div className="row">
          {noticias.map(noticia => (
            <Noticia 
            key={noticia.url}
            noticia={noticia}/>
          ))}
        </div>
    );

export default Lista;