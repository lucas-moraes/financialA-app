export type TStore = {
  mode: string;
  updateMode: (newMode: string) => void;

  showModal: boolean;
  updateShowModal: () => void;

  selectedId: number;
  updateSelectedId: (selectedId: number) => void;

  toEdit: boolean;
  updateToEdit: () => void;

  toChoose: boolean;
  updateToChoose: () => void;

  toLaunchMovement: boolean;
  updateToLaunchMovement: () => void;

  toAddCategory: boolean;
  updateToAddCategory: () => void;
};
