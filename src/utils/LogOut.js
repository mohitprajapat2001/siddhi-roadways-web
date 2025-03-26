import { redirectPage } from "./utils";
/**Logout & Update Token Handling */
export const LogOut = async () => {
  /**Log Out */
  redirectPage("/auth/login");
};
