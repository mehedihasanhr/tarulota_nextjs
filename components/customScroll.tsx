import { Scrollbars } from "react-custom-scrollbars";

interface Tscroll {
  children: any;
  height: number | string;
  autoHide?: boolean;
  thumbMinSize?: number;
}

const CustomScrollbar = ({
  children,
  height,
  autoHide,
  thumbMinSize,
}: Tscroll) => {
  return (
    <Scrollbars
      autoHide={autoHide !== undefined ? autoHide : false}
      autoHeight
      autoHeightMin={100}
      autoHeightMax={height}
      thumbMinSize={thumbMinSize !== undefined ? thumbMinSize : 30}
      universal={true}
    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbar;
