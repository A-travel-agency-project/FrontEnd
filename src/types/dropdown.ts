export type FilterDropdownProps<T> = {
  list: T[];
  id: string;
  handleClick: (value: string, id: string) => void;
  label?: string;
  divStyle?: string;
  labeStyle?: string;
  selectStyle?: string;
  optionStyle?: string;
};
