import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @ViewChild('search') searchRef: ElementRef | undefined;

  @Input() data: any;
  @Output() eventEmitter = new EventEmitter<any>();

  resultData:any;
  configurations:any = [];
  selectedConfigurations:any;
  minPrice:any;
  constructor(
  ) {}

  ngOnInit(): void {
    for(let item of this.data){
      this.configurations.push(item.configuration);
    }
    this.configurations = this.configurations.flat();

    this.configurations = _.uniq(this.configurations);
  }

  ngAfterViewInit() {
    fromEvent(this.searchRef?.nativeElement, 'keyup')
      .pipe(
        map((i: any) => i.target.value),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((res: any) => {
        if (res) {
          let searchingElement = new RegExp(res,'gi');
          this.resultData = this.data.filter(
            (el: any) =>
              el.name.match(searchingElement) ||
              el.buildingTowers.match(searchingElement) ||
              el.propertyType.match(searchingElement) ||
              el.minPrice.toString().match(searchingElement)
          );
          this.eventEmitter.emit(this.resultData)
        } else {
          this.resultData = this.data;
          this.eventEmitter.emit(this.resultData);
        }
      });
  }

  sortBy(value:string,type = 'asc',config=false){
    this.resultData = _.sortBy(this.data, (item)=>{
      return config==false?item[value]:item.configuration[value]
    });
    if(type=='desc'){
      this.resultData = this.resultData.reverse();
    }
    this.eventEmitter.emit(this.resultData);
  }

  fetchSelectedValue(){
    console.log("selected Value",this.selectedConfigurations);
  }

  filter(){
    this.resultData = this.data.filter((el:any)=> el.minPrice>=this.minPrice);
    this.eventEmitter.emit(this.resultData);
  }
  resetFilter(){
    this.eventEmitter.emit(this.data);
  }

}

