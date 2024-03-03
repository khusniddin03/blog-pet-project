import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { ICounterSchema } from '../../types';

export const getCounterValue = createSelector(
    getCounter,
    (counter: ICounterSchema) => counter.value,
);
