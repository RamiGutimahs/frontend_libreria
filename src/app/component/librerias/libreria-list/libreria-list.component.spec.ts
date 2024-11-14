import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaListComponent } from './libreria-list.component';

describe('LibreriaListComponent', () => {
  let component: LibreriaListComponent;
  let fixture: ComponentFixture<LibreriaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibreriaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibreriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
