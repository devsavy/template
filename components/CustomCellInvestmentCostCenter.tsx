import { FolderCloseIcon, FolderOpenIcon, BuildingIcon } from "./SVGIcons";

import { IInvestmentGenericRowData } from "./typings";

interface ICustomCellComponentProps {
  rowData: {
    data: IInvestmentGenericRowData;
    isExpanded: boolean;
  };
  color: string;
}

export const CustomCellInvestmentCostCenter: React.FC<ICustomCellComponentProps> = ({ rowData, color }) => {
  const { Name, IsFolder } = rowData.data;
  const { isExpanded: isFolderNodeExpanded } = rowData;

  return (
    <div className="flex items-center">
      <span className="mr-[0.11rem] shrink-0">
        {IsFolder ? (
          isFolderNodeExpanded ? (
            <FolderOpenIcon className="w-4 h-4" />
          ) : (
            <FolderCloseIcon className="w-4 h-4" />
          )
        ) : (
          <BuildingIcon className="w-4 h-4" color={color} />
        )}
      </span>

      <span className="ml-[0.2rem] truncate" title={Name}>
        {Name}
      </span>
    </div>
  );
};
