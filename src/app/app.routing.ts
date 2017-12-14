import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';

export const routing = RouterModule.forRoot([
    { path:'', component:UsersComponent },
    { path:'add',component:UserFormComponent },
    { path:'add/:id', component: UserFormComponent }  	 
]);
