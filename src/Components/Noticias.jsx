

const Noticia = ({noticia}) => {

    const {urlToImage, url, title, description, source} = noticia;
    
    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage.img} alt={title} />
           <div className="card-title">{source.name}</div>
        </div>
        : null;

    return ( 

     

        <div className="col s12 m6 l4">
            <div className="card">

                {imagen}

                <div className="card-content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                </div>
                <div className="card-action">
                    <a 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="waves-effect waves-light btn" >Ver Noticia</a>
                </div>
            </div>
        </div>
     );
}
 
export default Noticia;