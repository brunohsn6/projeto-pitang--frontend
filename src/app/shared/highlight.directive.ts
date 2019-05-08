import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  //Criando diretivas, escutando o evento usando o HostListener
  //Modificando os elementos usando o HostBinding
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
    this.fontColor = this.highlightFontColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
    this.fontColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.font-color') fontColor : string;

  //recebendo os valores dinâmicamente
  @Input() defaultColor: string = 'rgb(79, 80, 82)';
  @Input() highlightColor: string = 'rgb(240,230,140)';
  @Input() defaultFontColor: string = 'rgb(255, 255, 255)';
  @Input() highlightFontColor: string = 'rgb(0, 0, 0)';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
