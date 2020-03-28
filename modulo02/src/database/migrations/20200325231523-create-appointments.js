

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('appointments', {
      id: {
        type: Sequelize.INTEGER,
        allownull: false,
        autoIncrement: true,
        primaryKey: true
      },

      date: {
        allownull: false,
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', Key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      provider_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', Key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      canceled_at: {
        type: Sequelize.DATE,
        allownull: true
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

  },

  down: queryInterface => {

    return queryInterface.dropTable('appointments');

  }
};
