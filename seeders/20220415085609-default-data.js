'use strict';
const bcrypt = require('bcryptjs');
const SEED_USER = {
  name: 'root',
  email: 'root@example.com',
  password: '12345678'
}

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: SEED_USER.name,
      email: SEED_USER.email,
      password: bcrypt.hashSync(SEED_USER.password, bcrypt.genSalt(10), null),
      creatdAt: new Date(),
      updatedAt: new Date()
    }], {})
      .then(userId => queryInterface.bulkInsert('Todos',
        Array.from({ length: 10 }).map((_, i) => 
        ({
          name: `name-${i}`,
          UserId: userId,
          creatdAt: new Date(),
          updatedAt: new Date()
        })
      ), {}))
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Todo', null, {})
      .then(() => queryInterface.bulkDelete('Users', null, {}))
  }
};
