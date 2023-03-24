export interface ExtractModel {

  summary: Summary;
  pagination: Pagination;
  items: [Items]

}


export interface Summary {
  totalQuantity: number;
  totalAmount: number;
  totalNetAmount: number;
  totalAverageAmount: number;
  initialDate: string;
  finalDate: string;

}

export interface Pagination {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  numPages: number;
  lastPage: boolean;
  firstPage: boolean;
}


export interface Items {
  id: string,
  merchantId: string,
  paymentNode: number,
  cnpjRoot: number,
  date: string,
  paymentType: string,
  cardBrand: string,
  authorizationCode: number,
  truncatedCardNumber: number,
  grossAmount: number,
  netAmount: number,
  terminal: string,
  administrationFee: number,
  channelCode: number,
  channel: string,
  withdrawAmount: number,
  minimumMDRAmmount: number;
  mdrTaxAmount: number;
  mdrFeeAmount: number,
  status: string,
}


