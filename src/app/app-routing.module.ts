import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'backdoor', loadChildren: './pages/backdoor/backdoor.module#BackdoorPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'materials', loadChildren: './pages/materials/materials.module#MaterialsPageModule' },
  { path: 'reviews', loadChildren: './pages/reviews/reviews.module#ReviewsPageModule' },
  { path: 'servant', loadChildren: './pages/servant/servant.module#ServantPageModule' },
  { path: 'summon', loadChildren: './pages/summon/summon.module#SummonPageModule' },
  { path: 'user', loadChildren: './pages/user/user.module#UserPageModule' },
  { path: 'material', loadChildren: './pages/materials/material/material.module#MaterialPageModule' },
  { path: 'material-location', loadChildren: './pages/materials/material/material-location/material-location.module#MaterialLocationPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
