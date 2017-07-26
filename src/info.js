module.exports = {
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
      "strong": [],
      "weak": [],
      "resistant": [],
      "vulnerable": []
    },
    "poison": {
      "name": "Poison",
      "strong": [],
      "weak": [],
      "resistant": [],
      "vulnerable": []
    },
    "ground": {
      "name": "Ground",
      "strong": [],
      "weak": [],
      "resistant": [],
      "vulnerable": []
    },
    "rock": {
      "name": "Rock",
      "strong": [],
      "weak": [],
      "resistant": [],
      "vulnerable": []
    },
    "bug": {
      "name": "Bug",
      "strong": [],
      "weak": [],
      "resistant": [],
      "vulnerable": []
    },
    "ghost": {
      "name": "Ghost",
      "strong": [],
      "weak": [],
      "resistant": [],
      "vulnerable": []
    }
  }
}