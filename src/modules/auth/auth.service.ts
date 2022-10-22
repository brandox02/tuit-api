import { Inject, Injectable } from "@nestjs/common";
import { User } from "../user/user.entity";
import { UserService } from "../user/user.service";

export type AuthenticatedUser = Omit<User, "password">;

@Injectable()
export class AuthService {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  async validateUser(
    username: string,
    password: string
  ): Promise<AuthenticatedUser | null> {
    const user = await this.userService.findOne({ username });

    if (user && user.password === password) {
      const { password: _, ...result } = user;
      return result;
    }
    return null;
  }
}
