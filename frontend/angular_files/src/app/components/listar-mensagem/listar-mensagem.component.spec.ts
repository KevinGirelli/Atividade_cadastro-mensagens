import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMensagemComponent } from './listar-mensagem.component';

describe('ListarMensagemComponent', () => {
  let component: ListarMensagemComponent;
  let fixture: ComponentFixture<ListarMensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarMensagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
