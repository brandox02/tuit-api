export interface GetTuitsSearchParams {
  searchTerm: string;
  orderBy: string;
}

export interface TuitCreate {
  message: string;
}

export class ResourceNotFoundError extends Error {
  constructor() {
    super(`Resource not found`);
  }
}
