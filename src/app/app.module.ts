import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

import { LoginButtonComponent } from "./login-button/login-button.component";
import { RouterModule } from "@angular/router";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [LoginButtonComponent],
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
