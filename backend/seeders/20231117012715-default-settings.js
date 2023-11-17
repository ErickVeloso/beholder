'use strict';
require('dotenv').config();
const crypto = require('../src/utils/crypto');
const bcrypt = require('bcryptjs');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const settingsId = await queryInterface.rawSelect('settings', { where: {}, limit: 1 }, ['id']);
    if (!settingsId) {
      return queryInterface.bulkInsert('settings', [{
        email: 'teste@123.com',
        password: bcrypt.hashSync('123456'),
        apiUrl: 'https://testnet.binance.vision/api/',
        accessKey: 'b8gT2dOgXF00hOIHo01IdJTqcWHNjVY9xyJXdzd1mFIaWlkezZ3rocw5BZ50UkoE',
        secretKey: crypto.encrypt('VTkzdo6UJCpcIKb0dtHq662MukUHEQP8igHxDSI4L1CqAgdugLjOSVdycd3xS5fu'),
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Settings', null, {});
  }
};
