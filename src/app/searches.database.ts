import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { SearchQuery } from './models';

@Injectable()
export class AnimeDatabase extends Dexie {

  private searchQuery: Dexie.Table<SearchQuery, number>;

  constructor() {
    // database name
    super('anime')

    // setup the schema for v1
    this.version(1).stores({
      searchQuery: '++id'
    })

    // get a reference to the todo collection
    this.searchQuery = this.table('searchQuery')
  }

  async addSearch(s: SearchQuery): Promise<any> {
    s.q = s.q.trim().toLowerCase()
    
    this.searchQuery.put(s)
    console.info('Added to IndexedDB >>> ', s)
  }

  async getResults(q, type): Promise<any> {
    const r = this.searchQuery.where('type').equals(type)
    console.info(r)
  }

  getSearches(): Promise<SearchQuery[]> {
    return this.searchQuery.toArray()
  }
}