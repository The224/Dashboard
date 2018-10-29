import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  public today: Date;

  private destroyer = new Subject<any>();

  constructor() {
    timer(1000).pipe(takeUntil(this.destroyer)).subscribe(() => {
      this.today = new Date();
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroyer.next();
    this.destroyer.complete();
  }

}
