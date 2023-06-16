import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module
import { SharedModule } from "../shared/shared.module";


//Modules Rounting
import { RoutingModule } from './routing.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './pages/details/details.component';




@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        RoutingModule,
        SharedModule
    ]
})
export class PagesModule { }
