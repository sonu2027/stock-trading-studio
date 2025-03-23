// src/utils/storage.ts
import { Strategy } from "../types/strategy";

export const saveStrategy = (strategy: Strategy) => {
    // const strategies = JSON.parse(localStorage.getItem('strategies') || [];
    const strategies = JSON.parse(localStorage.getItem('strategies') || '[]');
    strategies.push(strategy);
    localStorage.setItem('strategies', JSON.stringify(strategies));
  };
  
  export const loadStrategies = (): Strategy[] => {
    return JSON.parse(localStorage.getItem('strategies') || '[]');
  };