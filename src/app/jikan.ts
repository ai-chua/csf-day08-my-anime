import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

export function fetchResultsFromApi(type) {
  const queryParams: HttpParams = new HttpParams().set("q", this.q)
  const r = this.http.get(`https://api.jikan.moe/v3/search/${type}`, { params: queryParams }).toPromise()
    .then(data => this.results = data.results )
    .catch((error: HttpErrorResponse) => console.info(error) )
  console.info(r)
}