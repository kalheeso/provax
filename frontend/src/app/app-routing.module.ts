import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'vacine', loadChildren: () => import('./vacine/vacine.module').then(m => m.VacineModule) },
                        {path: '**', redirectTo: 'vacine'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
