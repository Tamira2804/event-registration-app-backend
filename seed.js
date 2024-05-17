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
        title: 'Event 1',
        description: 'Description 1',
        date: new Date(),
        organizer: 'Organizer 1',
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
        title: 'Event 2',
        description: 'Description 2',
        date: new Date(),
        organizer: 'Organizer 2',
        participants: [],
      },
      {
        title: 'Event 3',
        description: 'Description 3',
        date: new Date(),
        organizer: 'Organizer 3',
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
        title: 'Event 4',
        description: 'Description 4',
        date: new Date(),
        organizer: 'Organizer 4',
        participants: [],
      },
      {
        title: 'Event 5',
        description: 'Description 5',
        date: new Date(),
        organizer: 'Organizer 5',
        participants: [],
      },
      {
        title: 'Event 6',
        description: 'Description 6',
        date: new Date(),
        organizer: 'Organizer 6',
        participants: [],
      },
      {
        title: 'Event 7',
        description: 'Description 7',
        date: new Date(),
        organizer: 'Organizer 7',
        participants: [],
      },
      {
        title: 'Event 8',
        description: 'Description 8',
        date: new Date(),
        organizer: 'Organizer 8',
        participants: [],
      },
      {
        title: 'Event 9',
        description: 'Description 9',
        date: new Date(),
        organizer: 'Organizer 9',
        participants: [],
      },
      {
        title: 'Event 10',
        description: 'Description 10',
        date: new Date(),
        organizer: 'Organizer 10',
        participants: [],
      },
      {
        title: 'Event 11',
        description: 'Description 11',
        date: new Date(),
        organizer: 'Organizer 11',
        participants: [],
      },
      {
        title: 'Event 12',
        description: 'Description 12',
        date: new Date(),
        organizer: 'Organizer 12',
        participants: [],
      },
      {
        title: 'Event 13',
        description: 'Description 13',
        date: new Date(),
        organizer: 'Organizer 13',
        participants: [],
      },
      {
        title: 'Event 14',
        description: 'Description 14',
        date: new Date(),
        organizer: 'Organizer 14',
        participants: [],
      },
      {
        title: 'Event 15',
        description: 'Description 15',
        date: new Date(),
        organizer: 'Organizer 15',
        participants: [],
      },
    ])
  })
  .then(() => {
    console.log('Data seeded successfully')
    mongoose.connection.close()
  })
  .catch((err) => console.error('Failed to seed data', err))
