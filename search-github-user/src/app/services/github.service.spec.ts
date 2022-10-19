import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    });
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('getUserInformation should return value from observable', () => {
    const mockUser = {
      total_count: 1,
      incomplete_results: false,
      items: [
      {
          login: "matheusmpessoa",
          id: 9379702,
          node_id: "MDQ6VXNlcjkzNzk3MDI=",
          avatar_url: "https://avatars.githubusercontent.com/u/9379702?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/matheusmpessoa",
          html_url: "https://github.com/matheusmpessoa",
          followers_url: "https://api.github.com/users/matheusmpessoa/followers",
          following_url: "https://api.github.com/users/matheusmpessoa/following{/other_user}",
          gists_url: "https://api.github.com/users/matheusmpessoa/gists{/gist_id}",
          starred_url: "https://api.github.com/users/matheusmpessoa/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/matheusmpessoa/subscriptions",
          organizations_url: "https://api.github.com/users/matheusmpessoa/orgs",
          repos_url: "https://api.github.com/users/matheusmpessoa/repos",
          events_url: "https://api.github.com/users/matheusmpessoa/events{/privacy}",
          received_events_url: "https://api.github.com/users/matheusmpessoa/received_events",
          type: "User",
          site_admin: false,
          score: 1.0
        }
      ]
    };

    // service.getUserInformation('matheusmpessoa').subscribe(value => {
    //   expect(value).toBe(mockUser);
    // });
  });

});
