import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoardsPage } from './boards.page';

describe('BoardsPage', () => {
  let component: BoardsPage;
  let fixture: ComponentFixture<BoardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
