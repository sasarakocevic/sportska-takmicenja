import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tim } from 'src/app/modeli/tim.model';
import { TimService } from 'src/app/servisi/tim.service';

@Component({
  selector: 'app-tim-add',
  templateUrl: './tim-add.component.html',
  styleUrls: ['./tim-add.component.css']
})
export class TimAddComponent implements OnInit {

  public timAddForm!: FormGroup;

  private subscription!: Subscription;


  constructor(private timServis: TimService,
    private router: Router) { }

  ngOnInit(): void {

    this.timAddForm = new FormGroup({
      // 'timovi': new FormControl(null, Validators.minLength(4)),
      'naziv': new FormControl(null, Validators.required),
      'adresa': new FormControl(null, Validators.required),
      'slika': new FormControl(null),
    });

  }

  onSubmit() {

    if (this.timAddForm.status === "VALID") {
      const naziv = this.timAddForm.value['naziv'];
      const adresa = this.timAddForm.value['adresa'];
      const slika = this.timAddForm.value['slika'];


      const tim: Tim = { naziv: naziv, adresa: adresa, slika: slika };

      this.timServis.save(tim).subscribe(
        response => console.log(response)
      )
      alert('Uspjesno ste dodali tim');
      this.router.navigate(['/timovi']);





    }
  }

}
