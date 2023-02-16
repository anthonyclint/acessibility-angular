import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YesNoButtonGroupComponent } from './yes-no-button-group.component';
import { DirectivesModule } from './../../directives/directives.module';



@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [YesNoButtonGroupComponent]
})
export class YesNoButtonGroupModule { }
