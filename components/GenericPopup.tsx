import dynamic from "next/dynamic";
import { Dispatch, SetStateAction } from "react";

const Popup = dynamic(() => import("devextreme-react/popup").then((module) => module.Popup), {
  ssr: false,
});

interface IGenericPopup {
  title: string;
  visible: boolean;
  children: JSX.Element;
  setHiding: Dispatch<SetStateAction<any>>;
  width?: string | number | (() => string | number) | undefined;
  height?: string | number | (() => string | number) | undefined;
  [key: string]: any;
}

export const GenericPopup: React.FC<IGenericPopup> = ({
  title,
  visible,
  children,
  minWidth = 500,
  width = 400,
  height = 500,
  setHiding,
  ...props
}) => {
  return (
    <Popup
      width={width}
      height={height}
      title={title}
      minWidth={minWidth}
      showTitle={true}
      dragEnabled={true}
      resizeEnabled={true}
      hideOnOutsideClick={true}
      onHiding={setHiding}
      visible={visible}
      {...props}
    >
      {children}
    </Popup>
  );
};
