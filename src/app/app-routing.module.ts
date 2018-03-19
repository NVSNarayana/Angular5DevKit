import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { CsharpComponent } from './csharp/csharp.component';
import { Index0Component } from './home/index0/index0.component';
import { Index1Component } from './home/index1/index1.component';
import { Index2Component } from './home/index2/index2.component';
import { JsonComponent } from './home/json/json.component';
import { JsonArrayComponent } from './home/json-array/json-array.component';
import { ClassComponent } from './csharp/class/class.component';
import { GenericsComponent } from './csharp/generics/generics.component';
import { AngularCliComponent } from './angular/angular-cli/angular-cli.component';
import { AngularCodeSupportComponent } from './angular/angular-code-support/angular-code-support.component';

export const routableComponents = [
  HomeComponent,
  AngularComponent,
  CsharpComponent,
  Index0Component,
  Index1Component,
  Index2Component,
  JsonComponent,
  JsonArrayComponent,
  ClassComponent,
  GenericsComponent,
  AngularCliComponent,
  AngularCodeSupportComponent,
];

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', redirectTo: 'index0', pathMatch: 'full' },
      { path: 'index0', component: Index0Component },
      { path: 'index1', component: Index1Component },
      { path: 'index2', component: Index2Component },
      { path: 'json', component: JsonComponent },
      { path: 'jsonarray', component: JsonArrayComponent },

    ]
  },
  {
    path: 'angular', component: AngularComponent, children: [
      { path: '', redirectTo: 'angularcli', pathMatch: 'full' },
      { path: 'angularcli', component: AngularCliComponent },
      { path: 'codesupport', component: AngularCodeSupportComponent },
    ]
  },
  {
    path: 'csharp', component: CsharpComponent, children: [
      { path: '', redirectTo: 'class', pathMatch: 'full' },
      { path: 'class', component: ClassComponent },
      { path: 'generics', component: GenericsComponent },
    ]
  },

  { path: '', pathMatch: 'full', redirectTo: '/home/index0' },
  // { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  declarations: [routableComponents],
  providers: []
})

export class AppRoutingModule { }

