import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoadingComponent } from './loading.component';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { loadingReducer } from 'src/store/loading/loading.reducers';
import { AppState } from 'src/store/AppState';
import { hide, show } from 'src/store/loading/loading.actions';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        IonicModule.forRoot(),
        CommonModule,
        LoadingComponent,
        StoreModule.forRoot(),
        StoreModule.forRoot([]),
        StoreModule.forFeature("loading", loadingReducer)
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    store = TestBed.get(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide the loading component when it is not loading', () => {
    const compiled = fixture.nativeElement;
    store.dispatch(hide());
    fixture.detectChanges();
    expect(compiled.querySelector(".backdrop")).toBeNull();
  });
  it('should show the loading component when it is loading', () => {
    const compiled = fixture.nativeElement;
    store.dispatch(show());
    fixture.detectChanges();
    expect(compiled.querySelector(".backdrop")).not.toBeNull();
  });

});
