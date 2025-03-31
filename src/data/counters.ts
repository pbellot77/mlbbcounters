interface CounterByLane {
    heroName: string;
    counters: {
      EXP?: string[];
      Mid?: string[];
      Gold?: string[];
      Jungle?: string[];
      Roam?: string[];
    };
  }
  
  export const counterRelationships: CounterByLane[] = [
    {
      heroName: "Tigreal",
      counters: {
        EXP: ["Karrie", "Claude", "Moskov"],
        Mid: ["Valir", "Lylia", "Kadita"],
        Gold: ["Claude", "Wanwan", "Beatrix"],
        Jungle: ["Karrie", "Roger", "Akai"],
        Roam: ["Diggie", "Franco", "Khufra"]
      }
    },
    {
      heroName: "Aamon",
      counters: {
        EXP: ["Phoveus", "Esmeralda", "Yu Zhong"],
        Mid: ["Lunox", "Kadita", "Lylia"],
        Gold: ["Brody", "Popol and Kupa", "Clint"],
        Jungle: ["Akai", "Saber", "Karina"],
        Roam: ["Angela", "Rafaela", "Mathilda"]
      }
    },
    {
      heroName: "Beatrix",
      counters: {
        EXP: ["Phoveus", "Chou", "Yin"],
        Mid: ["Eudora", "Vale", "Kadita"],
        Gold: ["Brody", "Claude", "Moskov"],
        Jungle: ["Ling", "Lancelot", "Gusion"],
        Roam: ["Franco", "Khufra", "Atlas"]
      }
    },
    {
      heroName: "Lancelot",
      counters: {
        EXP: ["Ruby", "Phoveus", "Minsitthar"],
        Mid: ["Valir", "Kadita", "Vexana"],
        Gold: ["Melissa", "Popol and Kupa", "Brody"],
        Jungle: ["Akai", "Saber", "Natalia"],
        Roam: ["Khufra", "Franco", "Kaja"]
      }
    },
    {
      heroName: "Kagura",
      counters: {
        EXP: ["Esmeralda", "Phoveus", "Yu Zhong"],
        Mid: ["Lunox", "Harith", "Valentina"],
        Gold: ["Brody", "Beatrix", "Melissa"],
        Jungle: ["Gusion", "Ling", "Hayabusa"],
        Roam: ["Franco", "Atlas", "Diggie"]
      }
    },
    {
      heroName: "Estes",
      counters: {
        EXP: ["Esmeralda", "Dyrroth", "Paquito"],
        Mid: ["Lunox", "Valir", "Lylia"],
        Gold: ["Karrie", "Claude", "Beatrix"],
        Jungle: ["Baxia", "Akai", "Hayabusa"],
        Roam: ["Angela", "Mathilda", "Rafaela"]
      }
    },
    {
      heroName: "Gusion",
      counters: {
        EXP: ["Esmeralda", "Phoveus", "Ruby"],
        Mid: ["Valir", "Lylia", "Kadita"],
        Gold: ["Popol and Kupa", "Brody", "Clint"],
        Jungle: ["Akai", "Saber", "Karina"],
        Roam: ["Franco", "Aurora", "Tigreal"]
      }
    },
    {
      heroName: "Fanny",
      counters: {
        EXP: ["Minsitthar", "Chou", "Phoveus"],
        Mid: ["Valir", "Aurora", "Gord"],
        Gold: ["Popol and Kupa", "Moskov", "Claude"],
        Jungle: ["Karina", "Akai", "Saber"],
        Roam: ["Khufra", "Franco", "Diggie"]
      }
    },
    {
      heroName: "Chou",
      counters: {
        EXP: ["Phoveus", "Esmeralda", "Thamuz"],
        Mid: ["Valir", "Lunox", "Kadita"],
        Gold: ["Claude", "Karrie", "Moskov"],
        Jungle: ["Akai", "Roger", "Karina"],
        Roam: ["Franco", "Khufra", "Kaja"]
      }
    },
    {
      heroName: "Ling",
      counters: {
        EXP: ["Phoveus", "Minsitthar", "Silvanna"],
        Mid: ["Valir", "Cyclops", "Lylia"],
        Gold: ["Popol and Kupa", "Brody", "Melissa"],
        Jungle: ["Akai", "Fanny", "Saber"],
        Roam: ["Khufra", "Franco", "Tigreal"]
      }
    },
    {
        heroName: "Wanwan",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Eudora", "Vale", "Aurora"],
          Gold: ["Brody", "Beatrix", "Melissa"],
          Jungle: ["Saber", "Karina", "Akai"],
          Roam: ["Franco", "Tigreal", "Atlas"]
        }
      },
      {
        heroName: "Julian",
        counters: {
          EXP: ["Esmeralda", "Thamuz", "Yu Zhong"],
          Mid: ["Valentina", "Lylia", "Lunox"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Akai", "Fanny", "Ling"],
          Roam: ["Khufra", "Franco", "Diggie"]
        }
      },
      {
        heroName: "Valentina",
        counters: {
          EXP: ["Phoveus", "Esmeralda", "Yu Zhong"],
          Mid: ["Lylia", "Cecilion", "Kadita"],
          Gold: ["Brody", "Melissa", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Tigreal", "Atlas"]
        }
      },
      {
        heroName: "Xavier",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Esmeralda"],
          Mid: ["Kadita", "Harith", "Lunox"],
          Gold: ["Claude", "Wanwan", "Karrie"],
          Jungle: ["Ling", "Gusion", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Johnson"]
        }
      },
      {
        heroName: "Johnson",
        counters: {
          EXP: ["Karrie", "Dyrroth", "Masha"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karrie", "Roger", "Akai"],
          Roam: ["Diggie", "Franco", "Khufra"]
        }
      },
      {
        heroName: "Akai",
        counters: {
          EXP: ["Karrie", "Masha", "Dyrroth"],
          Mid: ["Valir", "Lunox", "Cecilion"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karina", "Karrie", "Roger"],
          Roam: ["Diggie", "Valir", "Khufra"]
        }
      },
      {
        heroName: "Aldous",
        counters: {
          EXP: ["Phoveus", "Thamuz", "Yu Zhong"],
          Mid: ["Lunox", "Kadita", "Lylia"],
          Gold: ["Claude", "Karrie", "Moskov"],
          Jungle: ["Karina", "Akai", "Fanny"],
          Roam: ["Lolita", "Franco", "Khufra"]
        }
      },
      {
        heroName: "Alice",
        counters: {
          EXP: ["Esmeralda", "Phoveus", "Yu Zhong"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Gusion", "Saber", "Karina"],
          Roam: ["Diggie", "Franco", "Atlas"]
        }
      },
      {
        heroName: "Alpha",
        counters: {
          EXP: ["Phoveus", "Esmeralda", "Thamuz"],
          Mid: ["Lylia", "Lunox", "Kadita"],
          Gold: ["Claude", "Brody", "Beatrix"],
          Jungle: ["Fanny", "Ling", "Hayabusa"],
          Roam: ["Franco", "Kaja", "Atlas"]
        }
      },
      {
        heroName: "Angela",
        counters: {
          EXP: ["Esmeralda", "Phoveus", "Yu Zhong"],
          Mid: ["Kadita", "Vale", "Eudora"],
          Gold: ["Melissa", "Brody", "Beatrix"],
          Jungle: ["Saber", "Karina", "Gusion"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Argus",
        counters: {
          EXP: ["Phoveus", "Esmeralda", "Thamuz"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Fanny"],
          Roam: ["Kaja", "Franco", "Atlas"]
        }
      },
      {
        heroName: "Atlas",
        counters: {
          EXP: ["Karrie", "Masha", "Dyrroth"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karrie", "Roger", "Karina"],
          Roam: ["Diggie", "Valir", "Lolita"]
        }
      },
      {
        heroName: "Aulus",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Thamuz"],
          Mid: ["Valir", "Lylia", "Kadita"],
          Gold: ["Claude", "Karrie", "Brody"],
          Jungle: ["Fanny", "Ling", "Akai"],
          Roam: ["Franco", "Khufra", "Atlas"]
        }
      },
      {
        heroName: "Aurora",
        counters: {
          EXP: ["Esmeralda", "Phoveus", "Yu Zhong"],
          Mid: ["Lunox", "Kadita", "Kagura"],
          Gold: ["Claude", "Brody", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Diggie", "Franco", "Atlas"]
        }
      },
      {
        heroName: "Badang",
        counters: {
          EXP: ["Phoveus", "Thamuz", "Yu Zhong"],
          Mid: ["Valir", "Lunox", "Lylia"],
          Gold: ["Claude", "Karrie", "Brody"],
          Jungle: ["Fanny", "Ling", "Gusion"],
          Roam: ["Franco", "Khufra", "Atlas"]
        }
      },
      {
        heroName: "Balmond",
        counters: {
          EXP: ["Esmeralda", "Thamuz", "Yu Zhong"],
          Mid: ["Valir", "Lylia", "Lunox"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Roger"],
          Roam: ["Franco", "Khufra", "Atlas"]
        }
      },
      {
        heroName: "Bane",
        counters: {
          EXP: ["Phoveus", "Esmeralda", "Thamuz"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Claude", "Brody", "Beatrix"],
          Jungle: ["Fanny", "Ling", "Gusion"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Barats",
        counters: {
          EXP: ["Karrie", "Masha", "Dyrroth"],
          Mid: ["Valir", "Lunox", "Cecilion"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karina", "Karrie", "X.Borg"],
          Roam: ["Diggie", "Valir", "Khufra"]
        }
      },
      {
        heroName: "Baxia",
        counters: {
          EXP: ["Karrie", "Dyrroth", "Masha"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karina", "Roger", "Akai"],
          Roam: ["Diggie", "Valir", "Lolita"]
        }
      },
      {
        heroName: "Benedetta",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Ruby"],
          Mid: ["Valir", "Lylia", "Lunox"],
          Gold: ["Melissa", "Brody", "Beatrix"],
          Jungle: ["Saber", "Karina", "Akai"],
          Roam: ["Franco", "Khufra", "Atlas"]
        }
      },
      {
        heroName: "Brody",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Kadita", "Vale", "Eudora"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Ling", "Saber", "Karina"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Bruno",
        counters: {
          EXP: ["Phoveus", "Chou", "Yu Zhong"],
          Mid: ["Vale", "Eudora", "Kadita"],
          Gold: ["Beatrix", "Brody", "Wanwan"],
          Jungle: ["Saber", "Karina", "Ling"],
          Roam: ["Franco", "Atlas", "Tigreal"]
        }
      },
      {
        heroName: "Carmilla",
        counters: {
          EXP: ["Esmeralda", "Phoveus", "Yu Zhong"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Gusion", "Karina", "Ling"],
          Roam: ["Diggie", "Franco", "Atlas"]
        }
      },
      {
        heroName: "Cecilion",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Esmeralda"],
          Mid: ["Kadita", "Gusion", "Kagura"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Ling", "Gusion", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Johnson"]
        }
      },
      {
        heroName: "Chang'e",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Esmeralda"],
          Mid: ["Kadita", "Harith", "Kagura"],
          Gold: ["Claude", "Wanwan", "Moskov"],
          Jungle: ["Ling", "Gusion", "Lancelot"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Clint",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Kadita", "Vale", "Eudora"],
          Gold: ["Beatrix", "Brody", "Wanwan"],
          Jungle: ["Saber", "Ling", "Karina"],
          Roam: ["Franco", "Atlas", "Tigreal"]
        }
      },
      {
        heroName: "Claude",
        counters: {
          EXP: ["Phoveus", "Chou", "Minsitthar"],
          Mid: ["Eudora", "Vale", "Kadita"],
          Gold: ["Brody", "Beatrix", "Melissa"],
          Jungle: ["Saber", "Karina", "Natalia"],
          Roam: ["Franco", "Khufra", "Atlas"]
        }
      },
      {
        heroName: "Cyclops",
        counters: {
          EXP: ["Esmeralda", "Phoveus", "Yu Zhong"],
          Mid: ["Kagura", "Kadita", "Harith"],
          Gold: ["Claude", "Brody", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Diggie",
        counters: {
          EXP: ["Esmeralda", "Yu Zhong", "Phoveus"],
          Mid: ["Kadita", "Vale", "Lylia"],
          Gold: ["Melissa", "Brody", "Beatrix"],
          Jungle: ["Karina", "Gusion", "Ling"],
          Roam: ["Mathilda", "Rafaela", "Angela"]
        }
      },
      {
        heroName: "Dyrroth",
        counters: {
          EXP: ["Thamuz", "Yu Zhong", "Phoveus"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Claude", "Karrie", "Brody"],
          Jungle: ["Akai", "Fanny", "Karina"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Edith",
        counters: {
          EXP: ["Karrie", "Masha", "Dyrroth"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karina", "Roger", "Akai"],
          Roam: ["Diggie", "Valir", "Lolita"]
        }
      },
      {
        heroName: "Esmeralda",
        counters: {
          EXP: ["Baxia", "Dyrroth", "Thamuz"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Baxia", "Akai"],
          Roam: ["Baxia", "Angela", "Mathilda"]
        }
      },
      {
        heroName: "Estes",
        counters: {
          EXP: ["Esmeralda", "Baxia", "Thamuz"],
          Mid: ["Lunox", "Valir", "Xavier"],
          Gold: ["Karrie", "Claude", "Beatrix"],
          Jungle: ["Baxia", "Akai", "Karina"],
          Roam: ["Baxia", "Angela", "Mathilda"]
        }
      },
      {
        heroName: "Eudora",
        counters: {
          EXP: ["Esmeralda", "Phoveus", "Yu Zhong"],
          Mid: ["Kagura", "Lunox", "Harith"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Diggie"]
        }
      },
      {
        heroName: "Faramis",
        counters: {
          EXP: ["Esmeralda", "Yu Zhong", "Phoveus"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Gusion", "Karina", "Ling"],
          Roam: ["Diggie", "Franco", "Atlas"]
        }
      },
      {
        heroName: "Floryn",
        counters: {
          EXP: ["Esmeralda", "Yu Zhong", "Phoveus"],
          Mid: ["Kadita", "Vale", "Lylia"],
          Gold: ["Melissa", "Brody", "Beatrix"],
          Jungle: ["Gusion", "Karina", "Ling"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Franco",
        counters: {
          EXP: ["Karrie", "Masha", "Dyrroth"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karina", "Roger", "Akai"],
          Roam: ["Diggie", "Lolita", "Mathilda"]
        }
      },
      {
        heroName: "Fredrinn",
        counters: {
          EXP: ["Karrie", "Dyrroth", "Masha"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Roger", "Akai"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Freya",
        counters: {
          EXP: ["Phoveus", "Thamuz", "Yu Zhong"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Fanny"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Gatotkaca",
        counters: {
          EXP: ["Karrie", "Masha", "Dyrroth"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karina", "Roger", "Akai"],
          Roam: ["Diggie", "Valir", "Lolita"]
        }
      },
      {
        heroName: "Gloo",
        counters: {
          EXP: ["Karrie", "Dyrroth", "Masha"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karina", "Roger", "Baxia"],
          Roam: ["Diggie", "Angela", "Mathilda"]
        }
      },
      {
        heroName: "Gord",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Esmeralda"],
          Mid: ["Kagura", "Kadita", "Harith"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Ling", "Gusion", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Granger",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Kadita", "Vale", "Eudora"],
          Gold: ["Beatrix", "Brody", "Wanwan"],
          Jungle: ["Saber", "Karina", "Natalia"],
          Roam: ["Franco", "Atlas", "Tigreal"]
        }
      },
      {
        heroName: "Grock",
        counters: {
          EXP: ["Karrie", "Masha", "Dyrroth"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karina", "Roger", "Akai"],
          Roam: ["Diggie", "Valir", "Lolita"]
        }
      },
      {
        heroName: "Guinevere",
        counters: {
          EXP: ["Phoveus", "Esmeralda", "Thamuz"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Claude", "Brody", "Beatrix"],
          Jungle: ["Fanny", "Ling", "Gusion"],
          Roam: ["Franco", "Diggie", "Khufra"]
        }
      },
      {
        heroName: "Hanabi",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Kadita", "Vale", "Eudora"],
          Gold: ["Beatrix", "Brody", "Wanwan"],
          Jungle: ["Ling", "Saber", "Karina"],
          Roam: ["Franco", "Atlas", "Tigreal"]
        }
      },
      {
        heroName: "Harith",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Esmeralda"],
          Mid: ["Valir", "Kadita", "Lunox"],
          Gold: ["Claude", "Melissa", "Beatrix"],
          Jungle: ["Saber", "Karina", "Gusion"],
          Roam: ["Franco", "Khufra", "Atlas"]
        }
      },
      {
        heroName: "Harley",
        counters: {
          EXP: ["Esmeralda", "Yu Zhong", "Phoveus"],
          Mid: ["Kagura", "Kadita", "Lunox"],
          Gold: ["Claude", "Wanwan", "Brody"],
          Jungle: ["Saber", "Gusion", "Karina"],
          Roam: ["Khufra", "Franco", "Diggie"]
        }
      },
      {
        heroName: "Hayabusa",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Ruby"],
          Mid: ["Valir", "Kadita", "Lunox"],
          Gold: ["Melissa", "Popol and Kupa", "Brody"],
          Jungle: ["Saber", "Karina", "Akai"],
          Roam: ["Franco", "Angela", "Rafaela"]
        }
      },
      {
        heroName: "Helcurt",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Ruby"],
          Mid: ["Valir", "Kadita", "Lylia"],
          Gold: ["Popol and Kupa", "Melissa", "Clint"],
          Jungle: ["Saber", "Karina", "Natalia"],
          Roam: ["Franco", "Khufra", "Atlas"]
        }
      },
      {
        heroName: "Hilda",
        counters: {
          EXP: ["Karrie", "Dyrroth", "Masha"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karina", "Roger", "Akai"],
          Roam: ["Diggie", "Angela", "Mathilda"]
        }
      },
      {
        heroName: "Hylos",
        counters: {
          EXP: ["Karrie", "Masha", "Dyrroth"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karina", "Roger", "Akai"],
          Roam: ["Diggie", "Valir", "Lolita"]
        }
      },
      {
        heroName: "Irithel",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Eudora", "Vale", "Kadita"],
          Gold: ["Beatrix", "Brody", "Wanwan"],
          Jungle: ["Saber", "Karina", "Ling"],
          Roam: ["Franco", "Atlas", "Tigreal"]
        }
      },
      {
        heroName: "Jawhead",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Thamuz"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Fanny"],
          Roam: ["Diggie", "Franco", "Atlas"]
        }
      },
      {
        heroName: "Joy",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Ruby"],
          Mid: ["Valir", "Kadita", "Lylia"],
          Gold: ["Melissa", "Popol and Kupa", "Brody"],
          Jungle: ["Saber", "Karina", "Akai"],
          Roam: ["Franco", "Khufra", "Atlas"]
        }
      },
      {
        heroName: "Kadita",
        counters: {
          EXP: ["Esmeralda", "Phoveus", "Yu Zhong"],
          Mid: ["Lunox", "Kagura", "Valentina"],
          Gold: ["Claude", "Brody", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Kagura",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Esmeralda"],
          Mid: ["Lunox", "Harith", "Valentina"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Lancelot"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Kaja",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Thamuz"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Fanny", "Ling"],
          Roam: ["Diggie", "Franco", "Atlas"]
        }
      },
      {
        heroName: "Karina",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Ruby"],
          Mid: ["Valir", "Lylia", "Kadita"],
          Gold: ["Popol and Kupa", "Melissa", "Brody"],
          Jungle: ["Akai", "Baxia", "Roger"],
          Roam: ["Franco", "Tigreal", "Atlas"]
        }
      },
      {
        heroName: "Karrie",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Eudora", "Vale", "Kadita"],
          Gold: ["Beatrix", "Brody", "Melissa"],
          Jungle: ["Saber", "Karina", "Ling"],
          Roam: ["Franco", "Atlas", "Tigreal"]
        }
      },
      {
        heroName: "Khaleed",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Thamuz"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Fanny"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Khufra",
        counters: {
          EXP: ["Karrie", "Masha", "Dyrroth"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karina", "Roger", "Akai"],
          Roam: ["Diggie", "Lolita", "Valir"]
        }
      },
      {
        heroName: "Kimmy",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Eudora", "Vale", "Kadita"],
          Gold: ["Beatrix", "Brody", "Wanwan"],
          Jungle: ["Saber", "Karina", "Ling"],
          Roam: ["Franco", "Atlas", "Tigreal"]
        }
      },
      {
        heroName: "Lapu-Lapu",
        counters: {
          EXP: ["Phoveus", "Thamuz", "Yu Zhong"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Fanny"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Leomord",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Thamuz"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Fanny"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Lesley",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Eudora", "Vale", "Kadita"],
          Gold: ["Beatrix", "Brody", "Wanwan"],
          Jungle: ["Saber", "Karina", "Ling"],
          Roam: ["Franco", "Atlas", "Tigreal"]
        }
      },
      {
        heroName: "Ling",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Ruby"],
          Mid: ["Valir", "Kadita", "Lylia"],
          Gold: ["Melissa", "Popol and Kupa", "Brody"],
          Jungle: ["Saber", "Karina", "Akai"],
          Roam: ["Franco", "Khufra", "Atlas"]
        }
      },
      {
        heroName: "Lolita",
        counters: {
          EXP: ["Karrie", "Masha", "Dyrroth"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karina", "Roger", "Akai"],
          Roam: ["Diggie", "Valir", "Angela"]
        }
      },
      {
        heroName: "Lunox",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Esmeralda"],
          Mid: ["Kagura", "Harith", "Valentina"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Luo Yi",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Esmeralda"],
          Mid: ["Kagura", "Kadita", "Harith"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Lylia",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Esmeralda"],
          Mid: ["Kagura", "Kadita", "Harith"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Martis",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Thamuz"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Fanny"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Masha",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Thamuz"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Roger"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Mathilda",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Esmeralda"],
          Mid: ["Valir", "Kadita", "Lylia"],
          Gold: ["Melissa", "Brody", "Beatrix"],
          Jungle: ["Saber", "Karina", "Gusion"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Melissa",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Eudora", "Vale", "Kadita"],
          Gold: ["Beatrix", "Brody", "Wanwan"],
          Jungle: ["Saber", "Karina", "Ling"],
          Roam: ["Franco", "Atlas", "Tigreal"]
        }
      },
      {
        heroName: "Minotaur",
        counters: {
          EXP: ["Karrie", "Masha", "Dyrroth"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karina", "Roger", "Akai"],
          Roam: ["Diggie", "Valir", "Lolita"]
        }
      },
      {
        heroName: "Minsitthar",
        counters: {
          EXP: ["Phoveus", "Thamuz", "Yu Zhong"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Roger", "Akai"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Miya",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Eudora", "Vale", "Kadita"],
          Gold: ["Beatrix", "Brody", "Wanwan"],
          Jungle: ["Saber", "Karina", "Ling"],
          Roam: ["Franco", "Atlas", "Tigreal"]
        }
      },
      {
        heroName: "Moskov",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Eudora", "Vale", "Kadita"],
          Gold: ["Beatrix", "Brody", "Wanwan"],
          Jungle: ["Saber", "Karina", "Ling"],
          Roam: ["Franco", "Atlas", "Tigreal"]
        }
      },
      {
        heroName: "Nana",
        counters: {
          EXP: ["Esmeralda", "Yu Zhong", "Phoveus"],
          Mid: ["Kagura", "Kadita", "Harith"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Natalia",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Ruby"],
          Mid: ["Valir", "Lylia", "Kadita"],
          Gold: ["Popol and Kupa", "Melissa", "Brody"],
          Jungle: ["Saber", "Karina", "Akai"],
          Roam: ["Angela", "Rafaela", "Mathilda"]
        }
      },
      {
        heroName: "Natan",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Eudora", "Vale", "Kadita"],
          Gold: ["Beatrix", "Brody", "Wanwan"],
          Jungle: ["Saber", "Karina", "Ling"],
          Roam: ["Franco", "Atlas", "Tigreal"]
        }
      },
      {
        heroName: "Novaria",
        counters: {
          EXP: ["Esmeralda", "Yu Zhong", "Phoveus"],
          Mid: ["Kagura", "Kadita", "Harith"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Nolan",
        counters: {
          EXP: ["Phoveus", "Thamuz", "Yu Zhong"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Fanny"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Odette",
        counters: {
          EXP: ["Esmeralda", "Yu Zhong", "Phoveus"],
          Mid: ["Kagura", "Kadita", "Harith"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Paquito",
        counters: {
          EXP: ["Phoveus", "Thamuz", "Yu Zhong"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Fanny"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Pharsa",
        counters: {
          EXP: ["Esmeralda", "Yu Zhong", "Phoveus"],
          Mid: ["Kagura", "Kadita", "Harith"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Phoveus",
        counters: {
          EXP: ["Esmeralda", "Thamuz", "Masha"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Akai", "Roger", "Baxia"],
          Roam: ["Diggie", "Lolita", "Mathilda"]
        }
      },
      {
        heroName: "Popol and Kupa",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Eudora", "Vale", "Kadita"],
          Gold: ["Beatrix", "Brody", "Wanwan"],
          Jungle: ["Saber", "Karina", "Ling"],
          Roam: ["Franco", "Atlas", "Tigreal"]
        }
      },
      {
        heroName: "Rafaela",
        counters: {
          EXP: ["Esmeralda", "Yu Zhong", "Phoveus"],
          Mid: ["Valir", "Kadita", "Lylia"],
          Gold: ["Melissa", "Brody", "Beatrix"],
          Jungle: ["Gusion", "Karina", "Ling"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Roger",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Thamuz"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Fanny"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Ruby",
        counters: {
          EXP: ["Esmeralda", "Thamuz", "Yu Zhong"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Roger"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Saber",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Ruby"],
          Mid: ["Valir", "Kadita", "Lylia"],
          Gold: ["Melissa", "Popol and Kupa", "Brody"],
          Jungle: ["Akai", "Karina", "Natalia"],
          Roam: ["Angela", "Rafaela", "Franco"]
        }
      },
      {
        heroName: "Selena",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Ruby"],
          Mid: ["Valir", "Kadita", "Lylia"],
          Gold: ["Melissa", "Popol and Kupa", "Brody"],
          Jungle: ["Saber", "Karina", "Akai"],
          Roam: ["Franco", "Khufra", "Atlas"]
        }
      },
      {
        heroName: "Silvanna",
        counters: {
          EXP: ["Phoveus", "Thamuz", "Yu Zhong"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Fanny"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Sun",
        counters: {
          EXP: ["Phoveus", "Thamuz", "Yu Zhong"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Roger"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Terizla",
        counters: {
          EXP: ["Karrie", "Masha", "Dyrroth"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karina", "Roger", "Akai"],
          Roam: ["Diggie", "Valir", "Lolita"]
        }
      },
      {
        heroName: "Thamuz",
        counters: {
          EXP: ["Esmeralda", "Dyrroth", "Yu Zhong"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Roger"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Uranus",
        counters: {
          EXP: ["Karrie", "Masha", "Dyrroth"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Moskov"],
          Jungle: ["Karina", "Roger", "Baxia"],
          Roam: ["Diggie", "Valir", "Lolita"]
        }
      },
      {
        heroName: "Vale",
        counters: {
          EXP: ["Esmeralda", "Yu Zhong", "Phoveus"],
          Mid: ["Kagura", "Kadita", "Harith"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Valentina",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Esmeralda"],
          Mid: ["Kagura", "Lylia", "Harith"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Valir",
        counters: {
          EXP: ["Esmeralda", "Yu Zhong", "Phoveus"],
          Mid: ["Kagura", "Harith", "Lunox"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Vexana",
        counters: {
          EXP: ["Esmeralda", "Yu Zhong", "Phoveus"],
          Mid: ["Kagura", "Kadita", "Harith"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Wanwan",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Eudora", "Vale", "Kadita"],
          Gold: ["Beatrix", "Brody", "Melissa"],
          Jungle: ["Saber", "Karina", "Ling"],
          Roam: ["Franco", "Atlas", "Tigreal"]
        }
      },
      {
        heroName: "X.Borg",
        counters: {
          EXP: ["Phoveus", "Thamuz", "Yu Zhong"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Fanny"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Xavier",
        counters: {
          EXP: ["Esmeralda", "Yu Zhong", "Phoveus"],
          Mid: ["Kagura", "Kadita", "Harith"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Yi Sun-Shin",
        counters: {
          EXP: ["Phoveus", "Chou", "Yin"],
          Mid: ["Eudora", "Vale", "Kadita"],
          Gold: ["Beatrix", "Brody", "Melissa"],
          Jungle: ["Saber", "Karina", "Ling"],
          Roam: ["Franco", "Atlas", "Tigreal"]
        }
      },
      {
        heroName: "Yin",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Thamuz"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Fanny"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Yu Zhong",
        counters: {
          EXP: ["Esmeralda", "Dyrroth", "Thamuz"],
          Mid: ["Valir", "Lunox", "Xavier"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Roger"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Yve",
        counters: {
          EXP: ["Esmeralda", "Yu Zhong", "Phoveus"],
          Mid: ["Kagura", "Kadita", "Harith"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Zhask",
        counters: {
          EXP: ["Esmeralda", "Yu Zhong", "Phoveus"],
          Mid: ["Kagura", "Kadita", "Harith"],
          Gold: ["Claude", "Wanwan", "Beatrix"],
          Jungle: ["Gusion", "Ling", "Hayabusa"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
        heroName: "Zilong",
        counters: {
          EXP: ["Phoveus", "Yu Zhong", "Thamuz"],
          Mid: ["Valir", "Lunox", "Kadita"],
          Gold: ["Karrie", "Claude", "Brody"],
          Jungle: ["Karina", "Akai", "Fanny"],
          Roam: ["Franco", "Atlas", "Khufra"]
        }
      },
      {
            heroName: "Arlott",
            counters: {
              EXP: ["Phoveus", "Yu Zhong", "Esmeralda"],
              Mid: ["Valir", "Lunox", "Kadita"],
              Gold: ["Claude", "Brody", "Melissa"],
              Jungle: ["Karina", "Ling", "Gusion"],
              Roam: ["Franco", "Atlas", "Khufra"]
            }
      },
      {
            heroName: "Chip",
            counters: {
              EXP: ["Chou", "Ruby", "Thamuz"],
              Mid: ["Vale", "Lylia", "Kadita"],
              Gold: ["Popol and Kupa", "Karrie", "Beatrix"],
              Jungle: ["Saber", "Akai", "Hayabusa"],
              Roam: ["Tigreal", "Baxia", "Lolita"]
            }
         },
         {
            heroName: "Lukas",
            counters: {
              EXP: ["Esmeralda", "Thamuz", "Chou"],
              Mid: ["Lylia", "Kadita", "Eudora"],
              Gold: ["Beatrix", "Claude", "Brody"],
              Jungle: ["Ling", "Akai", "Karina"],
              Roam: ["Tigreal", "Lolita", "Johnson"]
            }
         },
          {
            heroName: "Zhuxin",
            counters: {
              EXP: ["Thamuz", "Phoveus", "Ruby"],
              Mid: ["Vale", "Valir", "Kadita"],
              Gold: ["Melissa", "Karrie", "Claude"],
              Jungle: ["Gusion", "Ling", "Fanny"],
              Roam: ["Baxia", "Khufra", "Atlas"]
            }
          },
          {
            heroName: "Suyou",
            counters: {
              EXP: ["Yu Zhong", "Dyrroth", "Chou"],
              Mid: ["Lunox", "Kadita", "Vale"],
              Gold: ["Wanwan", "Brody", "Claude"],
              Jungle: ["Hayabusa", "Fanny", "Karina"],
              Roam: ["Diggie", "Franco", "Atlas"]
            }
          },
          {
            heroName: "Layla",
            counters: {
              EXP: ["Phoveus", "Thamuz", "Yu Zhong"],
              Mid: ["Valir", "Kadita", "Eudora"],
              Gold: ["Claude", "Beatrix", "Melissa"],
              Jungle: ["Karina", "Gusion", "Ling"],
              Roam: ["Khufra", "Tigreal", "Lolita"]
            }
          },
          {
            heroName: "Ixia",
            counters: {
                EXP: ["Phoveus", "Yu Zhong", "Esmeralda"],
                Mid: ["Lylia", "Kadita", "Vale"],
                Gold: ["Claude", "Beatrix", "Wanwan"],
                Jungle: ["Karina", "Ling", "Gusion"],
                Roam: ["Franco", "Atlas", "Khufra"]
            }
          },
          {
            heroName: "Alucard",
            counters: {
                EXP: ["Yu Zhong", "Thamuz", "Esmeralda"],
                Mid: ["Kadita", "Lylia", "Vale"],
                Gold: ["Wanwan", "Claude", "Brody"],
                Jungle: ["Ling", "Fanny", "Karina"],
                Roam: ["Atlas", "Khufra", "Franco"]
            }
          },
          {
            heroName: "CiCi",
            counters: {
                EXP: ["Phoveus", "Chou", "Yu Zhong"],
                Mid: ["Kadita", "Lunox", "Vale"],
                Gold: ["Claude", "Melissa", "Wanwan"],
                Jungle: ["Fanny", "Ling", "Karina"],
                Roam: ["Franco", "Atlas", "Khufra"]                
            }
          },
          {
            heroName: "Belerick",
            counters: {
                EXP: ["Phoveus", "Yu Zhong", "Chou"],
                Mid: ["Lylia", "Kadita", "Xavier"],
                Gold: ["Claude", "Wanwan", "Brody"],
                Jungle: ["Ling", "Karina", "Akai"],
                Roam: ["Franco", "Atlas", "Tigreal"]
            }
          },
          {
            heroName: "Hanzo",
            counters: {
              EXP: ["Chou", "Esmeralda", "Yu Zhong"],
              Mid: ["Vale", "Kadita", "Lylia"],
              Gold: ["Melissa", "Beatrix", "Wanwan"],
              Jungle: ["Karina", "Ling", "Gusion"],
              Roam: ["Khufra", "Atlas", "Diggie"]
            }
          },
          {
            heroName: "Kalea",
            counters: {
              EXP: ["Phoveus", "Esmeralda", "Yu Zhong"],
              Mid: ["Valir", "Lunox", "Kadita"],
              Gold: ["Claude", "Wanwan", "Beatrix"],
              Jungle: ["Karina", "Ling", "Gusion"],
              Roam: ["Franco", "Atlas", "Khufra"]
            }
          }       
    ];
    
    // Helper function to get counters for a specific hero from a specific lane
    export function getCounters(heroName: string, lane?: string) {
      const hero = counterRelationships.find(h => h.heroName === heroName);
      if (!hero) return null;
      if (lane) {
        return hero.counters[lane as keyof typeof hero.counters] || [];
      }
      return hero.counters;
    }
    
    // Helper function to get all possible counters for a hero
    export function getAllCounters(heroName: string): string[] {
      const hero = counterRelationships.find(h => h.heroName === heroName);
      if (!hero) return [];
      
      const allCounters = new Set<string>();
      Object.values(hero.counters).forEach(counters => {
        counters?.forEach(counter => allCounters.add(counter));
      });
      
      return Array.from(allCounters);
    }
    
    // Helper function to find which heroes a specific hero counters
    export function whoDoesThisHeroCounter(heroName: string): string[] {
      return counterRelationships
        .filter(hero => 
          Object.values(hero.counters).some(counters => 
            counters?.includes(heroName)
          )
        )
        .map(hero => hero.heroName);
    }