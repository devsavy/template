import { SetStateAction } from "react";

interface IOptionChangedEvent {
  fullName: string;
  previousValue?: any;
  value?: any;
  component: {
    option: (key: string) => any;
    __searchRestoreRequested?: boolean;
  };
  name: string;
}

export const handleOptionChanged = (
  e: IOptionChangedEvent,
  setExpandedRowKeys: React.Dispatch<SetStateAction<number[]>>,
  expandedRowKeys: number[]
) => {
  if (e.fullName === "searchPanel.text") {
    if (!e.previousValue && e.value) {
      //make note of expanded keys before beginning search
      expandedRowKeys = e.component.option("expandedRowKeys");
    }
    if (e.previousValue && !e.value) {
      //when search is cleared signal the restore
      e.component.__searchRestoreRequested = true;
    }
  }

  if (e.name === "expandedRowKeys") {
    setExpandedRowKeys(e.value);
  }
};

export const handleContentReady = (e: IOptionChangedEvent) => {
  if (e.component.__searchRestoreRequested) {
    e.component.__searchRestoreRequested = false;
    e.component.option("expandedRowKeys");
  }
};
