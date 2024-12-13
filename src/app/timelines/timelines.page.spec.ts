import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelinesPage } from './timelines.page';

describe('TimelinesPage', () => {
  let component: TimelinesPage;
  let fixture: ComponentFixture<TimelinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
