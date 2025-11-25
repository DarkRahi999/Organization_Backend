import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Expose } from "class-transformer";

// DTOs for authentication
export class LoginDto {
  @IsString()
  @ApiProperty({
    description: "User email",
    example: "user@example.com",
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: "User password",
    example: "password123",
  })
  password: string;
}

export class LoginRes {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  access_token: string;
}

export class RefreshTokenDto {
  @IsString()
  @ApiProperty({
    description: "Refresh token",
    example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  })
  refreshToken: string;
}
