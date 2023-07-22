import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { FilesControlComponent } from './files-control/files-control.component';
import { FileFeaturesComponent } from './files-control/file-features/file-features.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PopUpFeatureComponent } from './files-control/pop-up-feature/pop-up-feature.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: FilesControlComponent },
  { path: 'feature', component: FileFeaturesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FilesControlComponent,
    FileFeaturesComponent,
    PopUpFeatureComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
