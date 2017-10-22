import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusJogosComponent } from './meus-jogos.component';

describe('MeusJogosComponent', () => {
  let component: MeusJogosComponent;
  let fixture: ComponentFixture<MeusJogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusJogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
