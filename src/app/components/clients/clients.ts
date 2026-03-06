import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.html',
  styleUrl: './clients.css',
})
export class Clients {
  protected readonly clients = [
    { name: 'Acme Corp', initials: 'AC' },
    { name: 'Globex Inc', initials: 'GX' },
    { name: 'Stark Industries', initials: 'SI' },
    { name: 'Wayne Enterprises', initials: 'WE' },
    { name: 'Umbrella Corp', initials: 'UC' },
    { name: 'Cyberdyne Systems', initials: 'CS' },
  ];
}
