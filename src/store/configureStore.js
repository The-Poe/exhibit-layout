import { configureStore } from "@reduxjs/toolkit";
import { rootReducer, rootEpic } from "./combinedReducerEpic";
import { createEpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer,
  // 加入 api middleware 來啟用 caching、invalidation、polling 等其他方法
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    epicMiddleware,
  ],
});

// epicMiddleware.run(rootEpic) should not be called before the middleware has been setup by redux.
// Provide the epicMiddleware instance to createStore() first.
epicMiddleware.run(rootEpic);

export default store;
