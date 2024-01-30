import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(HomePage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to pickup-calls on see all', () => {
    spyOn(router, 'navigate');
    component.goToPickupCalls();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls']);
  })

  it('should go to new pickup call on create pickup', () => {
    spyOn(router, 'navigate');
    component.newPickupCall();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls']);
  })
});
