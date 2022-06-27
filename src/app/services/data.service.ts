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
      children: []
    },
    {
      id: 2,
      name: "Desktops Systemteam 1",
      children: []
    },
    {
      id: 3,
      name: "Ausbildung",
      children: []
    },
    {
      id: 4,
      name: "D3 Ausbildung",
      children: []
    },
    {
      id: 5,
      name: "Backup",
      children: []
    },
    {
      id: 6,
      name: "Central Servers",
      children: []
    },
    {
      id: 7,
      name: "D3 Central Servers",
      children: []
    },
    {
      id: 8,
      name: "D4 Central Servers",
      children: []
    },
    {
      id: 9,
      name: "Citrix",
      children: []
    },
    {
      id: 10,
      name: "Citrix Central Access",
      children: []
    },
    {
      id: 11,
      name: "CtxF Management D3",
      children: []
    },
    {
      id: 12,
      name: "CtxF Management D4",
      children: []
    },
    {
      id: 13,
      name: "CtxF-megaplan-dmst",
      children: []
    },
    {
      id: 14,
      name: "Citrix D4 Labor",
      children: []
    },
    {
      id: 15,
      name: "DC Domain GALACTICA",
      children: []
    },
    {
      id: 16,
      name: "IBM-KM-Tool",
      children: []
    },
    {
      id: 17,
      name: "IQS PUB",
      children: []
    },
    {
      id: 18,
      name: "ISQ1 D3 Synnet - deleted",
      children: []
    },
    {
      id: 19,
      name: "ISQ1a D3 Synnet",
      children: []
    },
    {
      id: 20,
      name: "IQS2 D3 Synnet",
      children: []
    },
    {
      id: 21,
      name: "IQS1a D4 Real",
      children: []
    },
    {
      id: 22,
      name: "IQS2 D4 Real",
      children: []
    },
    {
      id: 23,
      name: "IQS3 D4 Real - is deleted",
      children: []
    },
    {
      id: 24,
      name: "IQS4 D4 Real",
      children: []
    },
    {
      id: 25,
      name: "IQS3 MP4",
      children: []
    },
    {
      id: 26,
      name: "GIS DB Server MP4 MP5",
      children: []
    },
    {
      id: 27,
      name: "Labor",
      children: []
    },
    {
      id: 28,
      name: "Labor-Orchester",
      children: []
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
