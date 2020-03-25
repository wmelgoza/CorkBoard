import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoardDeletePage } from './board-delete.page';

describe('BoardDeletePage', () => {
  let component: BoardDeletePage;
  let fixture: ComponentFixture<BoardDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoardDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
