import { HttpModule } from '@angular/http';
import { InputCasesComponent } from './input-cases/input-cases.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownService } from './../emails/services/dropdown.service';
import { FrstEmailComponent } from './frst-email/frst-email.component';
import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule
  } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule
    
  ],
  declarations: [
    FrstEmailComponent, 
    InputCasesComponent
  ],
  exports: [
    FrstEmailComponent, 
    InputCasesComponent
  ],
  providers: [
    DropdownService
  ]
})
export class EmailsModule { }
