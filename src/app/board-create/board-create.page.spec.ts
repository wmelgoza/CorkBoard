import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoardCreatePage } from './board-create.page';

describe('BoardCreatePage', () => {
  let component: BoardCreatePage;
  let fixture: ComponentFixture<BoardCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoardCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
