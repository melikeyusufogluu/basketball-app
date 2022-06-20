import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MainDashbordComponent } from './main-dashbord.component';

describe('MainDashbordComponent', () => {
  let component: MainDashbordComponent;
  let fixture: ComponentFixture<MainDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MainDashbordComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(MainDashbordComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to NBA Dashboard'
    );
  }));

  it('should have content in main div', () => {
    const main = fixture.debugElement.query(By.css('.d-flex')).nativeElement;
    expect(main.innerHTML).not.toBeNull();
  });

  it('should render title in a button tag', async(() => {
    const fixture = TestBed.createComponent(MainDashbordComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain(
      'Go to All Players'
    );
  }));

  it('should create an array', () => {
    const list = component.dashboardList;
    expect(list.length).toBeGreaterThanOrEqual(1);
  });
});
