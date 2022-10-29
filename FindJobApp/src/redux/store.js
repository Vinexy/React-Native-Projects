import {configureStore} from '@reduxjs/toolkit';

import JobsSlice from './Jobs/JobsSlice';

export const store = configureStore({
  reducer: {
    jobs: JobsSlice,
  },
});
