import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";

export const AppRotas: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
    }
]