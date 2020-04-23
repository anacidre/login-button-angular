import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { AppComponent } from "./app.component";
import { LoginButtonComponent } from "./login-button/login-button.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, LoginButtonComponent],
  imports: [BrowserModule, RouterModule.forRoot([])],
  entryComponents: [LoginButtonComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const loginButton = createCustomElement(LoginButtonComponent, {
      injector: this.injector,
    }) as any;
    customElements.define("login-button", loginButton);
  }
}
