import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appGitUser]'

})
export class GitUserDirective {

  isCollapsed = true;
  @HostBinding("class.collapsed")
  get collapsed() {
    return this.isCollapsed;
  }
  @HostListener('click')
  toggle() {
    this.isCollapsed = !this.isCollapsed
  }
}
