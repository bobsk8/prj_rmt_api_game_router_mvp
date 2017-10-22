import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosDisponiveisComponent } from './jogos-disponiveis.component';

describe('JogosDisponiveisComponent', () => {
  let component: JogosDisponiveisComponent;
  let fixture: ComponentFixture<JogosDisponiveisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogosDisponiveisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosDisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
