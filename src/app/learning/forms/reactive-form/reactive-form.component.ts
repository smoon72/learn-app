import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{
  customerForm!: FormGroup;

  ngOnInit(): void {
      this.customerForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        email: new FormControl()
      });
  }


}
