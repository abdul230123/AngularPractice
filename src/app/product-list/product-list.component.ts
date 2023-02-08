import { Component } from '@angular/core';
import { ApiServiceService } from '../service';

import { products } from '../products';
import { allActors } from '../allActors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // products = products;
  // allActors=allActors;
  newdata:any;
  constructor(private _apiservice:ApiServiceService){}

  ngOnInit(){
    this._apiservice.getData().subscribe(res=>{
      this.newdata=res;
    })
  }

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/