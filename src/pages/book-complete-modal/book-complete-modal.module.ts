import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookCompleteModalPage } from './book-complete-modal';

@NgModule({
  declarations: [
    BookCompleteModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BookCompleteModalPage),
  ],
})
export class BookCompleteModalPageModule {}
