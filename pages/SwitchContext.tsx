import { createContext } from 'react';

type SwitchContextType = {
  switchState: boolean;
  setSwitchState: (state: boolean) => void;
};

export const SwitchContext = createContext<SwitchContextType>({
  switchState: false,
  setSwitchState: () => {},
});
