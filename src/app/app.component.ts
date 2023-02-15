import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y-p1';
  // public answer = 'no';
  public form: FormGroup;

  constructor(formBuilder: FormBuilder){
    this.form = formBuilder.group({
      answer: ['no']
    });
  }

  public submit(): void{
    console.log(this.form.value);
  }
}
