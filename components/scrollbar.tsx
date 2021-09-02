import { Scrollbars } from "react-custom-scrollbars";

interface Iscrollbar{
    children: any;
    maxHeight: number | string;
}

const Scrollbar = ({children, maxHeight}:Iscrollbar) =>{
    return(
        <Scrollbars style={{ width: '100%', height: maxHeight }} autoHide={true} universal={true}>
            {children}
        </Scrollbars>
    );
}

export default Scrollbar;