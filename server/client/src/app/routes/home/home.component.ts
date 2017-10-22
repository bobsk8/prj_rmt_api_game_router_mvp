import { Component, OnInit } from '@angular/core';
import { AppService } from "../../service/app.service";
import { DadoCadastral } from '../../model/dado-cadastral';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: DadoCadastral = new DadoCadastral();
  constructor(
    private appService: AppService    
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (!data.login) {
        this.appService.redirect('');
      }
      this.user = data;
    });    
  }

}
