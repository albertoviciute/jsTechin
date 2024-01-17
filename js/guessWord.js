const words = [
    'outfit', 'orchestra', 'execution', 'ordinary', 'turn',
    'withdrawal', 'distort', 'choice', 'round', 'equal',
    'competition', 'square', 'breathe', 'behavior', 'established',
    'widen', 'sheep', 'fill', 'fossil', 'exact', 'run',
    'wake', 'legend', 'create', 'snarl', 'chief', 'chocolate',
    'cycle', 'residence', 'request', 'embarrassment', 'salt',
    'offensive', 'sentiment', 'excuse', 'mushroom', 'congress',
    'foster', 'chest', 'resist', 'tire', 'thesis', 'oak',
    'expect', 'pump', 'mechanical', 'viable', 'brake', 'tent',
    'lifestyle', 'world', 'application', 'god', 'secretary',
    'locate', 'dozen', 'technique', 'railroad', 'match', 'disposition',
    'terrace', 'adviser', 'protect', 'engagement', 'reference', 'bush',
    'cap', 'tablet', 'guest', 'pledge', 'inappropriate', 'knock',
    'dictate', 'wave', 'honor', 'assignment', 'authorise', 'liver',
    'action', 'straw', 'host', 'maximum', 'physical', 'dominate',
    'predator', 'corner', 'salmon', 'swell', 'gossip', 'pollution',
    'enlarge', 'plant', 'range', 'theorist', 'ferry'
  ];

let randomIndex = Math.floor(Math.random() * words.length);
let randomWord = words[randomIndex];

console.log(randomIndex, randomWord);