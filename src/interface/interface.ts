export type jobInfoDataType = string[];
export type jobProjectItemType = {
  name: string;
  description: string[];
  tasks: string[];
  tools: string[];
};
export type sideProjectItemType = {
  name: string;
  url: string;
  repos: {
    frontend?: string;
    backend?: string;
  };
  tools: string[];
};

export type PropsType = {
  children: string | JSX.Element | JSX.Element[];
};

export type ThemeType = "light" | "dark";

export type ThemeContextType = {
  theme: ThemeType;
  updateTheme: (theme: ThemeType) => void;
};