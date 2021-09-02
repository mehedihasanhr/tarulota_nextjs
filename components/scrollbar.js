import { Scrollbars } from "react-custom-scrollbars";


const Scrollbar = ({children}) =>{
    return(
        <Scrollbars style={{ width: '100%', height: 400 }} autoHide={true} universal={true}>
            {children}
        </Scrollbars>
    );
}

export default Scrollbar;