import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { HashingService } from '../iam/hashing/hashing.service';
import { UserRole } from '../users/enums/user-role.enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const userRepo = app.get<Repository<User>>('UserRepository');
  const hashingService = app.get(HashingService);

  const email = 'superadmin@example.com';
  const existingUser = await userRepo.findOne({ where: { email } });

  if (!existingUser) {
    const user = userRepo.create({
      name: 'Super Admin',
      email,
      password: await hashingService.hash('SuperAdmin@123'),
      role: UserRole.SUPER_ADMIN,
    });
    await userRepo.save(user);
    console.log('✅ Super Admin seeded successfully!');
  } else {
    console.log('ℹ️ Super Admin already exists.');
  }

  await app.close();
}

bootstrap();
