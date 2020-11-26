import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Type } from '../models'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  q = ''
  type = ''
  results = []

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.type = Type[this.activatedRoute.snapshot.params['type']].toLowerCase()
    this.q = this.activatedRoute.snapshot.params['q']
    // Get HTTP response from Jikan then set as results[]
    this.fetchResultsFromApi(this.type)
    console.info(this.q, this.type)
  }

  fetchResultsFromApi(type) {
    const queryParams: HttpParams = new HttpParams().set("q", this.q)
    const r = this.http.get<any>(`https://api.jikan.moe/v3/search/${type}`, { params: queryParams })
      .toPromise()
      .then(data => this.results = data.results )
      .catch((error: HttpErrorResponse) => console.info(error) )
    console.info(r)
  }
}
