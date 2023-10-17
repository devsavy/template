import { Button } from "devextreme-react/button";
import { investmentTreeList, singleImvestment } from "../datasource/data";
import TreeList, { Column, SearchPanel, HeaderFilter, StateStoring, Item, Toolbar } from "devextreme-react/tree-list";
import { currencyCustomizeText } from "../lib";
import { CustomCellInvestmentCostCenter } from "../components/CustomCellInvestmentCostCenter";
import { useState } from "react";
import { InvestmentPopup } from "../components/InvestmentPopup";

const Investments = () => {
  const [toggleInvestmentPopup, setToggleInvestmentPopup] = useState(false);

  const [toggleInvestmentPopupAdd, setToggleInvestmentPopupAdd] = useState(false);
  const handleInvestmentPopup = (type: string) => {
    setToggleInvestmentPopup(true);
    if (type === "add") {
      setToggleInvestmentPopupAdd(true);
    }
  };

  return (
    <div className="p-10">
      <TreeList
        keyExpr="Id"
        height={`100%`}
        id="investement-treelist"
        showBorders={true}
        showRowLines={true}
        // noDataText={noDataTextInvestmentTreeListTable()}
        parentIdExpr="ParentId"
        focusedRowEnabled={true}
        columnAutoWidth={true}
        allowColumnResizing={true}
        allowColumnReordering={true}
        dataSource={investmentTreeList}
      >
        <HeaderFilter visible={true} />
        <SearchPanel visible={true} width={250} placeholder="Search..." />
        <StateStoring
          enabled={true}
          type="localStorage"
          storageKey="InvestmentTreeList_InvestmentPlanningView_Storage"
        />

        <Toolbar>
          <Item location="before">
            <Button
              icon="plus"
              text="Add"
              hint="Add an investment"
              onClick={() => handleInvestmentPopup("add")}
              disabled={true}
            />
          </Item>
          <Item location="before">
            <Button
              icon="edit"
              text="Edit"
              hint="Edit an investment"
              onClick={() => handleInvestmentPopup("edit")}
              disabled={false}
            />
          </Item>
          <Item name="searchPanel" location="after" />
        </Toolbar>

        <Column
          dataField="Name"
          caption="Name"
          width={300}
          cellRender={(cellData) => <CustomCellInvestmentCostCenter rowData={cellData.row} color="#1fc600" />}
        />
        <Column dataField="Code" caption="Code" width={90} />

        <Column dataField="Revenue" caption="Revenue" customizeText={currencyCustomizeText} />
        <Column dataField="Expense" caption="Expense" customizeText={currencyCustomizeText} />
        <Column dataField="Net" caption="Net" customizeText={currencyCustomizeText} />
      </TreeList>

      <InvestmentPopup
        investment={singleImvestment}
        togglePopup={toggleInvestmentPopup}
        setTogglePopup={setToggleInvestmentPopup}
        selectedInvestmentId={127}
        selectedInvestmentTotalCost={8000}
      />
    </div>
  );
};

export default Investments;
