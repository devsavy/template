import { ISingleInvestment } from "../components/typings";

export const investmentTreeList = [
  {
    $type: "InvestmentTreeNode",
    Id: -23,
    ParentId: 0,
    InvestmentId: -23,
    Name: "Investointiryhmä",
    Code: null,
    IsFolder: true,
    Revenue: 0.0,
    Expense: -151999.9992,
    Net: -151999.9992,
    Path: "-23",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -24,
    ParentId: -23,
    InvestmentId: -24,
    Name: "Aineettomat oikeudet",
    Code: null,
    IsFolder: true,
    Revenue: 0.0,
    Expense: 0.0,
    Net: 0.0,
    Path: "-23/-24",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -48,
    ParentId: -24,
    InvestmentId: 148,
    Name: "CRM-ohjelmisto test",
    Code: "2000",
    IsFolder: false,
    Revenue: 0.0,
    Expense: 0.0,
    Net: 0.0,
    Path: "-23/-24/-48",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -25,
    ParentId: -23,
    InvestmentId: -25,
    Name: "Koneet ja Kalusto",
    Code: null,
    IsFolder: true,
    Revenue: 0.0,
    Expense: -151999.9992,
    Net: -151999.9992,
    Path: "-23/-25",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -49,
    ParentId: -25,
    InvestmentId: 113,
    Name: "Henkilökunnan kannettavat",
    Code: "100",
    IsFolder: false,
    Revenue: 0.0,
    Expense: -15000.0,
    Net: -15000.0,
    Path: "-23/-25/-49",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -50,
    ParentId: -25,
    InvestmentId: 114,
    Name: "Henkilökunnan näytöt",
    Code: "101",
    IsFolder: false,
    Revenue: 0.0,
    Expense: -9999.999600000001,
    Net: -9999.999600000001,
    Path: "-23/-25/-50",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -51,
    ParentId: -25,
    InvestmentId: 119,
    Name: "Auto",
    Code: "104",
    IsFolder: false,
    Revenue: 0.0,
    Expense: -54999.999599999988,
    Net: -54999.999599999988,
    Path: "-23/-25/-51",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -52,
    ParentId: -25,
    InvestmentId: 121,
    Name: "Kannettavat ICT",
    Code: "10011",
    IsFolder: false,
    Revenue: 0.0,
    Expense: -24999.999599999992,
    Net: -24999.999599999992,
    Path: "-23/-25/-52",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -53,
    ParentId: -25,
    InvestmentId: 127,
    Name: "Kalusteita",
    Code: "200",
    IsFolder: false,
    Revenue: 0.0,
    Expense: -17000.0004,
    Net: -17000.0004,
    Path: "-23/-25/-53",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -54,
    ParentId: -25,
    InvestmentId: 141,
    Name: "Siivousrobotti SINI",
    Code: "7800",
    IsFolder: false,
    Revenue: 0.0,
    Expense: -30000.0,
    Net: -30000.0,
    Path: "-23/-25/-54",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -29,
    ParentId: 0,
    InvestmentId: -29,
    Name: "Hyödyketyyppi",
    Code: null,
    IsFolder: true,
    Revenue: 0.0,
    Expense: -126999.99959999998,
    Net: -126999.99959999998,
    Path: "-29",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -33,
    ParentId: -29,
    InvestmentId: -33,
    Name: "Kuljetusvälineet",
    Code: null,
    IsFolder: true,
    Revenue: 0.0,
    Expense: -54999.999599999988,
    Net: -54999.999599999988,
    Path: "-29/-33",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -55,
    ParentId: -33,
    InvestmentId: 119,
    Name: "Auto",
    Code: "104",
    IsFolder: false,
    Revenue: 0.0,
    Expense: -54999.999599999988,
    Net: -54999.999599999988,
    Path: "-29/-33/-55",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -39,
    ParentId: -29,
    InvestmentId: -39,
    Name: "Muut koneet ja kalusto",
    Code: null,
    IsFolder: true,
    Revenue: 0.0,
    Expense: -47000.000400000004,
    Net: -47000.000400000004,
    Path: "-29/-39",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -56,
    ParentId: -39,
    InvestmentId: 127,
    Name: "Kalusteita",
    Code: "200",
    IsFolder: false,
    Revenue: 0.0,
    Expense: -17000.0004,
    Net: -17000.0004,
    Path: "-29/-39/-56",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -57,
    ParentId: -39,
    InvestmentId: 141,
    Name: "Siivousrobotti SINI",
    Code: "7800",
    IsFolder: false,
    Revenue: 0.0,
    Expense: -30000.0,
    Net: -30000.0,
    Path: "-29/-39/-57",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -42,
    ParentId: -29,
    InvestmentId: -42,
    Name: "Tietokonelaitteet",
    Code: null,
    IsFolder: true,
    Revenue: 0.0,
    Expense: -24999.999600000003,
    Net: -24999.999600000003,
    Path: "-29/-42",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -58,
    ParentId: -42,
    InvestmentId: 113,
    Name: "Henkilökunnan kannettavat",
    Code: "100",
    IsFolder: false,
    Revenue: 0.0,
    Expense: -15000.0,
    Net: -15000.0,
    Path: "-29/-42/-58",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -59,
    ParentId: -42,
    InvestmentId: 114,
    Name: "Henkilökunnan näytöt",
    Code: "101",
    IsFolder: false,
    Revenue: 0.0,
    Expense: -9999.999600000001,
    Net: -9999.999600000001,
    Path: "-29/-42/-59",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -43,
    ParentId: -29,
    InvestmentId: -43,
    Name: "Tietokoneohjelmistot",
    Code: null,
    IsFolder: true,
    Revenue: 0.0,
    Expense: 0.0,
    Net: 0.0,
    Path: "-29/-43",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -60,
    ParentId: -43,
    InvestmentId: 148,
    Name: "CRM-ohjelmisto test",
    Code: "2000",
    IsFolder: false,
    Revenue: 0.0,
    Expense: 0.0,
    Net: 0.0,
    Path: "-29/-43/-60",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -45,
    ParentId: 0,
    InvestmentId: -45,
    Name: "Tyyppi",
    Code: null,
    IsFolder: true,
    Revenue: 0.0,
    Expense: 0.0,
    Net: 0.0,
    Path: "-45",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -47,
    ParentId: -45,
    InvestmentId: -47,
    Name: "Uusinvestointi",
    Code: null,
    IsFolder: true,
    Revenue: 0.0,
    Expense: 0.0,
    Net: 0.0,
    Path: "-45/-47",
  },
  {
    $type: "InvestmentTreeNode",
    Id: -61,
    ParentId: -47,
    InvestmentId: 148,
    Name: "CRM-ohjelmisto test",
    Code: "2000",
    IsFolder: false,
    Revenue: 0.0,
    Expense: 0.0,
    Net: 0.0,
    Path: "-45/-47/-61",
  },
];

