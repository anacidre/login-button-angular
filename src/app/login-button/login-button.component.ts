import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { AuthService, Credentials } from "../auth.service";

@Component({
  selector: "app-login-button",
  templateUrl: "./login-button.component.html",
  styleUrls: ["./login-button.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoginButtonComponent implements OnInit {
  @Input() set credentials(credentials: Credentials) {
    if (credentials) {
      this.auth.init(credentials);
    }
  }
  constructor(public auth: AuthService) {}

  ngOnInit() {}
}
