import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeyboardManagedItem } from './keyboard-manager/keyboard-managed-item.directive';
import { KeyboardManager } from './keyboard-manager/keyboard-manager.directive';


@NgModule({
  declarations: [
    KeyboardManager,
    KeyboardManagedItem
  ],
  imports: [
    CommonModule
  ],
  exports: [
    KeyboardManager,
    KeyboardManagedItem
  ]
})
export class DirectivesModule { }
