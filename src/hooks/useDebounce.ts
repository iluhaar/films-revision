export const useDebounce = <T extends unknown[]>(func: (...args: T) => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: T) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
