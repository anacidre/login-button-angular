import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginButtonComponent } from "./login-button/login-button.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, LoginButtonComponent],
  imports: [BrowserModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
