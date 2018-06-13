import {NgModule} from "@angular/core";

import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {BrowserModule} from "@angular/platform-browser";
import {CovalentLoadingModule} from "@covalent/core/loading";
import {CovalentMenuModule} from "@covalent/core/menu";
import {CovalentNotificationsModule} from "@covalent/core/notifications";

import {KyloServicesModule} from "../services/services.module";
import {AddButtonComponent} from "./add-button/add-button.component";
import {NotificationMenuComponent} from "./notifications/notification-menu.component";
import {ViewTypeSelectionComponent} from "./view-type-selection/view-type-selection.component";
import {VerticalSectionLayoutComponent} from "./vertical-section-layout/vertical-section-layout-directive.component";
import {OptionsMenuComponent} from "./options-menu/OptionsMenu.component"
import {RouterBreadcrumbsComponent} from "./ui-router-breadcrumbs/ui-router-breadcrumbs.component";
import {KyloOptionsComponent} from "./kylo-options/kylo-options.component";
import {UploadFileComponent} from "./file-upload/file-upload.component";
import {CardFilterHeaderComponent} from "./card-filter-header/card-filter-header.component";
import {CardLayoutComponent} from "./card-layout/card-layout.component";

import {TranslatePipe} from "./translate.pipe";
import {aboutKyloServiceProvider} from "./angular2";

@NgModule({
    declarations: [
        AddButtonComponent,
        NotificationMenuComponent,
        ViewTypeSelectionComponent,
        VerticalSectionLayoutComponent,
        OptionsMenuComponent,
        RouterBreadcrumbsComponent,
        KyloOptionsComponent,
        CardFilterHeaderComponent,
        UploadFileComponent,
        TranslatePipe,
        CardLayoutComponent
    ],
    entryComponents: [
        AddButtonComponent,
        NotificationMenuComponent,
        ViewTypeSelectionComponent,
        VerticalSectionLayoutComponent,
        OptionsMenuComponent,
        RouterBreadcrumbsComponent,
        KyloOptionsComponent,
        CardFilterHeaderComponent,
        UploadFileComponent,
        CardLayoutComponent
    ],
    imports: [
        BrowserModule,
        CovalentLoadingModule,
        CovalentMenuModule,
        CovalentNotificationsModule,
        KyloServicesModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        MatDialogModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [aboutKyloServiceProvider]
})
export class KyloCommonModule {
}
