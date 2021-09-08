import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: ShellComponent }])],
  exports: [],
  declarations: [ShellComponent],
  providers: [],
})
export class ShellModule {}
