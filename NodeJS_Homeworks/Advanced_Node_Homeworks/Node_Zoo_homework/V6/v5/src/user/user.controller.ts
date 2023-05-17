import { Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { UserRolesParamsDto } from './dtos/user-roles-params.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id/role/:role')
  updateUserRole(@Param() { id, role }: UserRolesParamsDto) {
    return this.userService.updateUserRole(id, role);
  }
}
