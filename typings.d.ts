import { Row } from "devextreme/ui/tree_list";
import { Item } from "devextreme/ui/tree_view";

export interface IRootState {
  store: {
    isSideNavOpen: boolean;
    isPeriodIdPopupOpen: boolean;
    selectedBudget: { id: number; nameYear: string; dateStart: date; budgetInputPrecision: number; fullName: string };
  };
}

export interface Account {
  // $type: string;
  ParentId: number;
  AccountTypeId: number;
  ReportOverrideAccountTypeId: null;
  AccountReportTypeId: number;
  CalculationMethodId: number;
  ForecastCalculationMethodId: number;
  AccountBehaviorId: number;
  UserCreatedId: number;
  UserModifiedId: number;
  Number: string;
  XBRLCalculationMethod: number;
  Text: string | null;
  Text2: string | null;
  Text3: string | null;
  Comment: null;
  Formula: null;
  AnnualForecastFormula: null;
  CustomForecastFormula: null;
  IsFolder: boolean;
  Index: number;
  PeriodId: number;
  CustomClassMemberId: null;
  BudgetDraftText: string | null;
  IsBalanceAccount: boolean;
  CustomClassesXml: null;
  Id: number;
  OriginalId: number;
  RecordVersion?: number[];
  Path?: string;
}

export interface IAccountCustomClassMember {
  PeriodId: number;
  AccountId: number;
  CustomClassId: number;
  CustomClassMemberId: number;
}

// budget view
export interface IOrganization {
  $type: string;
  ParentId: number;
  StructureTypeId: number;
  FrameCalculationMethodId: number;
  AnnnualForecastCalculationMethodId: number;
  BalanceCalculationMethodId: number;
  StateId: null;
  UserModifiedId: number;
  UserCreated: number;
  Name: string;
  Name2: string;
  Name3: string;
  Code: string;
  Comment: null;
  IsFolder: boolean;
  IsEnabled: boolean;
  IsInvestmentCostCenter: boolean;
  IsBudgetDraftCostCenter: boolean;
  DateCreated: Date;
  DateModified: Date;
  Index: number;
  ParallelAccountGroupId: number;
  BalanceCalculationId: number;
  Id: number;
  OriginalId: number;
  RecordVersion: number[];
  Path: string;
}

