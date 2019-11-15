import { Injectable } from "@angular/core";
import { UserProfile } from "../interfaces/user-profile";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  private userProfile: UserProfile = {
    name: "Colin",
    contact: "cjsords@gmail.com",
    bio: "handstands aren't that cool"
  };

  getUserProfile(): UserProfile {
    return this.userProfile;
  }

  setUserProfile(userProfile: UserProfile): void {
    this.userProfile = userProfile;
  }

  constructor() {}
}
