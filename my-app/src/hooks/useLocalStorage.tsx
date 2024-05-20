import React from "react";
import { anyToString, stringToAny, basicCmp } from "../utils/stringUtils";

export interface useLocalStorageProps<T> {
  key: string,
  initialValue: T,
  toString: (value: T) => string,
  fromString: (value: string) => T
  cmp: (a: T, b: T) => boolean
}

export type useLocalStorageReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];


export const useLocalStorage = <T,>(props: useLocalStorageProps<T>): useLocalStorageReturnType<T> => {
  const { key, initialValue, toString, fromString, cmp } = props;
  const [value, setValue] = React.useState<T>(initialValue);

  React.useEffect(() => {
    const localStorageItem = window.localStorage.getItem(key);
    if (localStorageItem) {
      setValue(fromString(localStorageItem));
    }
  }, [fromString, key]);

  React.useEffect(() => {
    if (cmp(value, initialValue)) {
      return;
    }
    window.localStorage.setItem(key, toString(value));
  }, [value, key, toString, initialValue, cmp])

  return [value, setValue];
}

export const useDefaultLocalStorage = <T,>(props: { key: string, initialValue: T }) => {
  const { key, initialValue } = props;
  return useLocalStorage<T>({
    key,
    initialValue,
    toString: anyToString,
    fromString: stringToAny,
    cmp: basicCmp, 
});
}
