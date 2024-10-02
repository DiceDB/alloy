// react
import { useState, useEffect, useRef, KeyboardEvent, ChangeEvent } from "react";

// utils
import { handleCommand } from "@/shared/utils/cliUtils";
import blacklistedCommands from "@/shared/utils/blacklist"; // Assuming you added blacklist here

export const useCli = (decreaseCommandsLeft: () => void) => {
  // states
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [tempCommand, setTempCommand] = useState("");
  //Initialise the command history with sessionStorage
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  // useRefs
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommandWrapper = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const commandName = command.trim().split(" ")[0].toUpperCase(); // Extract the command

      if (blacklistedCommands.includes(commandName)) {
        setOutput((prevOutput) => [
          ...prevOutput,
          `(error) ERR unknown command '${commandName}'`,
        ]);
      } else {
        handleCommand({ command, setOutput }); // Execute if not blacklisted
      }

      setCommand(""); // Clear input
      decreaseCommandsLeft(); // Call to update remaining commands
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  //Load initial command history if present
  useEffect(() => {
    const savedHistory = sessionStorage.getItem("terminalHistory");
    const commandHistory = savedHistory ? JSON.parse(savedHistory) : [];
    setCommandHistory(commandHistory);
  }, []);

  // Save to session storage whenever commandHistory changes
  useEffect(() => {
    sessionStorage.setItem("terminalHistory", JSON.stringify(commandHistory));
  }, [commandHistory]);

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
      if (command.trim().length !== 0) {
        setCommandHistory((prev) => [...prev, command]);
        setHistoryIndex(-1);
      }
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        if (historyIndex === -1) {
          // Save current input when starting to navigate history
          setTempCommand(command);
        }
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > -1) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        if (newIndex === -1) {
          // Restore the saved input when reaching the bottom
          setCommand(tempCommand);
        } else {
          setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
    }
  };

  return {
    handleInputChange,
    handleKeyDown,
    terminalRef,
    inputRef,
    output,
    setOutput,
    command,
    tempCommand,
    setTempCommand,
  };
};
