import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'historial', component: HistoryComponent },
  { path: 'acerca', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
