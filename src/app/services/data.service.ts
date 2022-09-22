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
      name: "Server 1",
      category: 1,
      img: "macos",
      serverDetails: [
        {
          os: "macos",
          processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
          memory: 30,
          hdStorage: 500,
          ipv4: "79.208.243.152",
          ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
          location: "Deutschland",
        }
      ],
      application: [
        {
          name: "Spotify",
          status: "Inactive",
          cpu: "-",
          memory: "-"
        }
      ]
    },
    {
      id: 1,
      name: "Server 2",
      category: 1,
      img: "windows",
      serverDetails: [
        {
          os: "macos",
          processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
          memory: 30,
          hdStorage: 500,
          ipv4: "79.208.243.152",
          ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
          location: "Deutschland",
        }
      ],
      application: [
        {
          name: "Spotify",
          status: "Inactive",
          cpu: "-",
          memory: "-"
        }
      ]
    },
    {
      id: 1,
      name: "Server 3",
      category: 1,
      img: "windows",
      serverDetails: [
        {
          os: "macos",
          processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
          memory: 30,
          hdStorage: 500,
          ipv4: "79.208.243.152",
          ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
          location: "Deutschland",
        }
      ],
      application: [
        {
          name: "Spotify",
          status: "Inactive",
          cpu: "-",
          memory: "-"
        }
      ]
    },
    {
      id: 1,
      name: "Server 4",
      category: 1,
      img: "windows",
      serverDetails: [
        {
          os: "macos",
          processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
          memory: 30,
          hdStorage: 500,
          ipv4: "79.208.243.152",
          ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
          location: "Deutschland",
        }
      ],
      application: [
        {
          name: "Spotify",
          status: "Inactive",
          cpu: "-",
          memory: "-"
        }
      ]
    },
    {
      id: 2,
      name: "Server 5",
      category: 1,
      img: "ubuntu",
      serverDetails: [
        {
          os: "macos",
          processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
          memory: 30,
          hdStorage: 500,
          ipv4: "79.208.243.152",
          ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
          location: "Deutschland",
        }
      ],
      application: [
        {
          name: "Spotify",
          status: "Inactive",
          cpu: "-",
          memory: "-"
        }
      ]
    },
    {
      id: 3,
      name: "Server 6",
      category: 1,
      img: "windows",
      serverDetails: [
        {
          os: "macos",
          processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
          memory: 30,
          hdStorage: 500,
          ipv4: "79.208.243.152",
          ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
          location: "Deutschland",
        }
      ],
      application: [
        {
          name: "Spotify",
          status: "Inactive",
          cpu: "-",
          memory: "-"
        }
      ]
    },
    {
      id: 4,
      name: "Server 7",
      category: 1,
      img: "windows",
      serverDetails: [
        {
          os: "macos",
          processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
          memory: 30,
          hdStorage: 500,
          ipv4: "79.208.243.152",
          ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
          location: "Deutschland",
        }
      ],
      application: [
        {
          name: "Spotify",
          status: "Inactive",
          cpu: "-",
          memory: "-"
        }
      ]
    },
    {
      id: 5,
      name: "Server 8",
      category: 2,
      img: "windows",
      serverDetails: [
        {
          os: "macos",
          processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
          memory: 30,
          hdStorage: 500,
          ipv4: "79.208.243.152",
          ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
          location: "Deutschland",
        }
      ],
      application: [
        {
          name: "Spotify",
          status: "Inactive",
          cpu: "-",
          memory: "-"
        }
      ]
    },
    {
      id: 6,
      name: "Server 9",
      category: 2,
      img: "macos",
      serverDetails: [
        {
          os: "macos",
          processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
          memory: 30,
          hdStorage: 500,
          ipv4: "79.208.243.152",
          ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
          location: "Deutschland",
        }
      ],
      application: [
        {
          name: "Spotify",
          status: "Inactive",
          cpu: "-",
          memory: "-"
        }
      ]
    },
    {
      id: 7,
      name: "Server 10",
      category: 2,
      img: "ubuntu",
      serverDetails: [
        {
          os: "macos",
          processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
          memory: 30,
          hdStorage: 500,
          ipv4: "79.208.243.152",
          ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
          location: "Deutschland",
        }
      ],
      application: [
        {
          name: "Spotify",
          status: "Inactive",
          cpu: "-",
          memory: "-"
        }
      ]
    },
    {
      id: 8,
      name: "Server 11",
      category: 3,
      img: "macos",
      serverDetails: [
        {
          os: "macos",
          processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
          memory: 30,
          hdStorage: 500,
          ipv4: "79.208.243.152",
          ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
          location: "Deutschland",
        }
      ],
      application: [
        {
          name: "Spotify",
          status: "Inactive",
          cpu: "-",
          memory: "-"
        }
      ]
    },
    {
      id: 9,
      name: "Server 12",
      category: 3,
      img: "windows",
      serverDetails: [
        {
          os: "macos",
          processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
          memory: 30,
          hdStorage: 500,
          ipv4: "79.208.243.152",
          ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
          location: "Deutschland",
        }
      ],
      application: [
        {
          name: "Spotify",
          status: "Inactive",
          cpu: "-",
          memory: "-"
        }
      ]
    },
    {
      id: 10,
      name: "Server 13",
      category: 4,
      img: "macos",
      serverDetails: [
        {
          os: "macos",
          processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
          memory: 30,
          hdStorage: 500,
          ipv4: "79.208.243.152",
          ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
          location: "Deutschland",
        }
      ],
      application: [
        {
          name: "Spotify",
          status: "Inactive",
          cpu: "-",
          memory: "-"
        }
      ]
    },
    {
      id: 11,
      name: "Server 14",
      category: 4,
      img: "macos",
      serverDetails: [
        {
          os: "macos",
          processor: "Intel®Xenon® Gold 6240R CPU @ 2x2.40GHz",
          memory: 30,
          hdStorage: 500,
          ipv4: "79.208.243.152",
          ipv6: "2003:E6:170F:8D13:F109:A472:39D3:9C2A",
          location: "Deutschland",
        }
      ],
      application: [
        {
          name: "Spotify",
          status: "Inactive",
          cpu: "-",
          memory: "-"
        }
      ]
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

