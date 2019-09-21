/**
 * @name CDNWatcher
 * @version 1.0.0b
 * @copyright Alonso R. 2019 All rights reserved.
 * @license MIT
 * @author Maestre3D
 * @description Root page routing
 */
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './root/pages.component';

const AppRouting: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('src/app/pages/home/home.module').then(module => module.HomeModule)
            },
            {
                path: 'cdn',
                loadChildren: () => import('src/app/pages/cdn/cdn.module').then(module => module.CdnModule)
            },
            {
                path: 'iam',
                loadChildren: () => import('src/app/pages/iam/iam.module').then(module => module.IamModule)
            },
            {
                path: 'notfound',
                loadChildren: () => import('src/app/shared/notfound/notfound.module').then(module => module.NotfoundModule)
            }
        ]
    },
    { path: '**', redirectTo: 'notfound', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild(AppRouting);
