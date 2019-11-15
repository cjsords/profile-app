import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../services/profile-service.service";
import { UserProfile } from "../interfaces/user-profile";

@Component({
  selector: "app-profile-component",
  templateUrl: "./profile-component.component.html",
  styleUrls: ["./profile-component.component.css"]
})
export class ProfileComponent implements OnInit {
  profile: UserProfile;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }
}
