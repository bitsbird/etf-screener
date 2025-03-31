import { useState } from 'react';
export type PropertySetter<T> = React.Dispatch<React.SetStateAction<T>>;
const usePropertyHook = <T,>(initialValue: T) => {
  const [property, setProperty] = useState<T>(initialValue);

  const setPropertyValue = (value: T) => {
    setProperty(value);
  };

  return { property, setPropertyValue };
};
export default usePropertyHook;
