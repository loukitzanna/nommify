import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Review = new Mongo.Collection('reviews');

Review.schema = new SimpleSchema({
  description: { type: Object },
  created: { type: Date },
  rating: { type: Number },
  title: { type: String },
  location: { type: String },
});

Meteor.methods({
  'reveiws.insert'({ description, rating, title, location }) {
    check(description, Object);
    check(rating, String);
    check(title, String);
    check(location, String);

    return Review.insert({
      description,
      rating,
      title,
      location,
      created: new Date(),
    });
  },
  'reveiws.update'(id, { description, rating, title, location }) {
    check(id, String);
    check(description, Object);
    check(rating, String);
    check(title, String);
    check(location, String);

    return Review.update(id, {
      $set: {
        id,
        description,
        rating,
        title,
        location,
        updated: new Date(),
      },
    });
  },
});

export default Review;
