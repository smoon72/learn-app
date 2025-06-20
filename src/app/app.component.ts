import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, map, of, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'learn-app';
  apple$!: Subscription;

  apples = [
    {
      id: 1,
      type: "fuji"
    }, 
    {
      id: 2,
      type: "kroger"
    }
  ];

  constructor() {
  }

  ngOnInit() {
    of(2, 3, 4, 5).subscribe(
    );

    this.apple$ = from(this.apples).pipe(
      map(x => ({...x, color: "red"})),
      // tap(x => console.log(x))
    ).subscribe();



  }
  ngOnDestroy() {
  }

}
// Removed custom 'from' function as it conflicts with the RxJS 'from' function.

