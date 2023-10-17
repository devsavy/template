import { format } from "date-fns";
import notify from "devextreme/ui/notify";

import { IContextMenuItems } from "../typings";

export const expandedRowKeys = <T extends { Path?: string; Id: any }>(data: T[] | null): number[] => {
  let expandedKeys: number[] = [];
  if (typeof data !== "undefined") {
    expandedKeys = data?.filter((item) => item?.Path && item.Path.split("/").length <= 2).map((item) => item.Id) ?? [];
  }
  return expandedKeys;
};

export const dateFormatterForDateString = (dateString: Date) => {
  const date = new Date(dateString);
  const formattedDate = format(date, "dd.MM.yyyy");
  return formattedDate;
};

export const dateFormatterForDateTimeString = (data: { value: Date }) => {
  const date = new Date(data.value);
  const formattedDate = format(date, "dd.MM.yyyy HH.mm");
  return formattedDate;
};

export const setLocalStorage = (key: string, value: string) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  let localStorageData = "";
  if (typeof localStorage !== "undefined") {
    const storedItem = localStorage.getItem(key);
    if (storedItem) {
      localStorageData = JSON.parse(storedItem);
    }
  }
  return localStorageData;
};

export const isDecimal = (value: number | string) => {
  if (typeof value === "string") return Number(value) % 1 !== 0 ? 0 : Number(value) % 1;
  else return value % 1 !== 0 ? 0 : value % 1;
};
export const isUnit = (value: number) => {
  return value % 1 === 0 ? 0 : value % 1;
};
export const isTen = (value: number) => {
  return value % 10 === 0 ? 0 : value % 10;
};
export const isHundred = (value: number) => {
  return value % 100 === 0 ? 0 : value % 100;
};
export const isThousand = (value: number) => {
  return value % 1000 === 0 ? 0 : value % 1000;
};

export const budgetInputPrecisionResolver = [
  {
    value: 0,
    number: 1,
    text: "default",
    maxFractionDigits: 2,
    editorOptionsFormatting: "0#,###.00",
    function: (value: number) => isUnit(value),
  },
  {
    value: 1,
    number: 1,
    text: "ones",
    maxFractionDigits: 0,
    editorOptionsFormatting: "0#,###",
    function: (value: number) => isUnit(value),
  },
  {
    value: 2,
    number: 10,
    text: "tens",
    maxFractionDigits: 0,
    editorOptionsFormatting: "0#,###",
    function: (value: number) => isTen(value),
  },
  {
    value: 3,
    number: 100,
    text: "hundreds",
    maxFractionDigits: 0,
    editorOptionsFormatting: "0#,###",
    function: (value: number) => isHundred(value),
  },
  {
    value: 4,
    number: 1000,
    text: "thousands",
    maxFractionDigits: 0,
    editorOptionsFormatting: "0#,###",
    function: (value: number) => isThousand(value),
  },
];

export const getFullYear = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();

  return year;
};

export function getCurrentISODateToString() {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, -1);
  return formattedDate;
}

// format currency values to finnish format
export const currencyCustomizeText = (cellInfo: { value: string | number }, maxFractionDigits = 2) => {
  // if (cellInfo.value === undefined || cellInfo.value === null) return;
  const formatter = new Intl.NumberFormat("fi-FI", {
    currency: "EUR",
    style: "currency",
    maximumFractionDigits: budgetInputPrecisionResolver?.find(
      (item) => item.value === Number(getLocalStorage("selectedPeriodBudgetInputPrecision"))
    )?.maxFractionDigits,
  });
  return formatter.format(Number(cellInfo.value));
};

export const currencyFinnishFormat = (value: string | number) => {
  // if (cellInfo.value === undefined || cellInfo.value === null) return;
  const formatter = new Intl.NumberFormat("fi-FI", {
    currency: "EUR",
    style: "currency",
    maximumFractionDigits: budgetInputPrecisionResolver?.find(
      (item) => item.value === Number(getLocalStorage("selectedPeriodBudgetInputPrecision"))
    )?.maxFractionDigits,
  });
  return formatter.format(Number(value));
};

export const numberBoxFormatingPercentage = {
  type: "percent",
  precision: 2,
};

// export const numberBoxFormatingInerger = {
//   type: "interger",
// };

// notification/toast
export const notifySuccess = (message: string) =>
  notify(
    {
      message: message,
      width: 300,
    },
    "success",
    2150
  );

export const notifyError = (message: string, errorText?: string) =>
  notify(
    {
      message: `${message}  ${errorText ? errorText : ""}`,
      width: 300,
    },
    "error",
    2250
  );

export const notifyInfo = (message: string) =>
  notify(
    {
      message: message,
      width: 300,
    },
    "info",
    2250
  );

export const yearAndMonthsColumns = [
  "YearValue",
  ...Array.from({ length: 12 }, (_, i) => i + 1).map((i) => `Month${i}`),
];

export const upSertDeleteData = {
  update: {
    text: "Update",
    requestType: "put",
  },
  create: {
    text: "Create",
    requestType: "post",
  },
  delete: {
    text: "Delete",
    requestType: "delete",
  },
};

export const updateContextMenu = (array: IContextMenuItems[], ids: string[]) =>
  array.map((item) =>
    ids.includes(item.id)
      ? {
          ...item,
          disabled: !item.disabled,
        }
      : item
  );

export const customClassMemebersNames = [
  "CustomClass1MemberId",
  "CustomClass2MemberId",
  "CustomClass3MemberId",
  "CustomClass4MemberId",
  "CustomClass5MemberId",
  "CustomClass6MemberId",
  "CustomClass7MemberId",
  "CustomClass8MemberId",
  "CustomClass9MemberId",
  "CustomClass10MemberId",
];
