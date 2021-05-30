import { NgModule } from '@angular/core';

import { MyLibComponent } from './my-lib.component';
import { CounterDemoComponent } from './counter-demo/counter-demo.component';

@NgModule({
  declarations: [MyLibComponent, CounterDemoComponent],
  imports: [
  ],
  exports: [MyLibComponent, CounterDemoComponent]
})
export class MyLibModule { }
