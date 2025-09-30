// src/admin/dto/create-organization.dto.ts
export class CreateOrganizationDto {
  name: string;
  email: string;
  phone?: string;
  dbHost: string;
  dbName: string;
  dbUser: string;
  dbPassword: string;
}
