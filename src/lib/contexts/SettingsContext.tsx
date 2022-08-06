import { createContext, PropsWithChildren, useContext, useState } from "react";

export interface SettingsContext {
  isManualControl: boolean;
  setIsManualControl: (bool: boolean) => void;
}

export const Context = createContext<SettingsContext>({
  isManualControl: false,
  setIsManualControl: (bool: boolean) => {},
});

export function SettingsProvider({ children }: PropsWithChildren<any>) {
  const [isManualControl, setIsManualControl] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        isManualControl,
        setIsManualControl: (bool: boolean) => {
          setIsManualControl(bool);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useSettingsContext = () => {
  return useContext<SettingsContext>(Context);
};
