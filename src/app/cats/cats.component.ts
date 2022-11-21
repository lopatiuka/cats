import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCats, getBreeds } from '../cats.actions';
import { FormControl } from '@angular/forms';
import { Breed } from '../interfaces/breed';
import { Cat } from '../interfaces/cat';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  cats$: Observable<Cat[]> = this.store.select(state => state.cats.catsList);
  breeds$: Observable<Breed[]> = this.store.select(state => state.cats.breedsList);
  breed: any;
  limit = new FormControl("10");

  constructor(private store: Store<{ cats: { catsList: Cat[], breedsList: Breed[] } }>) {}

  showAll(): void {
    this.store.dispatch(getCats({ payload: { limit: Number(this.limit.value) }}));
  }

  getCatsByBreed(): void {
    this.store.dispatch(getCats({ payload: { breed:this.breed.id, limit: Number(this.limit.value) } }));
  }

  ngOnInit(): void {
    this.store.dispatch(getCats({ payload: { limit: Number(this.limit.value) }}));
    this.store.dispatch(getBreeds());
  }
}
