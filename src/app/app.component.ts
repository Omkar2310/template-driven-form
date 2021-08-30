import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f", { static: false }) subscriptionForm: NgForm;
  submmitted = false;
  defaultSubscription = "advanced";
  user = {
    email: "",
    subscription: "",
    password: "",
  };
  onSubmit() {
    console.log(this.subscriptionForm);
    this.submmitted = true;
    this.user.email = this.subscriptionForm.value.email;
    this.user.subscription = this.subscriptionForm.value.subscription;
    this.user.password = this.subscriptionForm.value.password;

    this.subscriptionForm.resetForm();
  }
}
