'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue)
  const [isHydrated, setIsHydrated] = useState(false)
  const storedValueRef = useRef<T>(storedValue)
  storedValueRef.current = storedValue

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        const parsed = JSON.parse(item)
        setStoredValue(parsed)
        storedValueRef.current = parsed
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error)
    }
    setIsHydrated(true)
  }, [key])

  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValueRef.current) : value
      setStoredValue(valueToStore)
      storedValueRef.current = valueToStore
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error('Error writing to localStorage:', error)
    }
  }, [key])

  return [isHydrated ? storedValue : initialValue, setValue]
}
