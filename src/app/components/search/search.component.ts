import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchForm: any;
  public success!: boolean;
  public showTableResult: any;

  constructor(
    private githubService: GithubService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.loadSearchResults();
  }

  public createForm() {
    this.searchForm = this.formBuilder.group({
      username: '',
    });
  }

  public loadSearchResults(): void {
    this.githubService.getUserInformation('matheusmpessoa')
      .subscribe((res: any) => {
        this.showTableResult = res.items;
        this.success = true;
      });
  }

  public onSubmit() {
    this.githubService.getUserInformation(this.searchForm.value.username)
      .pipe(
        catchError(err => {
          if (err) { console.error(err); }
          return of(err != null);
        })
      )
      .subscribe((res: any) => {
        if (res.total_count === 0) {
          this.router.navigate(['/error']);
        } else {
          this.success = true;
          this.showTableResult = [...this.showTableResult, res.items[0]];
        }
      });
  }

}