export const singleImvestment: ISingleInvestment = {
  Attachments: [],
  HasError: false,
  Name: "Kalusteita",
  Code: "200",
  TotalCost: 0.0,
  Lifetime: 0,
  DepreciationType: null,
  DepreciationTime: 0,
  DepreciationPercentage: 0.0,
  ResidualValue: "",
  Description: "",
  Justification: "",
  PersonInCharge: "",
  PersonInChargePosition: "",
  ExpectedCompletionDate: "0001-01-01T00:00:00",
  Creator: 1041,
  Created: "2020-09-14T00:00:00",
  BalanceAccountList: [66448],
  RevenueAccountList: [],
  DepreciationAccountList: [],
  ReverseAccountList: [],
  FinanceAccountList: [],
  AccountList: [66448],
  PeriodId: 65,
  CostCenterId: 21711,
  StartingDate: "2020-01-01T00:00:00",
  EndingDate: "2020-12-31T00:00:00",
  State: 0,
  InvestmentGroupMembership: [
    {
      $type: "InvestmentGroupMember",
      InvestmentGroupId: 1,
      Name: "Koneet ja Kalusto",
      Code: "1",
      Id: 1,
    },
    {
      $type: "InvestmentGroupMember",
      InvestmentGroupId: 5,
      Name: "Muut koneet ja kalusto",
      Code: "220",
      Id: 21,
    },
  ],
  FormattedName: "Kalusteita (200)",
  Priority: null,
  Priority2: null,
  Priority3: null,
  InvestmentTypeId: null,
  Id: 127,
};

export const investmentGroups = [
  {
    $type: "InvestmentGroupRecord",
    Name: "Investointiryhmä",
    Id: 1,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupRecord",
    Name: "Hyödyketyyppi",
    Id: 5,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupRecord",
    Name: "Tyyppi",
    Id: 6,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
];

export const investmentGroupMembers = [
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 1,
    Name: "Koneet ja Kalusto",
    Code: "1",
    Id: 1,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 1,
    Name: "Rakennukset",
    Code: "2",
    Id: 2,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 1,
    Name: "Aineettomat oikeudet",
    Code: "3",
    Id: 7,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 1,
    Name: "Osakkeet ja osuudet",
    Code: "4",
    Id: 8,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 1,
    Name: "Liikenneväylät",
    Code: "5",
    Id: 24,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 5,
    Name: "Tietokoneohjelmistot",
    Code: "100",
    Id: 9,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 5,
    Name: "Muut aineettomat hyödykkeet",
    Code: "110",
    Id: 10,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 5,
    Name: "Maa- ja vesialueiden  hankinta",
    Code: "120",
    Id: 11,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 5,
    Name: "Maa- ja vesialueiden parannusinvestointi",
    Code: "130",
    Id: 12,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 5,
    Name: "Asuinrakennusten uushankinta",
    Code: "140",
    Id: 13,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 5,
    Name: "Asuinrakennusten korjausinvestointi",
    Code: "150",
    Id: 14,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 5,
    Name: "Muiden rakennusten uushankinta",
    Code: "160",
    Id: 15,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 5,
    Name: "Muut rakennukset, korjausinvestointi",
    Code: "170",
    Id: 16,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 5,
    Name: "Kiinteät rakenteet ja laitteet",
    Code: "180",
    Id: 17,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 5,
    Name: "Kuljetusvälineet",
    Code: "190",
    Id: 18,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 5,
    Name: "Tietokonelaitteet",
    Code: "200",
    Id: 19,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 5,
    Name: "Viestintälaitteet",
    Code: "210",
    Id: 20,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 5,
    Name: "Muut koneet ja kalusto",
    Code: "220",
    Id: 21,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 5,
    Name: "Muut aineelliset hyödykkeet",
    Code: "230",
    Id: 22,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 5,
    Name: "Osakkeet ja osuudet, sijoitukset",
    Code: "240",
    Id: 23,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 6,
    Name: "Uusinvestointi",
    Code: "100",
    Id: 25,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
  {
    $type: "InvestmentGroupMemberRecord",
    InvestmentGroupId: 6,
    Name: "Korjausinvestointi",
    Code: "200",
    Id: 26,
    OriginalId: 0,
    RecordVersion: null,
    Path: null,
  },
];