export interface ICustomColumn {
  $type: string;
  CustomColumnUnitId: number;
  Name: string;
  Formula: string;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

export interface IAccountBudgeting {
  Id: number;
  ParentId: number;
  Text: string;
  Number: string;
  Level: number;
  AccountType: number;
  IsFolder: boolean;
  Path: string;
  Index: number;
  Talousarvio: number;
  "Edellinen toteuma": number;
  Toteuma: number;
  Ennuste: number;
  "Edellinen ennuste": number;
  Raami: number;
  "Vertailu raamiin": number;
  "Edellinen talousarvio": number;
  AccountTypeImageUrl: string;
  RowBackgroundColor: string;
  HasFormula: boolean;
  Filler: null;
  OriginalId: number;
}

export interface IBooking {
  $type: string;
  ObjectId: number;
  PeriodId: number;
  ReceiptClassId: number;
  ReceiptTypeId: number;
  CostCentreId: number;
  AccountId: number;
  InvestmentId: null;
  InvestmentCode: string;
  ChangeSetId: number;
  CustomClass1MemberId: null;
  CustomClass2MemberId: null;
  CustomClass3MemberId: null;
  CustomClass4MemberId: null;
  CustomClass5MemberId: null;
  CustomClass6MemberId: null;
  CustomClass7MemberId: null;
  CustomClass8MemberId: null;
  CustomClass9MemberId: null;
  CustomClass10MemberId: null;
  UserCreatedId: number;
  UserModifiedId: number;
  YearValue: number;
  Month1: number;
  Month2: number;
  Month3: number;
  Month4: number;
  Month5: number;
  Month6: number;
  Month7: number;
  Month8: number;
  Month9: number;
  Month10: number;
  Month11: number;
  Month12: number;
  DateModified: Date;
  IsImportReceipt: boolean;
  IsDivisionReceipt: boolean;
  IsInvestmentReceipt: boolean;
  IsDeleted: boolean;
  IsLocked: boolean;
  IsSellerBooking: boolean;
  SellerObjectId: null;
  Tag: null;
  BalanceAccountId: null;
  Id: number;
  OriginalId: number;
  RecordVersion: number[];
  Path: null;
  type: string;
}

export interface IBookingNoteByPeriod {
  $type: string;
  BookingId: number;
  Month: number;
  Text: string;
  DateCreated: Date;
  DateModified: null;
  UserCreated: string;
  UserModified: null;
  IsForecastNote: boolean;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

export interface IBookingChangeSet {
  $type: string;
  UserId: number;
  DateCreated: Date;
  Comment: string;
  BookingCount: number;
  CostCentreCount: number;
  ForecastValueCount: number;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

export interface IColumnSelectorToggle {
  id: string | number;
  dataField: string;
  isActive: boolean;
}

interface IPanelData {
  id: number;
  title: string;
  description: string;
}

export interface StructureType {
  $type: string;
  Name: string;
  IconIndex: number;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

export interface BalanceCalculation {
  $type: string;
  Name: string;
  ParallelAccountGroupId: number;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

export interface BudgetDraftVersion {
  $type: string;
  Name: string;
  PeriodId: number;
  IsActive: boolean;
  IsDeleted: boolean;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

export interface CostCenterBudgetDraftName {
  $type: string;
  CostCenterId: number;
  BudgetDraftVersionId: number;
  Name: string;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

export interface IRowDataEventItem {
  cellElement: HTMLElement;
  column: any;
  columnIndex: number;
  component: TreeList;
  element: HTMLElement;
  model: any;
  row: Row;
  rowIndex: number;
}

interface IContextMenuItem extends Item {
  id: string;
  text: string;
  shortcut?: string;
  customIcon?: JSX.Element & {
    color?: string;
    className?: string;
  };
  disabled?: boolean;
  beginGroup?: boolean;
}

export interface IContextMenuItems extends Item {
  id: string;
  text: string;
  shortcut?: string;
  customIcon?: JSX.Element & {
    color?: string;
    className?: string;
  };
  disabled?: boolean;
  beginGroup?: boolean;
  items?: IContextMenuItem[];
}

export interface ISideNavDataSource extends Item {
  id: string;
  name: string;
  categoryId?: string;
  nameFinnish: String;
  path: string;
  hasChildren: boolean;
  customIcon: JSX.Element & {
    color?: string;
    className?: string;
  };
}

export interface IPeriod {
  $type: string;
  ChangeSetId: number;
  PreviousPeriodId: null;
  NextPeriodId: null;
  UserCreatedId: number;
  DateCreated: Date;
  PeriodStateId: number;
  BudgetingMethodId: number;
  Name: string;
  Code: string;
  DateStart: Date;
  DateEnd: Date;
  Description: string;
  BudgetSignature: string;
  RealizationSignature: stting;
  DateOfLastEdit: null;
  ForecastLabel1: string;
  ForecastLabel2: string;
  ForecastLabel3: string;
  ForecastLabel4: string;
  ForecastLabel5: string;
  ForecastLabel6: string;
  ForecastLabel7: string;
  ForecastLabel8: string;
  ForecastLabel9: string;
  ForecastLabel10: string;
  FormulaRounding: number;
  AnnualForecastRounding: number;
  BudgetInputPrecision: number;
  DefaultCustomClassFilters: string;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

export interface IBookingPostDataForAPI {
  Bookings: IBooking[];
  UserCreatedId: number;
  ChangeSetId: null;
  ChangeSetComment: string;
}

export interface IBookingNoteUpSertDeleteDataForAPI {
  BookingId: number;
  Month: number;
  Text: string;
  DateCreated: Date | null;
  DateModified: Date | null;
  UserCreated: string;
  UserModified: string | null;
  IsForecastNote: boolean;
  Id: number;
  OriginalId: number;
  RecordVersion: number[];
  Path: null;
}

interface ICostStructureStateDataForAPI {
  CostCenterId: number;
  UserId: number;
  StateId: number;
  ViewId: number;
  Message: string;
}

interface ICostStructureState {
  $type: string;
  PeriodId: number;
  CostCentreId: number;
  StatusId: number;
  ViewId: number;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

export interface ICostCentersDataForPopup {
  stateId: number;
  contextMenuTitle: string;
  newStateText: string;
  costCenters: IOrganization[] | IOrganization | null;
}

interface ICustomClass {
  $type: string;
  Name: string;
  IsEnabled: boolean;
  IsEnabledGlobally: boolean;
  FormattingId: number;
  IsPeriodRestricted: boolean;
  IsAccountCustomClass: boolean;
  RequireCounterBooking: boolean;
  ChainCustomClass: boolean;
  IsSectorCustomClass: boolean;
  LinksToSectorCustomClass: boolean;
  IsServiceCustomClass: boolean;
  LinksToServiceCustomClass: boolean;
  IsCommodityType: boolean;
  LinksToCommodityTypeCustomClass: boolean;
  LinksToBuyerSellerCostCenterCode: boolean;
  IsInternalExternalCustomClass: boolean;
  LinksToInternalExternalCustomClass: boolean;
  IsRequiredByAccounts: boolean;
  ExportToExportValues: boolean;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

interface ICustomClassMember {
  $type: string;
  ParentId: number;
  Index: number;
  CustomClassId: number;
  Name: string;
  Name2: string;
  Name3: string;
  Code: string;
  IsDeleted: boolean;
  LinkedCustomClassId: null;
  RequireCounterBooking: true;
  SectorCustomClassMemberId: null;
  ServiceCustomClassMemberId: null;
  CommodityTypeCustomClassMemberId: null;
  InternalExternalTypeCustomClassMemberId: null;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

interface IResultSetForCustomClassMemberByClass {
  $type: string;
  ParentId: number;
  Index: number;
  CustomClassId: number;
  Name: string;
  Name2: string;
  Name3: string;
  Code: string;
  IsDeleted: boolean;
  LinkedCustomClassId: null;
  RequireCounterBooking: true;
  SectorCustomClassMemberId: null;
  ServiceCustomClassMemberId: null;
  CommodityTypeCustomClassMemberId: null;
  InternalExternalTypeCustomClassMemberId: null;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

interface ICustomClassMemberByClass {
  $type: string;
  ResultSet: IResultSetForCustomClassMemberByClass[];
  CustomResultSet: null;
  Exception: null;
  ChangeSetId: number;
  StatusCode: number;
  ReturnCode: number;
  IsEmpty: boolean;
  RowsAffected: number;
  ErrorMessage: string;
  LastInsertedId: number;
  CmdText: string;
  HasException: boolean;
  QuerySucceeded: boolean;
  HasConflict: boolean;
  ConflictingRecord: null;
  RecordVersion: null;
  Number: number;
  Path: null;
}

export interface ISelectedAccountData {
  accountId: number | null;
  previousSum: number;
}

export interface IAccountBudgetingDataForAPI {
  CostCenterId: number | null;
  MonthFilterString: string;
  ClassFilterString: string;
  CostCenterType: number;
  UserId: number;
  PreviousRealisationEnabled: boolean;
  RealisationEnabled: boolean;
  PredictionEnabled: boolean;
  FrameEnabled: boolean;
  PreviousBudgetEnabled: boolean;
  PreviousPredictionEnabled: boolean;
  BypassCache: boolean;
}

export interface IAccountBudgetingCustomColumnDataForAPI {
  CostCenterId: number | null;
  MonthFilterString: string;
  ClassFilterString: string;
  CostCenterType: number;
  UserId: number;
  CustomColumnNames: string;
  CustomColumnFormulas: string;
  BypassCache: boolean;
}
