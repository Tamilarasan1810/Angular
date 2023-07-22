import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ComponentsModule } from '../components/components.module';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';

@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [CommonModule, ComponentsModule, RouterOutlet],
})
export class LayoutsModule {}
