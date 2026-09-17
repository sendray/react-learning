export interface IComponentProps {
  label: string;
};

export interface IUserAddress {
  city: string;
}

export interface IUserCompany {
  name: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone?: string;
  address: IUserAddress;
  company: IUserCompany;
}

export interface ICardProps {
  resData: IUser;
}

export interface ICardRowProps {
  users: IUser[];
}