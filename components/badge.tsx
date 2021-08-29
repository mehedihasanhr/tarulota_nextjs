//css
import styles from './badge.module.css';

interface badgeProps{
    count?: number,
    children: any,
    type?:string,
}

const Badge = ({count, type, children}:badgeProps) =>{

    return (
        <div className={styles.__badge}>
            {children}
            <span 
                className={`
                    ${styles.__count} 
                    ${count !== undefined && count > 9 && styles.__count_details}
                    ${type !== undefined && type === 'dot' && styles.__count_dot}
                    ${type === 'dot' && count === 0 && styles.__count_none}
                `}
            >
                {count}    
            </span>
        </div>
    )
}

export default Badge;