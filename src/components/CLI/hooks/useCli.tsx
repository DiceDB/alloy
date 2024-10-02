// react
import { useState, useEffect, useRef, KeyboardEvent, ChangeEvent } from "react";

// utils
import { handleCommand } from "@/shared/utils/cliUtils";

export const useCli = (decreaseCommandsLeft: () => void) => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommandWrapper = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand({ command, setOutput });
      setCommand("");
      decreaseCommandsLeft();
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommandWrapper(e);
    }
  };

  return {
    handleInputChange,
    handleKeyDown,
    terminalRef,
    inputRef,
    output,
    command,
  };
};
