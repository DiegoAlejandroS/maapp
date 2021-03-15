import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {TabletasksComponent} from './components/shared/tabletasks/tabletasks.component';



const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'tabletasks', component: TabletasksComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);