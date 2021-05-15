import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wall-street-app';
  message = '';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(){
    Amplify.configure(aws_exports);
    console.log('Amplify Initialised');
    this.message = "Amplify Initialised";
  }

}
