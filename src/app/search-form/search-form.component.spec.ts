import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFORMComponent } from './search-form.component';

describe('SearchFORMComponent', () => {
  let component: SearchFORMComponent;
  let fixture: ComponentFixture<SearchFORMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFORMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFORMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
