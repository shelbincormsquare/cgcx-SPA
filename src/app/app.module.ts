import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { AdminRegisterComponent } from './auth/admin-register/admin-register.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AltCoinEditorComponent } from './admin/alt-coin/alt-coin-editor/alt-coin-editor.component';
import { AltCoinListComponent } from './admin/alt-coin/alt-coin-list/alt-coin-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavBarComponent } from './_shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './_shared/components/footer/footer.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { ReportViewComponent } from './reports/report-view/report-view.component';
import { VotingPanelComponent } from './voting/voting-panel/voting-panel.component';


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        HomePageComponent,
        AdminLoginComponent,
        UserLoginComponent,
        AdminRegisterComponent,
        ReportViewComponent,
        UserDetailComponent,
        VotingPanelComponent,
        AltCoinListComponent,
        AltCoinEditorComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot(),
        RouterModule.forRoot([
            { path: '', pathMatch: 'full', redirectTo: 'home-page' },
            { path: 'home-page', component: HomePageComponent },

            { path: 'admin/alt-coins', component: AltCoinListComponent },
            { path: 'admin/alt-coins/create', component: AltCoinEditorComponent, },
            { path: 'admin/alt-coins/edit/:id', component: AltCoinEditorComponent },

        ])
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
