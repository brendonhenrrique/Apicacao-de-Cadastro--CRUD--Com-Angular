import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';
 
@Directive({
  selector: '[myFor]',
})
 
export class ForDirective implements OnInit {
  // Esta sintaxe diz o que vai pegar depois da palavra chave 'Em'
  @Input("myForEm") numbers: number[] | undefined;
 
  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
  ) {}
 
  ngOnInit(): void {
    if(this.numbers){
      for(let number of this.numbers) {
        this.container.createEmbeddedView(
          this.template, { $implicit: number }); 
        // O template é o q vc quer aplicar dentro da diretiva.
      }
    }
  }
}