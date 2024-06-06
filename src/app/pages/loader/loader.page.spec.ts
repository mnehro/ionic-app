import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderPage],
      providers: [{ provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to login page after load', fakeAsync(() => {

    component.ngOnInit();
    tick(1000); // Simulates the passage of 1000 milliseconds
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }));
});
