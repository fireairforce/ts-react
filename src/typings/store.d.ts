declare interface IDraftState {
  id?: number;
  isChecked: boolean;
  content: string;
}

declare type IList = IDraftState[];

declare interface IStoreState {
  draft: {
    [id: number]: IDraftState;
  };
  list: IList;
}
