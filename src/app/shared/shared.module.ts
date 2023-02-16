import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YesNoButtonGroupModule } from './components/yes-no-button-group/yes-no-button-group.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    YesNoButtonGroupModule
  ],
  exports: [
    YesNoButtonGroupModule,
  ]
})
export class SharedModule { }
