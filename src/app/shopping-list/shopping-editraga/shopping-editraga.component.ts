import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-editraga',
  templateUrl: './shopping-editraga.component.html',
  styleUrls: ['./shopping-editraga.component.css']
})
export class ShoppingEditragaComponent implements OnInit {

  // ViewChild dekorator digunakan untuk mendapatkan akses ke komponen anak,
  // yang ditemukan di template, sehingga Anda dapat mengakses properti dan metodenya
  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;
  @Output() ingredientAdded= new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName=this.nameRef.nativeElement.value;
    const ingAmount=this.amountRef.nativeElement.value;
    const newIngredient= new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
