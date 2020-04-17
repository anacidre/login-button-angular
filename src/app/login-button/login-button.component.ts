import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { AuthService, Credentials } from "../auth.service";

@Component({
  selector: "app-login-button",
  templateUrl: "./login-button.component.html",
  styleUrls: ["./login-button.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoginButtonComponent implements OnInit {
  public credential: Credentials;

  @Input() domain: string;
  @Input() clientid: string;

  constructor(public auth: AuthService) {}

  ngOnInit() {
    if (this.domain && this.clientid) {
      this.auth.init({
        domain: this.domain,
        clientid: this.clientid,
      });
    }
  }

  ngOnChange() {
    if (this.domain && this.clientid) {
      this.auth.init({
        domain: this.domain,
        clientid: this.clientid,
      });
    }
  }
}
