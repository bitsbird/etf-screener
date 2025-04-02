import { useState } from 'react';
export type PropertySetter<T> = (property: T) => void;
const usePropertyHook = <T,>(initialValue: T) => {
  const [property, setProperty] = useState<T>(initialValue);

  const setPropertyValue = (value: T) => {
    setProperty(value);
  };

  return { property, setPropertyValue };
};
export default usePropertyHook;
