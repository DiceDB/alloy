import { useState, useEffect } from "react";

export const usePlayground = () => {
  const [search, setSearch] = useState("");
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);
  const [commandsLeft, setCommandsLeft] = useState<number>(1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const decreaseCommandsLeft = () => {
    setCommandsLeft((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return {
    decreaseCommandsLeft,
    search,
    timeLeft,
    commandsLeft,
    setSearch,
    setTimeLeft,
    setCommandsLeft,
  };
};
