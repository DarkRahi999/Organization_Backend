import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { LoginDto, LoginRes } from "./dto/logIn.dto";
import { AuthService } from "./auth.service";
import { Public } from "src/utils/decorator";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post("login")
  @ApiOperation({ summary: "User Login" })
  @ApiResponse({ status: 200, description: "Login successful" })
  @ApiResponse({ status: 401, description: "Invalid credentials" })
  async login(@Body() data: LoginDto): Promise<LoginRes> {
    return await this.authService.loginUser(data);
  }
}
