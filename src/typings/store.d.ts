declare interface IDraftState {
  isChecked: boolean;
  content: string;
}

declare interface IStoreState {
  draft: IDraftState;
}
