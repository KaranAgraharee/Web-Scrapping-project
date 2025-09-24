// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017/product-explorer',
      { dbName: process.env.DB_NAME || 'product-explorer' },
    ),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
