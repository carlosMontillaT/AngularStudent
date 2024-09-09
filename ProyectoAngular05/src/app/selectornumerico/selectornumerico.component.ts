import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  standalone: true,
  imports: [],
  templateUrl: './selectornumerico.component.html',
  styleUrl: './selectornumerico.component.css'
})
export class SelectornumericoComponent {
  @Input () minimo : number = 1;

  @Input () maximo : number = 1;

  actual : number = 1;

incrementar(){
  if (this.actual<this.maximo){
    this.actual ++;
  }
}
disminuir(){
  if (this.actual>this.minimo){
    this.actual --;
  }
}

fijar(v:number){
  if (v>= this.minimo && v <= this.maximo){
    this.actual = v;
  }
}



}
