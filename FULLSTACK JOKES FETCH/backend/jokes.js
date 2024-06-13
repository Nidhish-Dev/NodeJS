const jokes = [
  {
    id: 1,
    title: "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: 2,
    title:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    id: 3,
    title: "Why don't skeletons fight each other? They don't have the guts.",
  },
  { id: 4, title: "What do you call fake spaghetti? An impasta!" },
  { id: 5, title: "How does a penguin build its house? Igloos it together!" },
  {
    id: 6,
    title:
      "Why don't some couples go to the gym? Because some relationships don't work out.",
  },
  { id: 7, title: "Why did the bicycle fall over? Because it was two-tired!" },
  { id: 8, title: "What do you call cheese that isn't yours? Nacho cheese!" },
  {
    id: 9,
    title: "Why can't you give Elsa a balloon? Because she will let it go.",
  },
  { id: 10, title: "How do you organize a space party? You planet!" },
  {
    id: 11,
    title: "What do you get if you cross a snowman and a vampire? Frostbite.",
  },
  {
    id: 12,
    title: "Why did the math book look sad? Because it had too many problems.",
  },
  { id: 13, title: "What do you call a bear with no teeth? A gummy bear!" },
  {
    id: 14,
    title:
      "Why was the math lecture so long? Because the professor kept going off on a tangent.",
  },
  {
    id: 15,
    title:
      "What do you get when you cross a sheep and a kangaroo? A woolly jumper!",
  },
  { id: 16, title: "Why did the coffee file a police report? It got mugged." },
  {
    id: 17,
    title: "How does a scientist freshen her breath? With experi-mints!",
  },
  { id: 18, title: "Why was the broom late? It swept in." },
  { id: 19, title: "Why don't programmers like nature? It has too many bugs." },
  {
    id: 20,
    title: "Why did the tomato turn red? Because it saw the salad dressing!",
  },
  { id: 21, title: "What do you call a fish with no eyes? A fsh." },
  {
    id: 22,
    title:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  },
  {
    id: 23,
    title: "Why was the math book depressed? It had too many problems.",
  },
  {
    id: 24,
    title: "How do you make a tissue dance? Put a little boogie in it.",
  },
  {
    id: 25,
    title: "What do you call an alligator in a vest? An investigator.",
  },
  {
    id: 26,
    title:
      "Why don't elephants use computers? Because they are afraid of the mouse.",
  },
  { id: 27, title: "What do you call a pile of cats? A meowtain." },
  {
    id: 28,
    title: "Why did the chicken go to the seance? To talk to the other side.",
  },
  {
    id: 29,
    title: "How does a vampire start a letter? Tomb it may concern...",
  },
  {
    id: 30,
    title:
      "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field.",
  },
  {
    id: 31,
    title: "Why don't cows have any money? Because the farmers milk them dry.",
  },
  {
    id: 32,
    title: "Why did the stadium get hot after the game? All the fans left.",
  },
  {
    id: 33,
    title: "What do you get when you mix a snowman with a dog? Frostbite.",
  },
  { id: 34, title: "Why do ducks have feathers? To cover their butt quacks." },
  {
    id: 35,
    title: "Why did the cookie go to the hospital? Because it felt crummy.",
  },
  {
    id: 36,
    title: "What do you call a bear standing in the rain? A drizzly bear.",
  },
  {
    id: 37,
    title: "Why do fish live in salt water? Because pepper makes them sneeze.",
  },
  {
    id: 38,
    title:
      "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
  },
  { id: 39, title: "What do you call a lazy kangaroo? A pouch potato." },
  {
    id: 40,
    title: "Why don't oysters donate to charity? Because they are shellfish.",
  },
  {
    id: 41,
    title:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
  },
  { id: 42, title: "Why do cows wear bells? Because their horns don't work." },
  { id: 43, title: "What do you call a fish that can sing? A tuna." },
  {
    id: 44,
    title:
      "Why did the frog take the bus to work today? His car got toad away.",
  },
  {
    id: 45,
    title:
      "Why did the scarecrow become a brain surgeon? He was outstanding in his field.",
  },
  {
    id: 46,
    title:
      "Why do seagulls fly over the ocean? Because if they flew over the bay, they'd be bagels.",
  },
  { id: 47, title: "What do you call a dog magician? A labracadabrador." },
  { id: 48, title: "Why did the computer go to the doctor? It had a virus." },
  {
    id: 49,
    title: "How do you find Will Smith in the snow? Look for fresh prints.",
  },
  {
    id: 50,
    title: "What do you get when you cross a snowman and a dog? Frostbite.",
  },
  {
    id: 51,
    title:
      "Why don't some couples go to the gym? Because some relationships don't work out.",
  },
  {
    id: 52,
    title: "What do you call an alligator in a vest? An investigator.",
  },
  { id: 53, title: "Why did the coffee file a police report? It got mugged." },
  {
    id: 54,
    title:
      "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field.",
  },
  {
    id: 55,
    title: "Why don't cows have any money? Because the farmers milk them dry.",
  },
  {
    id: 56,
    title: "Why did the tomato turn red? Because it saw the salad dressing!",
  },
  { id: 57, title: "What do you call a bear with no teeth? A gummy bear!" },
  { id: 58, title: "Why do ducks have feathers? To cover their butt quacks." },
  { id: 59, title: "Why don't programmers like nature? It has too many bugs." },
  { id: 60, title: "Why did the bicycle fall over? Because it was two-tired!" },
  {
    id: 61,
    title: "Why was the math book depressed? It had too many problems.",
  },
  {
    id: 62,
    title:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  },
  {
    id: 63,
    title:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  { id: 64, title: "What do you call cheese that isn't yours? Nacho cheese!" },
  { id: 65, title: "How does a penguin build its house? Igloos it together." },
  {
    id: 66,
    title: "Why don't skeletons fight each other? They don't have the guts.",
  },
  { id: 67, title: "Why do bicycles fall over? Because they are two-tired." },
  {
    id: 68,
    title:
      "Why can't a nose be 12 inches long? Because then it would be a foot.",
  },
  { id: 69, title: "What do you call fake spaghetti? An impasta!" },
  { id: 70, title: "What do you call a cow with no legs? Ground beef." },
  {
    id: 71,
    title:
      "Why do seagulls fly over the ocean? Because if they flew over the bay, they'd be bagels.",
  },
  {
    id: 72,
    title: "Why did the chicken go to the seance? To talk to the other side.",
  },
  { id: 73, title: "Why was the broom late? It swept in." },
  { id: 74, title: "How do you organize a space party? You planet!" },
  { id: 75, title: "Why do cows wear bells? Because their horns don't work." },
  {
    id: 76,
    title:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
  },
  {
    id: 77,
    title: "Why do fish live in salt water? Because pepper makes them sneeze.",
  },
  { id: 78, title: "What do you call a fish with no eyes? A fsh." },
  {
    id: 79,
    title:
      "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
  },
  {
    id: 80,
    title:
      "Why was the math lecture so long? Because the professor kept going off on a tangent.",
  },
  {
    id: 81,
    title: "How does a scientist freshen her breath? With experi-mints!",
  },
  {
    id: 82,
    title: "Why don't oysters donate to charity? Because they are shellfish.",
  },
  {
    id: 83,
    title: "What do you call a bear standing in the rain? A drizzly bear.",
  },
  {
    id: 84,
    title:
      "What do you get when you cross a sheep and a kangaroo? A woolly jumper!",
  },
  {
    id: 85,
    title: "How do you make a tissue dance? Put a little boogie in it.",
  },
  {
    id: 86,
    title: "What do you call an alligator in a vest? An investigator.",
  },
  { id: 87, title: "Why did the coffee file a police report? It got mugged." },
  {
    id: 88,
    title:
      "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field.",
  },
  {
    id: 89,
    title: "Why don't cows have any money? Because the farmers milk them dry.",
  },
  {
    id: 90,
    title: "Why did the tomato turn red? Because it saw the salad dressing!",
  },
  { id: 91, title: "What do you call a bear with no teeth? A gummy bear!" },
  { id: 92, title: "Why do ducks have feathers? To cover their butt quacks." },
  { id: 93, title: "Why don't programmers like nature? It has too many bugs." },
  { id: 94, title: "Why did the bicycle fall over? Because it was two-tired!" },
  {
    id: 95,
    title: "Why was the math book depressed? It had too many problems.",
  },
  {
    id: 96,
    title:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  },
  {
    id: 97,
    title:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  { id: 98, title: "What do you call cheese that isn't yours? Nacho cheese!" },
  { id: 99, title: "How does a penguin build its house? Igloos it together." },
  {
    id: 100,
    title: "Why don't skeletons fight each other? They don't have the guts.",
  },
  { id: 101, title: "Why do bicycles fall over? Because they are two-tired." },
  {
    id: 102,
    title:
      "Why can't a nose be 12 inches long? Because then it would be a foot.",
  },
  { id: 103, title: "What do you call fake spaghetti? An impasta!" },
  { id: 104, title: "What do you call a cow with no legs? Ground beef." },
  {
    id: 105,
    title:
      "Why do seagulls fly over the ocean? Because if they flew over the bay, they'd be bagels.",
  },
  {
    id: 106,
    title: "Why did the chicken go to the seance? To talk to the other side.",
  },
  { id: 107, title: "Why was the broom late? It swept in." },
  { id: 108, title: "How do you organize a space party? You planet!" },
  { id: 109, title: "Why do cows wear bells? Because their horns don't work." },
  {
    id: 110,
    title:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
  },
  {
    id: 111,
    title: "Why do fish live in salt water? Because pepper makes them sneeze.",
  },
  { id: 112, title: "What do you call a fish with no eyes? A fsh." },
  {
    id: 113,
    title:
      "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
  },
  {
    id: 114,
    title:
      "Why was the math lecture so long? Because the professor kept going off on a tangent.",
  },
  {
    id: 115,
    title: "How does a scientist freshen her breath? With experi-mints!",
  },
  {
    id: 116,
    title: "Why don't oysters donate to charity? Because they are shellfish.",
  },
  {
    id: 117,
    title: "What do you call a bear standing in the rain? A drizzly bear.",
  },
  {
    id: 118,
    title:
      "What do you get when you cross a sheep and a kangaroo? A woolly jumper!",
  },
  {
    id: 119,
    title: "How do you make a tissue dance? Put a little boogie in it.",
  },
  {
    id: 120,
    title: "What do you call an alligator in a vest? An investigator.",
  },
  { id: 121, title: "Why did the coffee file a police report? It got mugged." },
  {
    id: 122,
    title:
      "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field.",
  },
  {
    id: 123,
    title: "Why don't cows have any money? Because the farmers milk them dry.",
  },
  {
    id: 124,
    title: "Why did the tomato turn red? Because it saw the salad dressing!",
  },
  { id: 125, title: "What do you call a bear with no teeth? A gummy bear!" },
  { id: 126, title: "Why do ducks have feathers? To cover their butt quacks." },
  {
    id: 127,
    title: "Why don't programmers like nature? It has too many bugs.",
  },
  {
    id: 128,
    title: "Why did the bicycle fall over? Because it was two-tired!",
  },
  {
    id: 129,
    title: "Why was the math book depressed? It had too many problems.",
  },
  {
    id: 130,
    title:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  },
  {
    id: 131,
    title:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  { id: 132, title: "What do you call cheese that isn't yours? Nacho cheese!" },
  { id: 133, title: "How does a penguin build its house? Igloos it together." },
  {
    id: 134,
    title: "Why don't skeletons fight each other? They don't have the guts.",
  },
  { id: 135, title: "Why do bicycles fall over? Because they are two-tired." },
  {
    id: 136,
    title:
      "Why can't a nose be 12 inches long? Because then it would be a foot.",
  },
  { id: 137, title: "What do you call fake spaghetti? An impasta!" },
  { id: 138, title: "What do you call a cow with no legs? Ground beef." },
  {
    id: 139,
    title:
      "Why do seagulls fly over the ocean? Because if they flew over the bay, they'd be bagels.",
  },
  {
    id: 140,
    title: "Why did the chicken go to the seance? To talk to the other side.",
  },
  { id: 141, title: "Why was the broom late? It swept in." },
  { id: 142, title: "How do you organize a space party? You planet!" },
  { id: 143, title: "Why do cows wear bells? Because their horns don't work." },
  {
    id: 144,
    title:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
  },
  {
    id: 145,
    title: "Why do fish live in salt water? Because pepper makes them sneeze.",
  },
  { id: 146, title: "What do you call a fish with no eyes? A fsh." },
  {
    id: 147,
    title:
      "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
  },
  {
    id: 148,
    title:
      "Why was the math lecture so long? Because the professor kept going off on a tangent.",
  },
  {
    id: 149,
    title: "How does a scientist freshen her breath? With experi-mints!",
  },
  {
    id: 150,
    title: "Why don't oysters donate to charity? Because they are shellfish.",
  },
  {
    id: 151,
    title: "What do you call a bear standing in the rain? A drizzly bear.",
  },
  {
    id: 152,
    title:
      "What do you get when you cross a sheep and a kangaroo? A woolly jumper!",
  },
  {
    id: 153,
    title: "How do you make a tissue dance? Put a little boogie in it.",
  },
  {
    id: 154,
    title: "What do you call an alligator in a vest? An investigator.",
  },
  { id: 155, title: "Why did the coffee file a police report? It got mugged." },
  {
    id: 156,
    title:
      "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field.",
  },
  {
    id: 157,
    title: "Why don't cows have any money? Because the farmers milk them dry.",
  },
  {
    id: 158,
    title: "Why did the tomato turn red? Because it saw the salad dressing!",
  },
  { id: 159, title: "What do you call a bear with no teeth? A gummy bear!" },
  { id: 160, title: "Why do ducks have feathers? To cover their butt quacks." },
  {
    id: 161,
    title: "Why don't programmers like nature? It has too many bugs.",
  },
  {
    id: 162,
    title: "Why did the bicycle fall over? Because it was two-tired!",
  },
  {
    id: 163,
    title: "Why was the math book depressed? It had too many problems.",
  },
  {
    id: 164,
    title:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  },
  {
    id: 165,
    title:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  { id: 166, title: "What do you call cheese that isn't yours? Nacho cheese!" },
  { id: 167, title: "How does a penguin build its house? Igloos it together." },
  {
    id: 168,
    title: "Why don't skeletons fight each other? They don't have the guts.",
  },
  { id: 169, title: "Why do bicycles fall over? Because they are two-tired." },
  {
    id: 170,
    title:
      "Why can't a nose be 12 inches long? Because then it would be a foot.",
  },
  { id: 171, title: "What do you call fake spaghetti? An impasta!" },
  { id: 172, title: "What do you call a cow with no legs? Ground beef." },
  {
    id: 173,
    title:
      "Why do seagulls fly over the ocean? Because if they flew over the bay, they'd be bagels.",
  },
  {
    id: 174,
    title: "Why did the chicken go to the seance? To talk to the other side.",
  },
  { id: 175, title: "Why was the broom late? It swept in." },
  { id: 176, title: "How do you organize a space party? You planet!" },
  { id: 177, title: "Why do cows wear bells? Because their horns don't work." },
  {
    id: 178,
    title:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
  },
  {
    id: 179,
    title: "Why do fish live in salt water? Because pepper makes them sneeze.",
  },
  { id: 180, title: "What do you call a fish with no eyes? A fsh." },
  {
    id: 181,
    title:
      "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
  },
  {
    id: 182,
    title:
      "Why was the math lecture so long? Because the professor kept going off on a tangent.",
  },
  {
    id: 183,
    title: "How does a scientist freshen her breath? With experi-mints!",
  },
  {
    id: 184,
    title: "Why don't oysters donate to charity? Because they are shellfish.",
  },
  {
    id: 185,
    title: "What do you call a bear standing in the rain? A drizzly bear.",
  },
  {
    id: 186,
    title:
      "What do you get when you cross a sheep and a kangaroo? A woolly jumper!",
  },
  {
    id: 187,
    title: "How do you make a tissue dance? Put a little boogie in it.",
  },
  {
    id: 188,
    title: "What do you call an alligator in a vest? An investigator.",
  },
  { id: 189, title: "Why did the coffee file a police report? It got mugged." },
  {
    id: 190,
    title:
      "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field.",
  },
  {
    id: 191,
    title: "Why don't cows have any money? Because the farmers milk them dry.",
  },
  {
    id: 192,
    title: "Why did the tomato turn red? Because it saw the salad dressing!",
  },
  { id: 193, title: "What do you call a bear with no teeth? A gummy bear!" },
  { id: 194, title: "Why do ducks have feathers? To cover their butt quacks." },
  {
    id: 195,
    title: "Why don't programmers like nature? It has too many bugs.",
  },
  {
    id: 196,
    title: "Why did the bicycle fall over? Because it was two-tired!",
  },
  {
    id: 197,
    title: "Why was the math book depressed? It had too many problems.",
  },
  {
    id: 198,
    title:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  },
  {
    id: 199,
    title:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  { id: 200, title: "What do you call cheese that isn't yours? Nacho cheese!" },
];

module.exports = { jokes };
