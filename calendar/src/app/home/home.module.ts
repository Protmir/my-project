import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { SelectorComponent } from './selector/selector.component';
import { OrganizerComponent } from './organizer/organizer.component';
import {MomentPipe} from './shared/moment.pipe';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
    MomentPipe
  ],
  providers: [],
})
export class HomeModule {
}
