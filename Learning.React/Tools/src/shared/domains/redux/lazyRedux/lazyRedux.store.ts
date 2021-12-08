import {
  combineReducers,
  Reducer,
  ReducersMapObject,
  createStore,
  StoreEnhancer,
  PreloadedState,
  Store,
} from 'redux';
import { Saga, SagaMiddleware, Task } from 'redux-saga';
import { ILazyStore } from './lazyRedux.model';

class LazyStore<TApplicationState> implements ILazyStore {
  store: Store;

  defaultReducers: any;

  sagaMiddleware: SagaMiddleware;

  injectedSagas: Map<string, Task>;

  injectedReducers: ReducersMapObject;

  constructor(
    defaultReducers: any,
    initialApplicationState: PreloadedState<TApplicationState>,
    middlewares: StoreEnhancer,
    sagaMiddleware: SagaMiddleware,
    rootSagas: Saga
  ) {
    this.defaultReducers = defaultReducers;
    this.sagaMiddleware = sagaMiddleware;
    this.injectedReducers = {};

    this.store = createStore(
      this.createRootReducer(),
      initialApplicationState,
      middlewares
    );

    this.injectedSagas = new Map<string, Task>([
      ['root', sagaMiddleware.run(rootSagas)],
    ]);
  }

  createRootReducer = (lazyReducers?: ReducersMapObject): Reducer =>
    // @ts-ignore
    combineReducers({ ...this.defaultReducers, ...lazyReducers });

  injectReducer = (key: string, reducer: Reducer): void => {
    if (this.doesReducerHasBeenInjected(key)) return;

    this.injectedReducers[key] = reducer;
    this.store.replaceReducer(this.createRootReducer(this.injectedReducers));
  };

  injectSaga = (key: string, saga: Saga): void => {
    if (this.doesSagaHasBeenInjected(key)) return;

    const task = this.sagaMiddleware.run(saga);

    this.injectedSagas.set(key, task);
  };

  doesReducerHasBeenInjected = (key: string): boolean =>
    Object.hasOwnProperty.call(this.injectedReducers, key);

  doesSagaHasBeenInjected = (key: string): boolean =>
    this.injectedSagas.has(key);
}

export default LazyStore;