import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'presidio-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
