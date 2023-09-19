export type reposType = {
  frontend?: string;
  backend?: string;
}

export type projectItemType = {
  name: string;
  description: string[];
  tools: string[];
  tasks: string[];
  url: string;
  repos: reposType;
}

export type workItemType = {
  period: string,
  company: string,
  title: string,
  tasks: string[],
  projects: projectItemType[]
}

export type PropsType = {
  children: string | JSX.Element | JSX.Element[];
};

export type ThemeType = "light" | "dark";

export type ThemeContextType = {
  theme: ThemeType;
  updateTheme: (theme: ThemeType) => void;
};

export type ModalContextType = {
  showModal: boolean;
  modalType: string;
  modalData: projectItemType | void;
  setShowModal: (showModal: boolean) => void;
  setModalType: (modalType: string) => void;
  setModalData: (modalData: projectItemType) => void;
};