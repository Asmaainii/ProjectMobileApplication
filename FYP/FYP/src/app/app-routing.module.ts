import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'tingkatan4',
    loadChildren: () => import('./tingkatan4/tingkatan4.module').then( m => m.Tingkatan4PageModule)
  },
  {
    path: 'tingkatan5',
    loadChildren: () => import('./tingkatan5/tingkatan5.module').then( m => m.Tingkatan5PageModule)
  },
  {
    path: 'bab1t4',
    loadChildren: () => import('./bab1t4/bab1t4.module').then( m => m.Bab1t4PageModule)
  },
  {
    path: 'bab2t4',
    loadChildren: () => import('./bab2t4/bab2t4.module').then( m => m.Bab2t4PageModule)
  },
  {
    path: 'bab3t4',
    loadChildren: () => import('./bab3t4/bab3t4.module').then( m => m.Bab3t4PageModule)
  },
  {
    path: 'bab4t4',
    loadChildren: () => import('./bab4t4/bab4t4.module').then( m => m.Bab4t4PageModule)
  },
  {
    path: 'bab5t4',
    loadChildren: () => import('./bab5t4/bab5t4.module').then( m => m.Bab5t4PageModule)
  },
  {
    path: 'bab1t5',
    loadChildren: () => import('./bab1t5/bab1t5.module').then( m => m.Bab1t5PageModule)
  },
  {
    path: 'bab2t5',
    loadChildren: () => import('./bab2t5/bab2t5.module').then( m => m.Bab2t5PageModule)
  },
  {
    path: 'bab3t5',
    loadChildren: () => import('./bab3t5/bab3t5.module').then( m => m.Bab3t5PageModule)
  },
  {
    path: 'bab4t5',
    loadChildren: () => import('./bab4t5/bab4t5.module').then( m => m.Bab4t5PageModule)
  },
  {
    path: 'bab5t5',
    loadChildren: () => import('./bab5t5/bab5t5.module').then( m => m.Bab5t5PageModule)
  },
  {
    path: 'kuiz',
    loadChildren: () => import('./kuiz/kuiz.module').then( m => m.KuizPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'f4',
    loadChildren: () => import('./f4/f4.module').then( m => m.F4PageModule)
  },
  {
    path: 'f5',
    loadChildren: () => import('./f5/f5.module').then( m => m.F5PageModule)
  },
  {
    path: 'k1',
    loadChildren: () => import('./k1/k1.module').then( m => m.K1PageModule)
  },
  {
    path: 'k2',
    loadChildren: () => import('./k2/k2.module').then( m => m.K2PageModule)
  },
  {
    path: 'k3',
    loadChildren: () => import('./k3/k3.module').then( m => m.K3PageModule)
  },
  {
    path: 'k4',
    loadChildren: () => import('./k4/k4.module').then( m => m.K4PageModule)
  },
  {
    path: 'k5',
    loadChildren: () => import('./k5/k5.module').then( m => m.K5PageModule)
  },
  {
    path: 'k6',
    loadChildren: () => import('./k6/k6.module').then( m => m.K6PageModule)
  },
  {
    path: 'k7',
    loadChildren: () => import('./k7/k7.module').then( m => m.K7PageModule)
  },
  {
    path: 'k8',
    loadChildren: () => import('./k8/k8.module').then( m => m.K8PageModule)
  },
  {
    path: 'k9',
    loadChildren: () => import('./k9/k9.module').then( m => m.K9PageModule)
  },
  {
    path: 'k10',
    loadChildren: () => import('./k10/k10.module').then( m => m.K10PageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'faq2',
    loadChildren: () => import('./faq2/faq2.module').then( m => m.Faq2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
