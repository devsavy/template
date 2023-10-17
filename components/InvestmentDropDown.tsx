import { useRef, useState } from "react";
import { Button } from "devextreme-react/button";
import DropDownBox from "devextreme-react/drop-down-box";
import DataGrid, { Column, Paging, Scrolling, Selection, SearchPanel } from "devextreme-react/data-grid";

import { IInvestmentGroupMember } from "./typings";

interface IInvestmentDropDown {
  data: {
    value: number;
    key: number;
    column: { lookup: { dataSource: IInvestmentGroupMember[] }; caption: string };
    setValue: (a: number) => number;
  };
  displayExpr: string;
  dataSource: IInvestmentGroupMember[];
}

export const InvestmentDropDown: React.FC<IInvestmentDropDown> = (props) => {
  const datagridRef = useRef<DataGrid | null>(null);
  const datagridInstance = datagridRef?.current?.instance;

  console.log(props);

  const { dataSource, data, displayExpr } = props;
  const columnId = data.key;

  // console.log(investmentGroupMembersDataForLookup);
  // const investmentGroupMembersDataForLookupWithResetData = [
  //   { Id: null, Name: "-", Code: "-" },
  //   ...investmentGroupMembersDataForLookup,
  // ];

  console.log(props.data.value);
  console.log(props.data.key);

  // console.log(datagridInstance?.getSelectedRowKeys());
  // console.log(datagridRef);

  const filteredDataSource = dataSource?.filter((item) => item.InvestmentGroupId === columnId);
  console.log(filteredDataSource);

  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[] | null[]>([props.data.value]);
  const [defaultFocusedRowKey, setDefaultFocusedRowKey] = useState<number | null | undefined>(props.data.value);

  const handleBoxOptionChanged = (e: any) => {
    if (e.name === "opened") {
      setIsDropDownOpened(e.value);
    }
  };

  const handleSelectionChanged = (selectionChangedArgs: any) => {
    setSelectedRowKeys(selectionChangedArgs.selectedRowKeys);
    setDefaultFocusedRowKey(selectedRowKeys[0]);
    setIsDropDownOpened(false);
    props.data.setValue(selectionChangedArgs.selectedRowKeys[0]);
    // datagridInstance?.saveEditData();
  };

  // const handleReset = () => {
  //   setSelectedRowKeys([null]);
  //   setDefaultFocusedRowKey(selectedRowKeys[0]);
  //   props.data.setValue(null!);
  //   setIsDropDownOpened(false);
  // };

  console.log(selectedRowKeys);

  const contentRender = () => {
    return (
      <div className="h-[370px]">
        <DataGrid
          keyExpr="Id"
          height={370}
          // ref={datagridRef}
          dataSource={filteredDataSource}
          remoteOperations={true}
          showBorders={true}
          showRowLines={true}
          focusedRowEnabled={true}
          hoverStateEnabled={true}
          selectedRowKeys={selectedRowKeys}
          onSelectionChanged={handleSelectionChanged}
          defaultFocusedRowKey={defaultFocusedRowKey}
        >
          <Paging enabled={false} />
          <Scrolling mode="virtual" />
          <Selection mode="single" />
          <SearchPanel visible={true} width={150} />

          <Column dataField="Name" caption="Name" />
          <Column dataField="Code" caption="Code" />
        </DataGrid>
        <hr className="w-full" />
        {/* <Button icon="revert" text="Reset" hint="Reset selection" onClick={handleReset} /> */}
      </div>
    );
  };

  // console.log(displayExpr);

  return (
    <DropDownBox
      valueExpr="Id"
      displayExpr="Name"
      opened={isDropDownOpened}
      value={selectedRowKeys[0]}
      // contentRender={contentRender}
      dataSource={filteredDataSource}
      placeholder="Change Investment membership"
      onOptionChanged={handleBoxOptionChanged}
    >
      <div className="h-[370px]">
        <DataGrid
          keyExpr="Id"
          height={320}
          // ref={datagridRef}
          dataSource={filteredDataSource}
          remoteOperations={true}
          showBorders={true}
          showRowLines={true}
          focusedRowEnabled={true}
          hoverStateEnabled={true}
          selectedRowKeys={selectedRowKeys}
          onSelectionChanged={handleSelectionChanged}
          defaultFocusedRowKey={defaultFocusedRowKey}
        >
          <Paging enabled={false} />
          <Scrolling mode="virtual" />
          <Selection mode="single" />
          <SearchPanel visible={true} width={150} />

          <Column dataField="Name" caption="Name" />
          <Column dataField="Code" caption="Code" />
        </DataGrid>
        <hr className="w-full" />
        {/* <Button icon="revert" text="Reset" hint="Reset selection" onClick={handleReset} /> */}
      </div>
    </DropDownBox>
  );
};
