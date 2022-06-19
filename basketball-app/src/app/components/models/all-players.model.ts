export interface IAllPlayersResponse {
  data: Datum[];
  meta: Meta;
}

export interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  fullName: string;
  name: string;
}

export interface Datum {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  heightFeet: number;
  heightInches: number;
  weightPounds: number;
  team: Team;
}

export interface Meta {
  totalPages: number;
  currentPage: number;
  nextPage: number;
  perPage: number;
  totalCount: number;
}


