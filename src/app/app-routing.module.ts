import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
{
 path: 'home',
loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
},

  {
    path: 'flora',
    loadChildren: () => import('./pages/flora/flora.module').then( m => m.FloraPageModule)
  },
  {
    path: 'fauna',
    loadChildren: () => import('./pages/fauna/fauna.module').then( m => m.FaunaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ion-modal-agregar-fotos',
    loadChildren: () => import('./pages/ion-modal-agregar-fotos/ion-modal-agregar-fotos.module').then( m => m.IonModalAgregarFotosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
