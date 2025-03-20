export const placeholder = {
    notifications: [
        {
          NotifId: 1,
          Title: 'Spacer Cleaning',
          Description: "Make Sure to Clean Your Spacer!",
          Time: "2025-03-20"
        },
        {
          NotifId: 2,
          Title: "Don't Miss your Medication!",
          Description: "Be sure to take your medication before you start your day!",
          Time: "2025-03-20"
        },
        {
          NotifId: 3,
          Title: "Don't Miss your Medication",
          Description: "Don't forget to take your medication before bed",
          Time: "2025-03-20"
        },
        {
          NotifId: 4,
          Title: 'System Notification',
          Description: "User Account Updated",
          Time: "2025-03-20"
        },
        {
          NotifId: 5,
          Title: 'Spacer Cleaning',
          Description: "Make Sure to Clean Your Spacer!",
          Time: "2025-03-20"
        },
        {
          NotifId: 6,
          Title: "Don't Miss your Medication!",
          Description: "Be sure to take your medication before you start your day!",
          Time: "2025-03-20"
        },
        {
          NotifId: 7,
          Title: "Don't Miss your Medication",
          Description: "Don't forget to take your medication before bed",
          Time: "2025-03-20"
        },
        {
          NotifId: 8,
          Title: 'System Notification',
          Description: "User Account Updated",
          Time: "2025-03-20"
        },
        {
          NotifId: 9,
          Title: 'Spacer Cleaning',
          Description: "Make Sure to Clean Your Spacer!",
          Time: "2025-03-20"
        },
        {
          NotifId: 10,
          Title: "Don't Miss your Medication!",
          Description: "Be sure to take your medication before you start your day!",
          Time: "2025-03-20"
        },
        {
          NotifId: 11,
          Title: "Don't Miss your Medication",
          Description: "Don't forget to take your medication before bed",
          Time: "2025-03-20"
        },
        {
          NotifId: 12,
          Title: 'System Notification',
          Description: "User Account Updated",
          Time: "2025-03-20"
        },
        {
          NotifId: 13,
          Title: 'Spacer Cleaning',
          Description: "Make Sure to Clean Your Spacer!",
          Time: "2025-03-20"
        },
        {
          NotifId: 14,
          Title: "Don't Miss your Medication!",
          Description: "Be sure to take your medication before you start your day!",
          Time: "2025-03-20"
        },
        {
          NotifId: 15,
          Title: "Don't Miss your Medication",
          Description: "Don't forget to take your medication before bed",
          Time: "2025-03-20"
        },
        {
          NotifId: 16,
          Title: 'System Notification',
          Description: "User Account Updated",
          Time: "2025-03-20"
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