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
    console.log('AppComponent constructor');
  }

  ngOnInit() {
    of(2, 3, 4, 5).subscribe(
      number => console.log(number)
    );
    console.log('AppComponent initialized');

    this.apple$ = from(this.apples).pipe(
      tap(x => console.log(x)),
      map(x => ({...x, color: "red"})),
      tap(x => console.log(x))
    ).subscribe();



  }
  ngOnDestroy() {
    console.log('AppComponent destroyed');
  }

}
// Removed custom 'from' function as it conflicts with the RxJS 'from' function.

