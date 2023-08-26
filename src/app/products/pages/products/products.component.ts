import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  

  isProductVisible: boolean = false;
  productPrice: number = 30;

  constructor() {
  console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
    
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
    
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
    
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  dropComponent( element: any ): void {
    console.log(element);
    
  }
}
