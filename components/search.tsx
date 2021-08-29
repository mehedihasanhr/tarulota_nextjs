//css
import styles from './search.module.css';

//icon
import { Search } from 'react-feather';

interface searchProps{
    className?: string;
}

const SearchBox = ({className}:searchProps) =>{
    return(
        <div className={`${styles.__search} ${className}`}>
            <input type="text" className={styles.__input} placeholder="Search here..."/>
            <button className={styles.__search_btn}>
                <Search strokeWidth={2} width={20} className={styles.__search_icon}/>
            </button>
        </div>
    );
}

export default SearchBox;