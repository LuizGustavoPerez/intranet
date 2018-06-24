import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { ComponentsModule } from './../../components/components.module';
import { EmailsModule } from '../../components/emails/emails.module';
import { InputCasesComponent } from '../../components/emails/input-cases/input-cases.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    ComponentsModule,
    EmailsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
  ]

})

export class AdminLayoutModule {}
