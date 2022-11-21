import { createReducer, on } from '@ngrx/store';
import { getCatsSuccess, getBreedsSuccess } from './cats.actions';
import { Breed } from './interfaces/breed';
import { Cat } from './interfaces/cat';

export const initialState = {
  catsList: [] as Cat[],
  breedsList: [] as Breed[],
};

export const catsReducer = createReducer(
  initialState,
  on(getCatsSuccess, (state, {payload} ) => ({...state, catsList: [...payload]})),
  on(getBreedsSuccess, (state, {payload} ) => ({...state, breedsList: [...payload]})),
);