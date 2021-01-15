import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-a-lib',
  template: `
    <p>
      a-lib works!
    </p>
  `,
  styles: [
  ]
})
export class ALibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
