import { Component, OnInit } from '@angular/core';
import { map, filter, take } from 'rxjs/operators';
import {of, pipe, Observable, interval,Subject, BehaviorSubject} from 'rxjs';
import { resolve } from 'url';
import { promise } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
 {
   ngOnInit(): void {
    //  interval
    //  const counter= interval(1000)
    //  counter.subscribe(n => console.log(n))

    //event
    // const e1 = document.getElementById('myelement');
    // const mouseMoves = fromEvent(e1,'mousemove');

    // const subscription = mouseMoves.subscribe((evt:MouseEvent)=>{
    //   console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
    // })


    //map
    // const nums = of(1,2,3)
    // const squareValues = map((val: number) => val * val);
    // const squardNumbers = squareValues(nums);  
    // squardNumbers.subscribe(x=>console.log(x));


    //pipe
  

    // const squreOddValues = of(1,2,3,4,5)
    // .pipe(
    //  filter((val:number) => val %2 != 0),
    //  map(num => num*2)
    //  );
    
  
    // squreOddValues.subscribe(x=>console.log(x));  
    

   

    
   }
    
  //  number = new Promise((resolve)=>{
  //   resolve(5);
  //   resolve(10);
  //   });

  // numberObservable = new Observable((observer)=>{
  //   observer.next(5);
  //   observer.next(10);
  //   observer.complete();
  //   observer.next(15);
  // })
  // promiseData:any;
  // observable$:Observable<number>;
  // subscription:Object = null
  // observableData:number;
  // subject$= new Subject<number>(0)


  
   constructor()
   {
    //  this.number.then(value=>console.log("promise"+value));
    //  this.numberObservable.subscribe((value)=>"observable"+console.log(value)); 
    //  this.getPromise().then(v=>this.promiseData=v);
    //  this.observable$=this.getObservable();
    //  this.subscribeMethod();
  //    this.subject$.next(1);
  //    this.subject$.next(2);
  //    this.subject$.subscribe(res => {
  //      console.log("res :: A",res);
  //    })
  //    this.subject$.next(3);
  //    this.subject$.next(4);

  //    this.subject$.subscribe(res => {
  //     console.log("res :: B",res);
  //   })
  //   this.subject$.next(5);
  //    this.subject$.next(6);
  //  } 

 
  //  getPromise()
  //  {
  //    return new Promise((resolve,reject)=>{
  //       setTimeout(()=>resolve("promise complete"),3000)
  //    });
  //  }   
  
  //  getObservable()
  //  {
  //    return interval(1000).pipe(
  //    take(10),
  //    map(v => v* v)
  //    )
  //  }

  
  // subscribeMethod()
  // {
  //   this.subscription=this.getObservable()
  //   .subscribe(
  //     v => (this.observableData = v )
  //   )
  // }
 

}
 }
