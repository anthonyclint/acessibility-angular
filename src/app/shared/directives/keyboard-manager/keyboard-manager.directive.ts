import { KeyboardManagedItem } from './keyboard-managed-item.directive';
import { ContentChildren, Directive, HostListener, QueryList } from "@angular/core";

@Directive({
  selector: '[appKm]'
})
export class KeyboardManager{
  @ContentChildren(KeyboardManagedItem) public items: QueryList<KeyboardManagedItem>
  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent){
    switch(event.key){
      case 'ArrowUp':
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
      case 'ArrowDown':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowLeft':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowRight':
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
    }
  }

  public moveFocus(direction: ArrowDirection): KeyboardManagedItem {
    const items = this.items.toArray();
    const currentSelectedIndex = items.findIndex(item => item.isFocused());
    const targetElementFocus = items[currentSelectedIndex + direction];

    return targetElementFocus ? targetElementFocus : (direction === ArrowDirection.LEFT ? items[items.length -1] : items [0]);

    // if(targetElementFocus){
    //   return targetElementFocus;
    // }
    // return direction === ArrowDirection.LEFT ? items[items.length -1] : items [0];
  }
}

enum ArrowDirection{
  LEFT = -1,
  RIGHT = 1
}
