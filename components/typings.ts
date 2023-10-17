export interface IInvestmentGenericRowData {
  Name: string;
  IsFolder: boolean;
  Tag?: string;
}

export interface IInvestment {
  Name: string;
  Code: string;
  Lifetime: number;
  DepreciationType: null;
  DepreciationTime: number;
  DepreciationPercentage: number;
  ResidualValue: string;
  Description: string;
  Justification: string;
  ExpectedCompletionDate: Date;
  Creator: number;
  Created: Date;
  BalanceAccountList: number[];
  RevenueAccountList: number[];
  DepreciationAccountList: number[];
  ReverseAccountList: number[];
  FinanceAccountList: number[];
  PeriodId: number;
  CostCenterId: number;
  StartingDate: Date;
  EndingDate: Date;
  State: number;
  InvestmentGroupMembership: number[];
  PersonInCharge: string;
  PersonInChargePosition: string;
  Priority: null;
  Priority2: null;
  Priority3: null;
  InvestmentTypeId: null;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

export interface IInvestmentAccount {
  InvestmentAccountGroupId: number;
  AccountId: number;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

export interface IInvestmentCostCenter {
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

export interface IInvestmentGroup {
  Name: string;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

export interface IInvestmentGroupMember {
  InvestmentGroupId: number;
  Name: string;
  Code: string;
  Id: string;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

export interface IInvestmentGroupItemoriginal {
  Name: string;
  Code: string;
  Lifetime: number;
  DepreciationType: null;
  DepreciationTime: number;
  DepreciationPercentage: number;
  ResidualValue: string;
  Description: string;
  Justification: string;
  ExpectedCompletionDate: Date;
  Creator: number;
  Created: Date;
  BalanceAccountList: number[];
  RevenueAccountList: number[];
  DepreciationAccountList: number[];
  ReverseAccountList: number[];
  FinanceAccountList: number[];
  PeriodId: number;
  CostCenterId: number;
  StartingDate: Date;
  EndingDate: Date;
  State: number;
  InvestmentGroupMembership: number[];
  PersonInCharge: string;
  PersonInChargePosition: string;
  Priority: null;
  Priority2: null;
  Priority3: null;
  InvestmentTypeId: null;
  Id: number;
  OriginalId: number;
  RecordVersion: null;
  Path: null;
}

export interface IInvestmentTreeList {
  Id: number;
  ParentId: number;
  InvestmentId: number;
  Name: string;
  Code: null;
  IsFolder: boolean;
  Revenue: number;
  Expense: number;
  Net: number;
  Path: string;
}

export interface ISingleInvestment {
  Attachments: [];
  HasError: boolean;
  Name: string;
  Code: string;
  TotalCost: number;
  Lifetime: number;
  DepreciationType: null;
  DepreciationTime: number;
  DepreciationPercentage: number;
  ResidualValue: string;
  Description: string;
  Justification: string;
  PersonInCharge: string;
  PersonInChargePosition: string;
  ExpectedCompletionDate: Date;
  Creator: number;
  Created: Date;
  BalanceAccountList: number[];
  RevenueAccountList: number[];
  DepreciationAccountList: number[];
  ReverseAccountList: number[];
  FinanceAccountList: number[];
  AccountList: number[];
  PeriodId: number;
  CostCenterId: number;
  StartingDate: Date;
  EndingDate: Date;
  State: number;
  InvestmentGroupMembership: [
    {
      InvestmentGroupId: number;
      Name: string;
      Code: string;
      Id: number;
    },
  ];
  FormattedName: string;
  Priority: null;
  Priority2: null;
  Priority3: null;
  InvestmentTypeId: null;
  Id: number;
}

export interface IInvestmentGenericRowData {
  Name: string;
  IsFolder: boolean;
  Tag?: string;
}

export interface InvestmentBooking {
  $type: string;
  _costCenterId: number;
  _isLocked: boolean;
  _balanceAccountId: null;
  ObjectId: boolean;
  PeriodId: number;
  ReceiptTypeId: number;
  ReceiptClassId: number;
  CostCenterId: number;
  IsLocked: boolean;
  IsDivisionReceipt: boolean;
  IsInvestmentReceipt: boolean;
  IsImportReceipt: false;
  AccountId: number;
  InvestmentId: number;
  InvestmentCode: string;
  ChangeSetId: number;
  CustomClass1MemberId: null;
  CustomClass2MemberId: 1005;
  CustomClass3MemberId: null;
  CustomClass4MemberId: null;
  CustomClass5MemberId: null;
  CustomClass6MemberId: null;
  CustomClass7MemberId: null;
  CustomClass8MemberId: null;
  CustomClass9MemberId: null;
  CustomClass10MemberId: null;
  UserModifiedId: number;
  UserCreatedId: number;
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
  IsDeleted: boolean;
  IsSellerBooking: boolean;
  DateModified: string;
  Version: {
    $type: string;
    _version: number[];
  };
  ReceiptClass: number;
  Tag: number;
  UnboundReceiptSum: null;
  UnboundTopDownValue: null;
  UnboundDifference: null;
  IsForecastValueFromBudget: boolean;
  SellerObjectId: null;
  IsProductBooking: boolean;
  BalanceAccountId: null;
  Id: number;
}
