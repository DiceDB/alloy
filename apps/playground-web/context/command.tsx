import { createContext, useContext, useState } from 'react';

const CommandContext = createContext<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}>({
  isOpen: true,
  setIsOpen: () => {},
});

export const useCommandContext = () => useContext(CommandContext);

const CommandProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CommandContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CommandContext.Provider>
  );
};

export default CommandProvider;
