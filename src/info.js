module.exports = {
  "source": "http://www.eurogamer.net/articles/2017-07-28-pokemon-go-type-chart-effectiveness-weaknesses",
  "types": {
    "normal": {
      "name": "Normal",
      "strong": [],
      "weak": [
        "rock",
        "ghost",
        "steel"
      ],
      "resistant": [
        "ghost"
      ],
      "vulnerable": [
        "fighting"
      ]
    },
    "fighting": {
      "name": "Fighting",
      "strong": [
        "normal",
        "rock",
        "steel",
        "ice",
        "dark"
      ],
      "weak": [
        "flying",
        "poison",
        "psychic",
        "bug",
        "ghost",
        "fairy"
      ],
      "resistant": [
        "rock",
        "bug",
        "dark"
      ],
      "vulnerable": [
        "flying",
        "psychic",
        "fairy"
      ]
    },
    "flying": {
      "name": "Flying",
      "strong": [
        "fighting",
        "bug",
        "grass"
      ],
      "weak": [
        "rock",
        "steel",
        "electric"
      ],
      "resistant": [
        "fighting",
        "ground",
        "bug",
        "grass"
      ],
      "vulnerable": [
        "rock",
        "electric",
        "ice"
      ]
    },
    "poison": {
      "name": "Poison",
      "strong": [
        "grass",
        "fairy"
      ],
      "weak": [
        "poison",
        "ground",
        "rock",
        "ghost",
        "steel"
      ],
      "resistant": [
        "fighting",
        "poison",
        "grass",
        "fairy"
      ],
      "vulnerable": [
        "ground",
        "psychic"
      ]
    },
    "ground": {
      "name": "Ground",
      "strong": [
        "poison",
        "rock",
        "steel",
        "fire",
        "electric"
      ],
      "weak": [
        "flying",
        "bug",
        "grass"
      ],
      "resistant": [
        "poison",
        "rock",
        "electric"
      ],
      "vulnerable": [
        "water",
        "grass",
        "ice"
      ]
    },
    "rock": {
      "name": "Rock",
      "strong": [
        "flying",
        "bug",
        "fire",
        "ice"
      ],
      "weak": [
        "fighting",
        "ground",
        "steel"
      ],
      "resistant": [
        "normal",
        "flying",
        "poison",
        "fire"
      ],
      "vulnerable": [
        "fighting",
        "ground",
        "steel",
        "water",
        "grass"
      ]
    },
    "bug": {
      "name": "Bug",
      "strong": [
        "grass",
        "psychic",
        "dark"
      ],
      "weak": [
        "fighting",
        "flying",
        "poison",
        "ghost",
        "steel",
        "fire",
        "fairy"
      ],
      "resistant": [
        "fighting",
        "ground",
        "grass"
      ],
      "vulnerable": [
        "flying",
        "rock",
        "fire"
      ]
    },
    "ghost": {
      "name": "Ghost",
      "strong": [
        "ghost",
        "psychic"
      ],
      "weak": [
        "normal",
        "dark"
      ],
      "resistant": [
        "normal",
        "fighting",
        "poison",
        "bug"
      ],
      "vulnerable": [
        "ghost",
        "dark"
      ]
    },
    "steel": {
      "name": "Steel",
      "strong": [
        "rock",
        "ice",
        "fairy"
      ],
      "weak": [
        "steel",
        "fire",
        "water",
        "electric"
      ],
      "resistant": [
        "normal",
        "flying",
        "poison",
        "rock",
        "bug",
        "steel",
        "grass",
        "psychic",
        "ice",
        "dragon",
        "fairy"
      ],
      "vulnerable": [
        "fighting",
        "ground",
        "fire"
      ]
    },
    "fire": {
      "name": "Fire",
      "strong": [
        "bug",
        "steel",
        "grass",
        "ice"
      ],
      "weak": [
        "rock",
        "fire",
        "water",
        "dragon"
      ],
      "resistant": [
        "bug",
        "steel",
        "fire",
        "grass",
        "ice"
      ],
      "vulnerable": [
        "ground",
        "rock",
        "water"
      ]
    },
    "water": {
      "name": "Water",
      "strong": [
        "ground",
        "rock",
        "fire"
      ],
      "weak": [
        "water",
        "grass",
        "dragon"
      ],
      "resistant": [
        "steel",
        "fire",
        "water",
        "ice"
      ],
      "vulnerable": [
        "grass",
        "electric"
      ]
    },
    "grass": {
      "name": "Grass",
      "strong": [
        "ground",
        "rock",
        "water"
      ],
      "weak": [
        "flying",
        "poison",
        "bug",
        "steel",
        "fire",
        "grass",
        "dragon"
      ],
      "resistant": [
        "ground",
        "water",
        "grass",
        "electric"
      ],
      "vulnerable": [
        "flying",
        "poison",
        "bug",
        "fire",
        "ice"
      ]
    },
    "electric": {
      "name": "Electric",
      "strong": [
        "flying",
        "water"
      ],
      "weak": [
        "ground",
        "grass",
        "electric",
        "dragon"
      ],
      "resistant": [
        "flying",
        "steel",
        "electric"
      ],
      "vulnerable": [
        "ground"
      ]
    },
    "psychic": {
      "name": "Psychic",
      "strong": [
        "fighting",
        "poison"
      ],
      "weak": [
        "steel",
        "psychic",
        "dark"
      ],
      "resistant": [
        "fighting",
        "psychic"
      ],
      "vulnerable": [
        "bug",
        "ghost",
        "dark"
      ]
    },
    "ice": {
      "name": "Ice",
      "strong": [
        "flying",
        "ground",
        "grass",
        "dragon"
      ],
      "weak": [
        "steel",
        "fire",
        "water",
        "ice"
      ],
      "resistant": [
        "ice"
      ],
      "vulnerable": [
        "fighting",
        "rock",
        "steel",
        "fire"
      ]
    },
    "dragon": {
      "name": "Dragon",
      "strong": [
        "dragon"
      ],
      "weak": [
        "steel",
        "fairy"
      ],
      "resistant": [
        "fire",
        "water",
        "grass",
        "electric"
      ],
      "vulnerable": [
        "ice",
        "dragon",
        "fairy"
      ]
    },
    "fairy": {
      "name": "Fairy",
      "strong": [
        "fighting",
        "dragon",
        "dark"
      ],
      "weak": [
        "poison",
        "steel",
        "fire"
      ],
      "resistant": [
        "fighting",
        "bug",
        "dragon",
        "dark"
      ],
      "vulnerable": [
        "poison",
        "steel"
      ]
    },
    "dark": {
      "name": "Dark",
      "strong": [
        "ghost",
        "psychic"
      ],
      "weak": [
        "fighting",
        "dark",
        "fairy"
      ],
      "resistant": [
        "ghost",
        "psychic",
        "dark"
      ],
      "vulnerable": [
        "fighting",
        "bug",
        "fairy"
      ]
    }
  }
}