import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateOrganizationDto } from './dto/create-tenant.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('organizations')
  async createOrganization(@Body() dto: CreateOrganizationDto) {
    return this.adminService.createOrganization(dto);
  }
}
