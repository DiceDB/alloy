export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export const handleResult = (
  result: any,
  newOutput: string,
  setOutput: any,
  onCommandExecuted: any,
) => {
  if (result?.body?.data) {
    setOutput((prevOutput: any) => [
      ...prevOutput,
      newOutput,
      result?.body?.data,
    ]);
  } else if (result?.body?.error) {
    setOutput((prevOutput: any) => [
      ...prevOutput,
      newOutput,
      result?.body?.error,
    ]);
  }

  const commandsLeft = result?.headers?.['x-ratelimit-remaining'];
  const cleanupTimeLeft = 10;
  onCommandExecuted(commandsLeft, cleanupTimeLeft);
};
