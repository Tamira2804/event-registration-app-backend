const mongoose = require('mongoose')
const Event = require('./models/Event')

const { DB_HOST, PORT = 3001 } = process.env

mongoose
  .connect('mongodb+srv://admin:admin@eventscluster.3lf9cz1.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
    return Event.insertMany([
      {
        title: 'Event 16',
        description: 'Description 16',
        date: new Date(),
        organizer: 'Organizer 16',
        participants: [
          {
            name: 'John',
            email: 'jones@example.com',
            dob: '25.05.1980',
            source: 'social media',
          },
          {
            name: 'Julian',
            email: 'jones@example.com',
            dob: '12.02.1999',
            source: 'social media',
          },
        ],
      },
      {
        title: 'Event 17',
        description: 'Description 17',
        date: new Date(),
        organizer: 'Organizer 17',
        participants: [],
      },
      {
        title: 'Event 18',
        description: 'Description 18',
        date: new Date(),
        organizer: 'Organizer 18',
        participants: [
          {
            name: 'John',
            email: 'jones@example.com',
            dob: '25.05.1980',
            source: 'social media',
          },
          {
            name: 'Julian',
            email: 'jones@example.com',
            dob: '12.02.1999',
            source: 'social media',
          },
        ],
      },
      {
        title: 'Event 19',
        description: 'Description 19',
        date: new Date(),
        organizer: 'Organizer 19',
        participants: [],
      },
      {
        title: 'Event 20',
        description: 'Description 20',
        date: new Date(),
        organizer: 'Organizer 20',
        participants: [],
      },
      {
        title: 'Event 21',
        description: 'Description 21',
        date: new Date(),
        organizer: 'Organizer 21',
        participants: [],
      },
      {
        title: 'Event 22',
        description: 'Description 22',
        date: new Date(),
        organizer: 'Organizer 22',
        participants: [],
      },
      {
        title: 'Event 23',
        description: 'Description 23',
        date: new Date(),
        organizer: 'Organizer 23',
        participants: [],
      },
      {
        title: 'Event 25',
        description: 'Description 25',
        date: new Date(),
        organizer: 'Organizer 25',
        participants: [],
      },
      {
        title: 'Event 26',
        description: 'Description 26',
        date: new Date(),
        organizer: 'Organizer 26',
        participants: [],
      },
      {
        title: 'Event 27',
        description: 'Description 27',
        date: new Date(),
        organizer: 'Organizer 27',
        participants: [],
      },
      {
        title: 'Event 28',
        description: 'Description 28',
        date: new Date(),
        organizer: 'Organizer 28',
        participants: [],
      },
      {
        title: 'Event 29',
        description: 'Description 29',
        date: new Date(),
        organizer: 'Organizer 29',
        participants: [],
      },
      {
        title: 'Event 30',
        description: 'Description 30',
        date: new Date(),
        organizer: 'Organizer 30',
        participants: [],
      },
      {
        title: 'Event 31',
        description: 'Description 31',
        date: new Date(),
        organizer: 'Organizer 31',
        participants: [],
      },
      {
        title: 'Event 32',
        description: 'Description 32',
        date: new Date(),
        organizer: 'Organizer 32',
        participants: [
          {
            name: 'John',
            email: 'jones@example.com',
            dob: '25.05.1980',
            source: 'social media',
          },
          {
            name: 'Julian',
            email: 'jones@example.com',
            dob: '12.02.1999',
            source: 'social media',
          },
        ],
      },
      {
        title: 'Event 33',
        description: 'Description 33',
        date: new Date(),
        organizer: 'Organizer 33',
        participants: [],
      },
      {
        title: 'Event 34',
        description: 'Description 34',
        date: new Date(),
        organizer: 'Organizer 34',
        participants: [
          {
            name: 'John',
            email: 'jones@example.com',
            dob: '25.05.1980',
            source: 'social media',
          },
          {
            name: 'Julian',
            email: 'jones@example.com',
            dob: '12.02.1999',
            source: 'social media',
          },
        ],
      },
      {
        title: 'Event 35',
        description: 'Description 35',
        date: new Date(),
        organizer: 'Organizer 35',
        participants: [],
      },
      {
        title: 'Event 36',
        description: 'Description 36',
        date: new Date(),
        organizer: 'Organizer 36',
        participants: [],
      },
      {
        title: 'Event 37',
        description: 'Description 37',
        date: new Date(),
        organizer: 'Organizer 37',
        participants: [
          {
            name: 'John',
            email: 'jones@example.com',
            dob: '25.05.1980',
            source: 'social media',
          },
          {
            name: 'Julian',
            email: 'jones@example.com',
            dob: '12.02.1999',
            source: 'social media',
          },
        ],
      },
      {
        title: 'Event 38',
        description: 'Description 38',
        date: new Date(),
        organizer: 'Organizer 38',
        participants: [],
      },
      {
        title: 'Event 39',
        description: 'Description 39',
        date: new Date(),
        organizer: 'Organizer 39',
        participants: [
          {
            name: 'John',
            email: 'jones@example.com',
            dob: '25.05.1980',
            source: 'social media',
          },
          {
            name: 'Julian',
            email: 'jones@example.com',
            dob: '12.02.1999',
            source: 'social media',
          },
        ],
      },
      {
        title: 'Event 40',
        description: 'Description 40',
        date: new Date(),
        organizer: 'Organizer 40',
        participants: [],
      },
      {
        title: 'Event 41',
        description: 'Description 41',
        date: new Date(),
        organizer: 'Organizer 41',
        participants: [],
      },
      {
        title: 'Event 42',
        description: 'Description 42',
        date: new Date(),
        organizer: 'Organizer 42',
        participants: [
          {
            name: 'John',
            email: 'jones@example.com',
            dob: '25.05.1980',
            source: 'social media',
          },
          {
            name: 'Julian',
            email: 'jones@example.com',
            dob: '12.02.1999',
            source: 'social media',
          },
        ],
      },
      {
        title: 'Event 43',
        description: 'Description 43',
        date: new Date(),
        organizer: 'Organizer 43',
        participants: [],
      },
      {
        title: 'Event 44',
        description: 'Description 44',
        date: new Date(),
        organizer: 'Organizer 44',
        participants: [
          {
            name: 'John',
            email: 'jones@example.com',
            dob: '25.05.1980',
            source: 'social media',
          },
          {
            name: 'Julian',
            email: 'jones@example.com',
            dob: '12.02.1999',
            source: 'social media',
          },
        ],
      },
      {
        title: 'Event 45',
        description: 'Description 45',
        date: new Date(),
        organizer: 'Organizer 45',
        participants: [],
      },
      {
        title: 'Event 46',
        description: 'Description 46',
        date: new Date(),
        organizer: 'Organizer 46',
        participants: [],
      },
    ])
  })
  .then(() => {
    console.log('Data seeded successfully')
    mongoose.connection.close()
  })
  .catch((err) => console.error('Failed to seed data', err))
