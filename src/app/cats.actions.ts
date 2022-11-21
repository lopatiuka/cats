import { createAction, props } from '@ngrx/store';
import { catsActions } from './cats.action.types';
import { Cat } from './interfaces/cat';
import { Breed } from './interfaces/breed';
import { Payload } from './interfaces/payload';

export const getCats = createAction(catsActions.GET_ALL_CATS, props<{payload: Payload}>());
export const getCatsSuccess = createAction(catsActions.GET_ALL_CATS_SUCCESS, props<{payload: Cat[]}>());

export const getBreeds = createAction(catsActions.GET_BREEDS);
export const getBreedsSuccess = createAction(catsActions.GET_BREEDS_SUCCESS, props<{payload: Breed[]}>());