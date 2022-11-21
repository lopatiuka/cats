import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { catsActions } from './cats.action.types';
import { getCats, getBreeds, getBreedsSuccess, getCatsSuccess } from './cats.actions';
import { CatsService } from './cats.service';

@Injectable()
export class CatsEffects {

  constructor(
      private actions$: Actions,
      private catsService: CatsService
  ) {}

  getCats$ = createEffect(() => this.actions$.pipe(
    ofType(getCats),
    mergeMap(action => this.catsService.getCats(action.payload.limit, action.payload.breed)
      .pipe(
        map(cats => getCatsSuccess({ payload: cats })),
        catchError(() => of({ type: catsActions.FAIL }))
      ))
    )
  );

  getBreeds$ = createEffect(() => this.actions$.pipe(
    ofType(getBreeds),
    mergeMap(() => this.catsService.getBreeds()
      .pipe(
        map(breeds => getBreedsSuccess({ payload: breeds })),
        catchError(() => of({ type: catsActions.FAIL }))
      ))
    )
  );
}