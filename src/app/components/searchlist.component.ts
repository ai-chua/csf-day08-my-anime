import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeDatabase } from '../searches.database'
import { SearchQuery, Type } from '../models'

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent implements OnInit {
  public media = Type
  searches: SearchQuery[] = []
  
  constructor(private router: Router, private animeDB: AnimeDatabase) { }
  
  ngOnInit(): void {
    this.animeDB.getSearches().then(data => 
      this.searches = data
      )
  }
}
  
  