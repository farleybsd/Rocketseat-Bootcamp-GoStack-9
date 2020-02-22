

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allownull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allownull: false,

      },
      email: {
        type: Sequelize.STRING,
        allownull: false,
        unique: true,

      },
      passqord_hash: {
        type: Sequelize.STRING,
        allownull: false
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defautValue: false,
        allownull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allownull: false
      },
      update_at: {
        type: Sequelize.DATE,
        allownull: false
      }
    });

  },

  down: queryInterface => {

    return queryInterface.dropTable('users');

  }
};
