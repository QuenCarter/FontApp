import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontListComponent } from './fonts/font-list.component';
import { PreviewFontsComponent } from './preview/preview-fonts.component';

@NgModule({
  declarations: [
    AppComponent,
    FontListComponent,
    PreviewFontsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
