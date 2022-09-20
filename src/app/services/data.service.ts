import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { vmGroups, vmServer } from '../models/vm-groups';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private vmGroup: vmGroups[] = [
    {
      id: 1,
      name: "Administration",
      category: 55,
      children: [
        {
          id: 1,
          name: "Desktops Systemteam 1",
          category: 1,
          children: []
        },
      ]
    },
    {
      id: 2,
      name: "Ausbildung",
      category: 33,
      children: [
        {
          id: 1,
          name: "D3 Ausbildung",
          category: 2,
          children: []
        },
      ]
    },
    {
      id: 3,
      name: "Backup",
      category: 3,
      children: []
    },
    {
      id: 4,
      name: "Central Servers",
      category: 66,
      children: [
        {
          id: 1,
          name: "D3 Central Servers",
          category: 4,
          children: []
        },
        {
          id: 2,
          name: "D4 Central Servers",
          category: 5,
          children: []
        },
      ]
    },
    {
      id: 5,
      name: "Citrix",
      category: 87,
      children: [
        {
          id: 1,
          name: "Citrix Central Access",
          category: 6,
          children: []
        },
        {
          id: 2,
          name: "CtxF Management D3",
          category: 7,
          children: []
        },
        {
          id: 3,
          name: "CtxF Management D4",
          category: 8,
          children: []
        },
        {
          id: 4,
          name: "CtxF-megaplan-dmst",
          category: 9,
          children: []
        },
        {
          id: 5,
          name: "Citrix D4 Labor",
          category: 10,
          children: []
        },
        {
          id: 6,
          name: "DC Domain GALACTICA",
          category: 11,
          children: []
        },
      ]
    },
    {
      id: 6,
      name: "IBM-KM-Tool",
      category: 99,
      children: []
    },
    {
      id: 7,
      name: "IQS PUB",
      category: 87,
      children: [
        {
          id: 1,
          name: "ISQ1 D3 Synnet - deleted",
          category: 12,
          children: []
        },
        {
          id: 2,
          name: "ISQ1a D3 Synnet",
          category: 13,
          children: []
        },
        {
          id: 3,
          name: "IQS2 D3 Synnet",
          category: 14,
          children: []
        },
        {
          id: 4,
          name: "IQS1a D4 Real",
          category: 15,
          children: []
        },
        {
          id: 5,
          name: "IQS2 D4 Real",
          category: 16,
          children: []
        },
        {
          id: 6,
          name: "IQS3 D4 Real - is deleted",
          category: 17,
          children: []
        },
        {
          id: 7,
          name: "IQS4 D4 Real",
          category: 18,
          children: []
        },
        {
          id: 8,
          name: "IQS3 MP4",
          category: 19,
          children: []
        },
        {
          id: 26,
          name: "GIS DB Server MP4 MP5",
          category: 20,
          children: []
        },
      ]
    },
    {
      id: 8,
      name: "Labor",
      category: 98,
      children: [
        {
          id: 1,
          name: "Labor-Orchester",
          category: 21,
          children: []
        },
      ]
    },
  ];

  private vmServer: vmServer[] = [
    {
      id: 1,
      name: "CATEGORY 1",
      category: 1,
      os: "macos",
      processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
      memory: 30,
      hdStorage: 500,
      ipv4: "79.208.243.152",
      ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
      location: "Deutschland"
    },
    {
      id: 1,
      name: "CATEGORY 1",
      category: 1,
      os: "windows",
      processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
      memory: 30,
      hdStorage: 500,
      ipv4: "79.208.243.152",
      ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
      location: "Deutschland"
    },
    {
      id: 1,
      name: "CATEGORY 1",
      category: 1,
      os: "windows",
      processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
      memory: 30,
      hdStorage: 500,
      ipv4: "79.208.243.152",
      ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
      location: "Deutschland"
    },
    {
      id: 1,
      name: "CATEGORY 1",
      category: 1,
      os: "windows",
      processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
      memory: 30,
      hdStorage: 500,
      ipv4: "79.208.243.152",
      ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
      location: "Deutschland"
    },
    {
      id: 2,
      name: "CATEGORY 1",
      category: 1,
      os: "ubuntu",
      processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
      memory: 30,
      hdStorage: 500,
      ipv4: "79.208.243.152",
      ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
      location: "Deutschland"
    },
    {
      id: 3,
      name: "CATEGORY 1",
      category: 1,
      os: "windows",
      processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
      memory: 30,
      hdStorage: 500,
      ipv4: "79.208.243.152",
      ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
      location: "Deutschland"
    },
    {
      id: 4,
      name: "CATEGORY 1",
      category: 1,
      os: "windows",
      processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
      memory: 30,
      hdStorage: 500,
      ipv4: "79.208.243.152",
      ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
      location: "Deutschland"
    },
    {
      id: 5,
      name: "CATEGORY 2",
      category: 2,
      os: "windows",
      processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
      memory: 30,
      hdStorage: 500,
      ipv4: "79.208.243.152",
      ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
      location: "Deutschland"
    },
    {
      id: 6,
      name: "CATEGORY 2",
      category: 2,
      os: "macos",
      processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
      memory: 30,
      hdStorage: 500,
      ipv4: "79.208.243.152",
      ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
      location: "Deutschland"
    },
    {
      id: 7,
      name: "CATEGORY 2",
      category: 2,
      os: "ubuntu",
      processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
      memory: 30,
      hdStorage: 500,
      ipv4: "79.208.243.152",
      ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
      location: "Deutschland"
    },
    {
      id: 8,
      name: "CATEGORY 3",
      category: 3,
      os: "macos",
      processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
      memory: 30,
      hdStorage: 500,
      ipv4: "79.208.243.152",
      ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
      location: "Deutschland"
    },
    {
      id: 9,
      name: "CATEGORY 3",
      category: 3,
      os: "windows",
      processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
      memory: 30,
      hdStorage: 500,
      ipv4: "79.208.243.152",
      ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
      location: "Deutschland"
    },
    {
      id: 10,
      name: "he42123 D3 Server 1",
      category: 4,
      os: "macos",
      processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
      memory: 30,
      hdStorage: 500,
      ipv4: "79.208.243.152",
      ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
      location: "Deutschland"
    },
    {
      id: 11,
      name: "he42123 D3 Server 2",
      category: 4,
      os: "macos",
      processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
      memory: 30,
      hdStorage: 500,
      ipv4: "79.208.243.152",
      ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
      location: "Deutschland"
    },
  ]

  constructor() {
  }

  public getAll(): Observable<vmGroups[]> {
    return of(this.vmGroup);
  }

  public filter(category: number): Observable<vmServer[]> {
    const result = this.vmServer.filter(vmServer => vmServer.category == category)
    return of(result);
  }
}

