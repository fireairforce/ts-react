export declare interface IDraftState {
  isChecked: boolean;
  content: string;
}

export declare interface IStoreState {
  route: {
    location: Location;
  };
  draft: IDraftState;
}
