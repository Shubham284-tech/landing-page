type Feature = Record<string, string>;
export type PlanDetails = {
  price: string;
  detail: string;
  id: string;
  features: Feature[];
};

type PlanData = {
  [duration: string]: {
    [planName: string]: PlanDetails;
  }[];
};

export const plans: PlanData[] = [
  {
    Monthly: [
      {
        "Basic Single-User Package": {
          price: "9.99",
          detail: "One free feedback",
          id: "c7a1f7f2-8b4e-4d3e-ae67-2d14fa57b1d1",
          features: [
            {
              "Limited Pitches": "Practice for up to 5 pitches a month",
            },
            {
              "Objection-handling practice":
                "Prepare for real-world sales challenges",
            },
            {
              "Improve at your own pace": "No pressure, just results",
            },
            {
              "Create your Perfect Prospect":
                "Tailor each pitch to your target customer - from industry to personality",
            },
          ],
        },
      },

      {
        "Single-User Package": {
          price: "19.99",
          detail: "",
          id: "f59d7e2c-3c12-4ae4-b7f2-935681a1d49b",

          features: [
            {
              "Unlimited  Pitches": "Practice as much as you want",
            },
            {
              "Graded written feedback":
                "Get AI-powered analysis to improve your pitch",
            },
            {
              "Objection-handling practice":
                "Prepare for real-world sales challenges",
            },
            {
              "Improve at your own pace": "No pressure, just results",
            },
            {
              "Create your Perfect Prospect":
                "Tailor each pitch to your target customer - from industry to personality",
            },
          ],
        },
      },
      {
        "Team Package": {
          price: "15.99",
          detail: "*Requires a minimum of 5 members",
          id: "4b2c1a8f-9f1e-4113-88e4-6bd1f472a25e",

          features: [
            {
              "Manage your team seamlessly":
                "Add & remove unlimited team members",
            },
            {
              "Graded written feedback":
                "Get AI-powered personalized insights for each salesperson",
            },
            {
              "Sales dashboard":
                "Track team output, progress, and improvement areas",
            },
            {
              "Discounted per-user pricing": "Save more as your team grows!",
            },
          ],
        },
      },
    ],
  },
  {
    Annual: [
      {
        "Basic Single-User Package": {
          price: "99.99",
          detail: "One free feedback",
          id: "a2d567bf-e931-4c14-b8a3-4a9711a68ef1",

          features: [
            {
              "Limited Pitches": "Practice for up to 10 pitches a month",
            },
            {
              "Objection-handling practice":
                "Prepare for real-world sales challenges",
            },
            {
              "Improve at your own pace": "No pressure, just results",
            },
            {
              "Create your Perfect Prospect":
                "Tailor each pitch to your target customer - from industry to personality",
            },
          ],
        },
      },

      {
        "Single-User Package": {
          price: "199.99",
          detail: "",
          id: "d4c6f11e-038b-44f1-a8c9-c439c5d13df7",

          features: [
            {
              "Unlimited  Pitches": "Practice as much as you want",
            },
            {
              "Graded written feedback":
                "Get AI-powered analysis to improve your pitch",
            },
            {
              "Objection-handling practice":
                "Prepare for real-world sales challenges",
            },
            {
              "Improve at your own pace": "No pressure, just results",
            },
            {
              "Create your Perfect Prospect":
                "Tailor each pitch to your target customer - from industry to personality",
            },
          ],
        },
      },
      {
        "Team Package": {
          price: "599.99",
          detail: "*Requires a minimum of 5 members",
          id: "1e5f7bc9-6e2f-4f32-8e91-2a81a07a3c84",

          features: [
            {
              "Manage your team seamlessly":
                "Add & remove unlimited team members",
            },
            {
              "Graded written feedback":
                "Get AI-powered personalized insights for each salesperson",
            },
            {
              "Sales dashboard":
                "Track team output, progress, and improvement areas",
            },
            {
              "Discounted per-user pricing": "Save more as your team grows!",
            },
          ],
        },
      },
    ],
  },
];
