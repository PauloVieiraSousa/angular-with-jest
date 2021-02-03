import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { User } from '../interface/user';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpClient: HttpClient;

  let mockUser: User[] = [{
        fullname: 'Example full name',
        age: 10,
        status: true
      }];

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports  : [HttpClientModule],
      providers: [
        ApiService,
        {provide: HttpClient, useValue: {
          get: (url: any) => {
            return "Consulta";
          }
        }}
      ]
    });

    service = TestBed.inject(ApiService);
    httpClient = TestBed.inject(HttpClient);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data from users', done => {

    jest.spyOn(httpClient, 'get')
      .mockImplementation( () => of(mockUser));

    service.getUsers().subscribe((users) => {
      expect(users).toBe(mockUser);
    });

    done();

  });

  it('must consult the endpoint of user', done => {
    const spyOnHttpClient = jest.spyOn(httpClient, 'get')
      .mockImplementation( () => of(mockUser));

    service.getUsers();

    expect(spyOnHttpClient).toBeCalledWith('https://run.mocky.io/v3/ef4fce9c-f3e9-4677-925c-39be16fe45a0');

    done();
  });






});
