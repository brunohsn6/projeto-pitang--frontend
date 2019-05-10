import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  //Criando diretivas, escutando o evento usando o HostListener
  //Modificando os elementos usando o HostBinding
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
    
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;

  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
 

  //recebendo os valores dinâmicamente
  @Input() defaultColor: string = 'rgb(79, 80, 82)';
  @Input() highlightColor: string = 'rgb(32,198,182)';


  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
