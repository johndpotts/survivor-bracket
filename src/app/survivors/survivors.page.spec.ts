import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SurvivorsPage } from './survivors.page';

describe('SurvivorsPage', () => {
  let component: SurvivorsPage;
  let fixture: ComponentFixture<SurvivorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SurvivorsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SurvivorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
