
export interface Animal {
  name: string;
  emoji: string;
  imageUrl: string;
  fact: string;
}

export const animals: Animal[] = [
  {
    name: "Tiger",
    emoji: "🐅",
    imageUrl: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&h=600&fit=crop",
    fact: "Tigers are the largest wild cats in the world and can leap horizontally up to 33 feet."
  },
  {
    name: "Elephant",
    emoji: "🐘",
    imageUrl: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop",
    fact: "Elephants can recognize themselves in mirrors and have excellent memories."
  },
  {
    name: "Penguin",
    emoji: "🐧",
    imageUrl: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=800&h=600&fit=crop",
    fact: "Penguins can drink seawater because they have a special gland that filters out salt."
  },
  {
    name: "Lion",
    emoji: "🦁",
    imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&h=600&fit=crop",
    fact: "A lion's roar can be heard from 5 miles away and they sleep 16-20 hours per day."
  },
  {
    name: "Giraffe",
    emoji: "🦒",
    imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
    fact: "Giraffes have the same number of vertebrae in their necks as humans - just 7!"
  },
  {
    name: "Whale",
    emoji: "🐋",
    imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=800&h=600&fit=crop",
    fact: "Blue whales are the largest animals ever known to have lived on Earth."
  },
  {
    name: "Panda",
    emoji: "🐼",
    imageUrl: "https://images.unsplash.com/photo-1539979702029-de5309eddb42?w=800&h=600&fit=crop",
    fact: "Giant pandas spend 14 hours a day eating bamboo and have a pseudo-thumb."
  },
  {
    name: "Koala",
    emoji: "🐨",
    imageUrl: "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=800&h=600&fit=crop",
    fact: "Koalas sleep 18-22 hours per day and have fingerprints very similar to humans."
  },
  {
    name: "Wolf",
    emoji: "🐺",
    imageUrl: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=800&h=600&fit=crop",
    fact: "Wolves have an incredible sense of smell that is 100 times stronger than humans."
  },
  {
    name: "Fox",
    emoji: "🦊",
    imageUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&h=600&fit=crop",
    fact: "Foxes use Earth's magnetic field to hunt and can hear low-frequency sounds."
  },
  {
    name: "Zebra",
    emoji: "🦓",
    imageUrl: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800&h=600&fit=crop",
    fact: "Every zebra has a unique stripe pattern, like human fingerprints."
  },
  {
    name: "Cat",
    emoji: "🐱",
    imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=800&h=600&fit=crop",
    fact: "Cats have a third eyelid and can make over 100 different vocal sounds."
  },
  {
    name: "Horse",
    emoji: "🐴",
    imageUrl: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=800&h=600&fit=crop",
    fact: "Horses can sleep both lying down and standing up, and they have excellent memories."
  },
  {
    name: "Monkey",
    emoji: "🐵",
    imageUrl: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=800&h=600&fit=crop",
    fact: "Some monkeys can use tools and have been observed teaching skills to their offspring."
  },
  {
    name: "Deer",
    emoji: "🦌",
    imageUrl: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=800&h=600&fit=crop",
    fact: "Deer can jump up to 10 feet high and run up to 30 miles per hour."
  }
];

export const getRandomAnimal = (): Animal => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
};
