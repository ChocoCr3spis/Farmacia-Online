import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// PrimeNG Modules
import { PrimeNgModule } from '../core/modules/primeng.module';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { LayoutComponent } from './components/layout/layout.component';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { PopoverModule } from 'primeng/popover';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@NgModule({
    declarations: [
      LayoutComponent
    ],
    imports: [
      InputGroupModule,
      InputGroupAddonModule,
      CommonModule,
      ReactiveFormsModule,
      InputTextModule,
      PasswordModule,
      ButtonModule,
      CardModule,
      ToastModule,
      PrimeNgModule,
      AvatarModule,
      MenubarModule,
      RouterModule,
      PopoverModule
    ],
    exports: [
      InputGroupModule,
      InputGroupAddonModule,
      ButtonModule,
      CommonModule,
      ReactiveFormsModule,
      InputTextModule,
      PasswordModule,
      ButtonModule,
      CardModule,
      ToastModule,
      AvatarModule,
      MenubarModule,
      PopoverModule
    ],
    providers: []
  })
  
  export class SharedModule { }