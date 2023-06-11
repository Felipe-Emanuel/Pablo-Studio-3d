'use client';

import { useRef } from "react";

export const useDebounce = () => {
  const timeOutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounced = (fn: () => void, delay: number) => {
    if (timeOutRef.current) clearTimeout(timeOutRef.current);

    timeOutRef.current = setTimeout(() => {
      console.log("debounced")
      fn();
    }, delay)
  }

  return {debounced}
}
