import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { catchError, of } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';
import { ErrorSearchComponent } from '../error-search/error-search.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchForm: any;
  public success: boolean = true;
  public showTableResult: any;

  constructor(
    private githubService: GithubService,
    public dialogRef: MatDialog,
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

  public loadSearchResults() {
    this.githubService.getUserInformation('matheusmpessoa')
      .subscribe((res: any) => {
        this.showTableResult = res.items;
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
        const dialogConfig = new MatDialogConfig<any>();
        if (res.total_count === 0) {
          dialogConfig.data = { success: false };
          this.dialogRef.open(ErrorSearchComponent, dialogConfig);
        } else {
          this.showTableResult = [...this.showTableResult, res.items[0]];
        }
      });
  }

}
