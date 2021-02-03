import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { User } from 'src/app/interface/user';
import { ApiService } from 'src/app/services/api.service';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let apiService: ApiService;

  let mockUser: User[] = [{
    fullname: 'Example full name',
    age: 10,
    status: true
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
      ],
      providers: [
        {
          provide: ApiService, useValue: {
            getUsers: () => {}
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;

    apiService = TestBed.inject(ApiService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should list users', () => {

    jest.spyOn(apiService, 'getUsers')
      .mockImplementation( () => of(mockUser));
    
    component.getListUsers();
    expect(mockUser).toBe(component.list);
  })



});
