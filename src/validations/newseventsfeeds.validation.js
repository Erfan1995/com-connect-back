const Joi = require('joi');

const newsEventsFeeds = {
  body: Joi.object().keys({
    type: Joi.string().required(),            // Type will be either News or Event
    title: Joi.string().required(),           // Title of News and Event 
    description: Joi.string().required(),     // Description of News and Event
    newsDate: Joi.date().required(),           // Date of News
    eventDateTime: Joi.date().required(),      // Date and Time of Event
    urlOrPlace: Joi.string().required(),       // if event is virtual then Url, else Physical location of event
    chargeableEvent: Joi.string().required(),  // Event is free or chargeble
    eventSpeakerName: Joi.string().required(), // Speaker name who organize the event
    speakerDetails: Joi.string().required(),   // Description about event Speaker
    numberOfAttendees: Joi.number().required(), // Total count of Attendees for event
  }),
};

module.exports = {
    newsEventsFeeds,
};
