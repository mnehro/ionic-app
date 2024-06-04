import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
    imports: [
      AppRoutingModule
    ]
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should got to pick up calls on see all', () => {
    spyOn(router, 'navigate');

    component.goToPickupCalls();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls'])
  });

  it('should got to pick up call on create pick up call button', () => {
    spyOn(router, 'navigate');

    component.createPickupCall();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call'])
  });

});
