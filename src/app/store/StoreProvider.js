'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from './store';
import { initializeCount } from './counterSlice'

export default function StoreProvider({ count, children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    storeRef.current.dispatch(initializeCount(count))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}