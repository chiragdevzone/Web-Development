interface photo {
  camermode: string;
  filter: string;
  brust: number;
}

interface story {
  createStory(): void;
}

class instagram implements photo {
  constructor(
    public camermode: string,
    public filter: string,
    public brust: number
  ) {}
}

class youtube implements photo, story {
  constructor(
    public camermode: string,
    public filter: string,
    public brust: number
  ) {}

  createStory(): void {
    console.log("story created");
  }
}

export {};
