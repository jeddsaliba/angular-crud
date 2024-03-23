import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  isHandset$: Observable<boolean>;
  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches), shareReplay());
  }
}
