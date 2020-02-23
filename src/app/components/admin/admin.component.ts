import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes;
  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes() {
    this.registrationService.getBikes().subscribe(
      data => { this.bikes = data},
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }

}
