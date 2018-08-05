import { AltCoinEditorComponent } from './admin/alt-coin/alt-coin-editor/alt-coin-editor.component';
import { AltCoinListComponent } from './admin/alt-coin/alt-coin-list/alt-coin-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './_shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './_shared/components/footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        AltCoinListComponent,
        AltCoinEditorComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', pathMatch: 'full', redirectTo: 'admin/alt-coins' },
            { path: 'admin/alt-coins', component: AltCoinListComponent },
            // { path: 'voting-panel', component: VotingPanelComponent },
            { path: 'admin/alt-coins/create', component: AltCoinEditorComponent,  },
            { path: 'admin/alt-coins/edit/:id', component: AltCoinEditorComponent },
            // { path: 'empty', component: EmptyComponent, outlet: 'sub' },

        ])
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
