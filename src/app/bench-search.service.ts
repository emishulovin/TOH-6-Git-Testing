import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BenchQuery } from './bench-request';
import { AppComponent } from './app.component';
import { FormControl, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class BenchSearchService {
  constructor() {}


  private form: FormGroup;
  private date: Date;
  private bench:string = "Hello"
  private location:string = "Mississippi"
  private result: BenchQuery = {location:null, bench:null, date:null};

//   requestedSearchResult = new Observable<BenchResults>((observer) => {
//     console.log("Observable working")
//     observer.next(this.result);
// });

  public setBenchQuery(data: Observable<FormGroup>) {
    console.log('Setting bench query');
    data.subscribe((form) => {
      this.form = form;
      this.findDate()
      this.combineResult()
      // console.log(this.result)
      // this.requestedSearchResult.subscribe(benchResult=> {
      //   console.log(`Here is the bench search:`)
      //   console.log(this.result);
      // });
      
    });
  
    return null;
  }

  public getBenchQuery(): Observable<BenchQuery> {
    console.log("Getting bench results...")
    return of(this.result);
  }



  private findDate() {
    this.date = this.form.value
  }

  private combineResult() {
    this.result.bench = this.bench;
    this.result.location = this.location;
    this.result.date = this.date;
  }
}
