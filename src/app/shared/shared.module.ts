import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../core/modules/primeng.module';

import { ButtonModule } from 'primeng/button';



@NgModule({
    declarations: [],
    imports: [
      PrimeNgModule
    ],
    exports: [
        ButtonModule
    ],
    providers: []
  })
  
  export class SharedModule { }