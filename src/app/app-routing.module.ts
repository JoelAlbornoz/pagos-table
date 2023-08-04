import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TableComponent } from './components/table/table.component';
import { tableGuard } from './guards/table.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'table', component: TableComponent, canActivate: [tableGuard] }, // Add the dashboard route
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
