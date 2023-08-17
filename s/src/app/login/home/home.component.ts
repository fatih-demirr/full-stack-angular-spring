import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: (data: string | undefined) => {
        this.content = data;
      },
      error: (err: { error: string; }) => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }
}
