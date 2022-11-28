interface User {
  readonly dbId: string;
  email: string;
  userId: number;
  googleId?: string;
  startTrail(): string;
  getCoupuns(coupunName: string): number;
}

interface User {
  githubId: number;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const alvitto: Admin = {
  role: "admin",
  dbId: "1232",
  email: "alvitt@pm.me",
  userId: 12,
  githubId: 20,
  startTrail: () => {
    return "trial started";
  },
  getCoupuns: (name = "pdice10") => {
    return 20;
  },
};
alvitto.email = "asfsf@.com";
// alvitto.dbId = '13'
