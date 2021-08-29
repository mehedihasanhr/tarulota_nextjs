
//css
import styles from './search.module.css';

//icon
import { Search } from 'react-feather';

const SearchBox = () =>{
    return(
        <div className={styles.__search}>
            <input type="text" className={styles.__input}/>
            <button className={styles.__search_btn}>
                <Search strokeWidth={1} className={styles.__search_icon}/>
            </button>
        </div>
    );
}

export default SearchBox;