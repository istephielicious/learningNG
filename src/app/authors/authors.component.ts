import { AuthorService } from './author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  mail = "default@email.value";
  authors;
  constructor(service: AuthorService) { 
    this.authors=service.getAuthors();
  }
  ngOnInit() {
  }
  onKeyUp($event) {
    console.log("ENTER was pressed", $event.target.value);
  }
  //template variables
  onEnter(email) {
    console.log("ENTER was pressed, email: ", email);
  }
  //property value.
  onEnterKey() {
    console.log(this.mail);
  }

}
