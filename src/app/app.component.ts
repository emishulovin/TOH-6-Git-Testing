import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { Observable, of, Subject } from 'rxjs';
import { BenchSearchService } from './bench-search.service';
// import {MenuItem} from 'primeng/api';                  //api
// import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private benchSearch: BenchSearchService) {}
  ngOnInit() {}
  // try this as a service.
  // public formUpdated$ = this.formUpdated.asObservable();
  // requestedSearch = new Observable<FormGroup>((observer) => {
  //     observer.next(this.form)
  // });

 

  myObserver = {
    next: (x) => {
      console.log('Observer got a next value: ');
      console.log(x);
    },
    error: (err) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  dateData: Date;
  dateData2: Date;

  title = 'Tour of Heroes';
  // date: Date;
  form = new FormGroup({
    date: new FormControl(''),
    date2: new FormControl(''),
  });

  date2 = new FormControl('');

  submit() {
    this.dateData = this.form.value;
    // console.log(this.dateData);
    // this.formUpdated.next(this.dateData)
    // this.requestedSearch.subscribe(form=> {console.log(form)});
    // this.benchSearch.setBenchQuery(this.requestedSearch);

    this.benchSearch.setBenchQuery(of(this.form));

    this.benchSearch.getBenchQuery().subscribe((result) => {
      console.log(result);
    });
    this.benchSearch.getBenchQuery().subscribe(this.myObserver);
  }

  onSubmit() {
    this.dateData2 = this.date2.value;
    console.log(this.dateData2);
    console.log('onSubmit');
  }
}
