'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsEventsFeeds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NewsEventsFeeds.init({
    type: DataTypes.STRING,             // Type will be either News or Event
    title: DataTypes.STRING,            // Title of News and Event 
    description: DataTypes.STRING,      // Description of News and Event
    newsDate: DataTypes.DATE,           // Date of News
    eventDateTime: DataTypes.DATE,      // Date and Time of Event
    urlOrPlace: DataTypes.STRING,       // if event is virtual then Url, else Physical location of event
    chargeableEvent: DataTypes.STRING,  // Event is free or chargeble
    eventSpeakerName: DataTypes.STRING, // Speaker name who organize the event
    speakerDetails: DataTypes.STRING,   // Description about event Speaker
    numberOfAttendees: DataTypes.INTEGER // Total count of Attendees for event
  }, {
    sequelize,
    modelName: 'NewsEventsFeeds',
  });
  return NewsEventsFeeds;
};