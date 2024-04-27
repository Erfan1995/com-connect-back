'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NewsEventsFeeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      newsDate: {
        type: Sequelize.DATE
      },
      eventDateTime: {
        type: Sequelize.DATE
      },
      urlOrPlace: {
        type: Sequelize.STRING
      },
      chargeableEvent: {
        type: Sequelize.STRING
      },
      eventSpeakerName: {
        type: Sequelize.STRING
      },
      speakerDetails: {
        type: Sequelize.STRING
      },
      numberOfAttendees: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('NewsEventsFeeds');
  }
};