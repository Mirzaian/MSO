import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { vmGroups } from '../models/vm-groups';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private vmGroup: vmGroups[] = [
    {
      id: 1,
      name: "Administration",
      children: [
        {
          id: 1,
          name: "Desktops Systemteam 1",
          children: []
        },
      ]
    },
    {
      id: 2,
      name: "Ausbildung",
      children: [
        {
          id: 1,
          name: "D3 Ausbildung",
          children: []
        },
      ]
    },
    {
      id: 3,
      name: "Backup",
      children: []
    },
    {
      id: 4,
      name: "Central Servers",
      children: [
        {
          id: 1,
          name: "D3 Central Servers",
          children: []
        },
        {
          id: 2,
          name: "D4 Central Servers",
          children: []
        },
      ]
    },
    {
      id: 5,
      name: "Citrix",
      children: [
        {
          id: 1,
          name: "Citrix Central Access",
          children: []
        },
        {
          id: 2,
          name: "CtxF Management D3",
          children: []
        },
        {
          id: 3,
          name: "CtxF Management D4",
          children: []
        },
        {
          id: 4,
          name: "CtxF-megaplan-dmst",
          children: []
        },
        {
          id: 5,
          name: "Citrix D4 Labor",
          children: []
        },
        {
          id: 6,
          name: "DC Domain GALACTICA",
          children: []
        },
      ]
    },
    {
      id: 6,
      name: "IBM-KM-Tool",
      children: []
    },
    {
      id: 7,
      name: "IQS PUB",
      children: [
        {
          id: 1,
          name: "ISQ1 D3 Synnet - deleted",
          children: []
        },
        {
          id: 2,
          name: "ISQ1a D3 Synnet",
          children: []
        },
        {
          id: 3,
          name: "IQS2 D3 Synnet",
          children: []
        },
        {
          id: 4,
          name: "IQS1a D4 Real",
          children: []
        },
        {
          id: 5,
          name: "IQS2 D4 Real",
          children: []
        },
        {
          id: 6,
          name: "IQS3 D4 Real - is deleted",
          children: []
        },
        {
          id: 7,
          name: "IQS4 D4 Real",
          children: []
        },
        {
          id: 8,
          name: "IQS3 MP4",
          children: []
        },
        {
          id: 26,
          name: "GIS DB Server MP4 MP5",
          children: []
        },
      ]
    },
    {
      id: 8,
      name: "Labor",
      children: [
        {
          id: 1,
          name: "Labor-Orchester",
          children: []
        },
      ]
    },
  ];
  
  constructor() {
  }
  public getById(name: string): Observable<vmGroups> {
    for(const vmGroup of this.vmGroup) {
      if(vmGroup.name === name) {
        return of(vmGroup);
      }
    }
    return throwError('not found');
  }

  public getAll(): Observable<vmGroups[]> {
    return of(this.vmGroup);
  }
}
