import { SetStateAction, useRef } from "react";

import Form, { ButtonItem, GroupItem } from "devextreme-react/form";
import DataGrid, { Column, Editing, Lookup } from "devextreme-react/data-grid";
import "devextreme-react/text-area";

import { ISingleInvestment } from "./typings";
import { GenericPopup } from "./GenericPopup";

// import { InvestmentDropDown } from "./InvestmentDropDown";
import { currencyFinnishFormat, notifyError, notifySuccess } from "../lib";
import { investmentGroupMembers, investmentGroups } from "../datasource/data";
import { InvestmentDropDown } from "./InvestmentDropDown";

interface IInvestmentPopup {
  togglePopup: boolean;
  investment: ISingleInvestment;
  setTogglePopup: React.Dispatch<SetStateAction<boolean>>;
  selectedInvestmentId: number | undefined;
  selectedInvestmentTotalCost: number | undefined;
}

type ButtonType = "danger" | "default" | "normal" | "success";

const submitButtonOptions = {
  text: "Update",
  type: "success" as ButtonType,
  useSubmitBehavior: true,
};

export const InvestmentPopup: React.FC<IInvestmentPopup> = ({
  togglePopup,
  setTogglePopup,
  investment,
  selectedInvestmentTotalCost,
}) => {
  const formRef = useRef<Form | null>(null);
  const formInstance = formRef?.current?.instance;

  const datagridRef = useRef<DataGrid | null>(null);
  const datagridInstance = datagridRef?.current?.instance;

  const selectedInvestmentData = {
    ...investment,
    TotalCost: currencyFinnishFormat(Math.abs(selectedInvestmentTotalCost!)),
  };

  // //  === EVENT HANDLRES ===
  const handlePopupHiding = () => setTogglePopup(false);
  const cancelButtonOptions = { text: "Cancel", onClick: handlePopupHiding };

  const popupTitle = selectedInvestmentData !== null ? "Edit selected investment" : "Add a new investment";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = formInstance?.option("formData");
    delete formData.$type;

    const allChangedData = {
      ...formData,
    };
    console.log(allChangedData);
  };

  return (
    <GenericPopup
      width={`min(1500px, calc(100vw - 150px)`}
      height={`min(1500px, calc(100vh - 75px)`}
      title={popupTitle}
      visible={togglePopup}
      setHiding={handlePopupHiding}
    >
      <div id="investment-form">
        <form className="widget-container" onSubmit={handleSubmit}>
          <Form
            id="form"
            ref={formRef}
            labelMode="outside"
            formData={selectedInvestmentData}
            showColonAfterLabel={false}
            labelLocation="top"
            minColWidth={300}
            width={"100%"}
          >
            <GroupItem caption="Groupings" cssClass="form-group" colCount={6}>
              <DataGrid
                keyExpr="Id"
                height={"100%"}
                ref={datagridRef}
                id="investment-groupings"
                showBorders={true}
                showRowLines={true}
                remoteOperations={true}
                focusedRowEnabled={true}
                allowColumnResizing={true}
                dataSource={investmentGroups}
              >
                <Editing mode="cell" allowUpdating={true} />
                <Column dataField="Name" caption={"Name"} allowEditing={false} />
                <Column
                  dataField="Id"
                  caption={"Member"}
                  editCellComponent={(cellProps) => (
                    <InvestmentDropDown {...cellProps} dataSource={investmentGroupMembers} />
                  )}
                >
                  <Lookup
                    dataSource={selectedInvestmentData?.InvestmentGroupMembership}
                    valueExpr="InvestmentGroupId"
                    displayExpr="Name"
                  />
                </Column>
              </DataGrid>
            </GroupItem>

            <GroupItem colCount={2} cssClass="align-buttons">
              <ButtonItem buttonOptions={cancelButtonOptions} horizontalAlignment="right" />

              <ButtonItem buttonOptions={submitButtonOptions} />
            </GroupItem>
          </Form>
        </form>
      </div>
    </GenericPopup>
  );
};
