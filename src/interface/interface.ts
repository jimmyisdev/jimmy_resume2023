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
	frontend?: string,
	backend?: string
  };
  tools: string[];
};
