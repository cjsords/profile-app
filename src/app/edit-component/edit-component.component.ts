import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProfileService } from "../services/profile-service.service";
import { UserProfile } from "../interfaces/user-profile";

@Component({
  selector: "app-edit-component",
  templateUrl: "./edit-component.component.html",
  styleUrls: ["./edit-component.component.css"]
})
export class EditComponent implements OnInit {
  profile: UserProfile;

  constructor(private profileService: ProfileService, private router: Router) {}
  onSubmit() {
    this.profile = this.profile;
    this.router.navigate(["profile"]);
  }

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }
}
