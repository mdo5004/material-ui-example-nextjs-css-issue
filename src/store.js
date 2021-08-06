/* eslint-disable no-underscore-dangle */
import { useMemo } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import targetedDeviceReducer from './targetedDeviceSlice';

let store;

function initStore(initialState) {
  return createStore(
    combineReducers({
      targetedDevice: targetedDeviceReducer,
    }),
    initialState,
    applyMiddleware(thunkMiddleware),
  );
}

export const initializeStore = (preloadedState) => {
  if (preloadedState) console.log('preloadedState = ' + JSON.stringify(preloadedState));

  // if there is a persisted state on the client, let's load it as this initial state.
  // I'm not sure what preloadedState would even contain...
  let serializedState;
  if (typeof window !== 'undefined') {
    serializedState = localStorage.getItem('state');
  }
  if (serializedState) {
    serializedState = JSON.parse(serializedState);
  }
  let _store = store || initStore({ ...preloadedState, ...serializedState });

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
}

function save() {
  saveState(store.getState());
}
export function useStore(initialState) {
  store = useMemo(() => initializeStore(initialState), [initialState]);
  store.subscribe(save);

  return store;
}
