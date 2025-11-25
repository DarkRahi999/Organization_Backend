import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { LoginDto, LoginRes } from "./dto/logIn.dto";
import { EntityManager } from "@mikro-orm/postgresql";
import { joinStrings } from "src/utils/modifier";
import { JwtService } from "@nestjs/jwt";
import { User } from "./entities/user.entity";
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(
    private readonly em: EntityManager,
    private readonly jwtService: JwtService
  ) {}

  async loginUser(data: LoginDto): Promise<LoginRes> {
    // Simple validation
    try {
      const user = await this.em.findOne(User, { email: data.email });
      if (!user) {
        throw new NotFoundException("User not found");
      }

      const ok = await bcrypt.compare(data.password, user.passwordHash);
      if (!ok) {
        throw new UnauthorizedException("Invalid credentials");
      }

      const token = await this.signPayload({
        sub: String(user.id),
        email: user.email,
        role: user.role,
      });

      return {
        id: user.id,
        name: joinStrings(user.firstName, user.lastName),
        email: user.email,
        access_token: token,
      };
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }

      throw new InternalServerErrorException("Something went wrong", {
        cause: error,
      });
    }
  }

  async signPayload<T extends object>(payload: T): Promise<string> {
    return this.jwtService.signAsync(payload, { expiresIn: "7d" });
  }
}
