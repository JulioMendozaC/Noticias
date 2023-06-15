import styles from './Form.module.css'
import useSelect from '../hooks/useSelect'


const From = () => {

    const OPCIONES =[

        {value: 'general', label:'General'},
        {value: 'buisness', label:'Negpcios'},
        {value: 'entertaiment', label:'Entretenimeinto'},
        {value: 'health', label:'Salud'},
        {value: 'scinece', label:'Ciencia'}, 
        {value: 'sports', label:'Deportes'}, 
        {value: 'technology', label:'Tecnología'}, 

    ]

    

    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={styles.heading}>Encuentra Noticias Por Categorias</h2>
                        <SelectNoticias />
                   <div className="input-field col s12">
                        <input 
                        type="submit"
                        className= {`${styles.btn_block} btn-large amber darken-2`}
                        value="Buscar"
                        />
                    </div> 
                </form>
            </div>
        </div>
     );
}
 
export default From;