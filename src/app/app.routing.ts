import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';

const appRoutes: Routes = [
  {path:'', component: SearchBoxComponent, },
  {path:'form', component: ReactiveFormComponent},
  {path:'color', component: ColorPickerComponent},
  {path:'employees/:id', component: EmpDetailsComponent},
  {path:'employees', component: EmpListComponent},
  {path:'**', component: SearchBoxComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);