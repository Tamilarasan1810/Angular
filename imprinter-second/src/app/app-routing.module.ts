import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FileFeaturesComponent } from './files-control/file-features/file-features.component';
const routes: Routes = [{ path: 'features', component: FileFeaturesComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppRoutingModule {}
