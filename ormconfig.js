const {
  default: AdminUser,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('nestjs-admin/dist/src/adminUser/adminUser.entity');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { UserEntity } = require('./libs/user/src/schemas/user.entity');

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: '',
  password: '',
  database: 'test_db',
  ssl: false,
  entities: [AdminUser, UserEntity],
};
