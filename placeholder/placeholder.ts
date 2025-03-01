export const placeholder = {
    notifications: [
        {
          NotifId: 1,
          Title: 'Notification1',
          Description: "Test Notification",
          Time: "dd/mm/yyyy"
        },
        {
          NotifId: 2,
          Title: 'Notification2',
          Description: "Test Notification",
          Time: "dd/mm/yyyy"
        },
        {
          NotifId: 3,
          Title: 'Notification3',
          Description: "Test Notificationasdfjklasdjsakldgsdklgjlkasdgjskladgjalsk",
          Time: "dd/mm/yyyy"
        },
        {
          NotifId: 4,
          Title: 'Notification4',
          Description: "Test ;dgjkl;asdgjlksadgkljs;dglk",
          Time: "dd/mm/yyyy"
        },
        {
          NotifId: 5,
          Title: 'Notification1',
          Description: "Test Notification",
          Time: "dd/mm/yyyy"
        },
        {
          NotifId: 6,
          Title: 'Notification2',
          Description: "Test Notification",
          Time: "dd/mm/yyyy"
        },
        {
          NotifId: 7,
          Title: 'Notification3',
          Description: "Test Notificationasdfjklasdjsakldgsdklgjlkasdgjskladgjalsk",
          Time: "dd/mm/yyyy"
        },
        {
          NotifId: 8,
          Title: 'Notification4',
          Description: "Test ;dgjkl;asdgjlksadgkljs;dglk",
          Time: "dd/mm/yyyy"
        },
        {
          NotifId: 9,
          Title: 'Notification1',
          Description: "Test Notification",
          Time: "dd/mm/yyyy"
        },
        {
          NotifId: 10,
          Title: 'Notification2',
          Description: "Test Notification",
          Time: "dd/mm/yyyy"
        },
        {
          NotifId: 11,
          Title: 'Notification3',
          Description: "Test Notificationasdfjklasdjsakldgsdklgjlkasdgjskladgjalsk",
          Time: "dd/mm/yyyy"
        },
        {
          NotifId: 12,
          Title: 'Notification4',
          Description: "Test ;dgjkl;asdgjlksadgkljs;dglk",
          Time: "dd/mm/yyyy"
        },
        {
          NotifId: 13,
          Title: 'Notification1',
          Description: "Test Notification",
          Time: "dd/mm/yyyy"
        },
        {
          NotifId: 14,
          Title: 'Notification2',
          Description: "Test Notification",
          Time: "dd/mm/yyyy"
        },
        {
          NotifId: 15,
          Title: 'Notification3',
          Description: "Test Notificationasdfjklasdjsakldgsdklgjlkasdgjskladgjalsk",
          Time: "dd/mm/yyyy"
        },
        {
          NotifId: 16,
          Title: 'Notification4',
          Description: "Test ;dgjkl;asdgjlksadgkljs;dglk",
          Time: "dd/mm/yyyy"
        }
    ],

    user: {
        UserId: 1,
        Username: "Bob",
        Password: "xyz"
    },

    provider: {
        ProviderId: 1,
        Name: "Dr. ABCDEF",
        Email: "dr_abcdef@your_clinic.ca",
        RegularPhone: "(123) 546 - 7890",
        EmergencyNumber: "(xxx) xxx-xxx"
    },

    inhaler: [
        {
          InhalerId: 1,
          Title: "50 mcg/puff Salbutermol (Orange) - Twice a day",
          AmountLeft: 0.5,
          InhalerType: 1
        },
        {
          InhalerId: 2,
          Title: "100 mcg/puff Ventolin (Blue) - As needed",
          AmountLeft: 0.8,
          InhalerType: 2
        },
        {
          InhalerId: 3,
          Title: "This is a test puffer",
          AmountLeft: 0.2,
          InhalerType: 1
        }
    ],

    resources: [
      {
        ResourceId: 1,
        Title: "Peep and the big world!",
        Description: "More information about peep",
        Link: "https://datatracker.ietf.org/doc/html/rfc7168"
      },
      {
        ResourceId: 2,
        Title: "Peep and the big world!",
        Description: "More information about peep",
        Link: "https://datatracker.ietf.org/doc/html/rfc7168"
      },
      {
        ResourceId: 3,
        Title: "Peep and the big world!",
        Description: "More information about peep",
        Link: "https://datatracker.ietf.org/doc/html/rfc7168"
      },
      {
        ResourceId: 4,
        Title: "Peep and the big world!",
        Description: "More information about peep",
        Link: "https://datatracker.ietf.org/doc/html/rfc7168"
      },
      {
        ResourceId: 5,
        Title: "Peep and the big world!",
        Description: "More information about peep",
        Link: "https://datatracker.ietf.org/doc/html/rfc7168"
      },
      {
        ResourceId: 6,
        Title: "Peep and the big world!",
        Description: "More information about peep",
        Link: "https://datatracker.ietf.org/doc/html/rfc7168"
      },
      {
        ResourceId: 7,
        Title: "Peep and the big world!",
        Description: "More information about peep",
        Link: "https://datatracker.ietf.org/doc/html/rfc7168"
      },
      {
        ResourceId: 8,
        Title: "Peep and the big world!",
        Description: "More information about peep",
        Link: "https://datatracker.ietf.org/doc/html/rfc7168"
      }
    ],

    spacer: {
        SpacerId: 1,
        SerialNum: "1234567890",
        Percentage: 0.6,
        Paired: true,
    },

    journal: [
      {
        JournalId: 1,
        ChildId: 1,
        Date: new Date(),
        Score: 27,
        Description: "asdfasdfasdfasdf",
        Hospitalizations: 1,
        Allergy: 1
      },
      {
        JournalId: 2,
        ChildId: 1,
        Date: new Date("2025-02-26"),
        Score: 26,
        Description: "asdfasdfasdfasdf",
        Hospitalizations: 0,
        Allergy: 0
      },
      {
        JournalId: 3,
        ChildId: 1,
        Date: new Date("2025-02-23"),
        Score: 29,
        Description: "asdfasdfasdfasdf",
        Hospitalizations: 0,
        Allergy: 0
      }
    ],

    spaceruse: [
      {
        SpacerUseId: 1,
        ChildId: 1,
        DateTime: new Date(),
        MorningTechnique: 1,
        EveningTechnique: 1,
        RelieverCount: 1,
      },
      {
        SpacerUseId: 2,
        ChildId: 1,
        DateTime: new Date(),
        MorningTechnique: 1,
        EveningTechnique: 3,
        RelieverCount: 2,
      },
      {
        SpacerUseId: 3,
        ChildId: 1,
        DateTime: new Date(),
        MorningTechnique: 1,
        EveningTechnique: 2,
        RelieverCount: 2,
      },
      {
        SpacerUseId: 4,
        ChildId: 1,
        DateTime: new Date(),
        MorningTechnique: 1,
        EveningTechnique: 1,
        RelieverCount: 3,
      },
      {
        SpacerUseId: 5,
        ChildId: 1,
        DateTime: new Date(),
        MorningTechnique: 3,
        EveningTechnique: 3,
        RelieverCount: 1,
      },
      {
        SpacerUseId: 6,
        ChildId: 1,
        DateTime: new Date(),
        MorningTechnique: 2,
        EveningTechnique: 1,
        RelieverCount: 1,
      },
      {
        SpacerUseId: 7,
        ChildId: 1,
        DateTime: new Date(),
        MorningTechnique: 3,
        EveningTechnique: 1,
        RelieverCount: 1,
      }
    ]
}