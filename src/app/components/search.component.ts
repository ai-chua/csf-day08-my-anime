import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormArray, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms'
import { AnimeDatabase } from '../searches.database'
import { SearchQuery, Type } from '../models'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup


  constructor(private router: Router, private fb: FormBuilder, private animeDB: AnimeDatabase) { }

  ngOnInit(): void {
    this.searchForm = this.createSearch()
  }

  search() {
    const search: SearchQuery = {
      q: this.searchForm.get('q').value,
      type: this.searchForm.get('type').value == 'anime' ? Type.Anime : Type.Manga
    }
    console.info('Pressed GO button, redirecting to results >>> ', search)
    this.router.navigate([`/result/${search.type}/${search.q}`])
  }

  saveAndSearch() {
    const search: SearchQuery = {
      q: this.searchForm.get('q').value,
      type: this.searchForm.get('type').value == 'anime' ? Type.Anime : Type.Manga
    }
    this.animeDB.addSearch(search)
    console.info('Pressed SAVE button, redirecting to results >>> ', search)
    this.router.navigate([`/result/${search.type}/${search.q}`])
  }

  private createSearch() {
    return this.fb.group({
      q: this.fb.control('', [ Validators.required ]),
      type: this.fb.control('')
    })
  }
}
