const topics = [
  {
    id: 1,
    title: "Presentaciones personales (Introductions)",
    description: {
      es: "Cómo presentarse y presentar a otras personas.",
      en: "How to introduce yourself and others."
    },
    examples: {
      affirmative: ["Hi, my name is John.", "This is my friend, Sarah.", "Nice to meet you, I'm David."],
      negative: ["I didn't introduce myself.", "This isn't my friend.", "He didn't introduce her."],
      question: ["What is your name?", "Who is this person?", "Can you introduce me to her?"]
    }
  },
  {
    id: 2,
    title: "Despedidas (Farewells)",
    description: {
      es: "Diferentes maneras de decir adiós.",
      en: "Different ways to say goodbye."
    },
    examples: {
      affirmative: ["Goodbye, see you tomorrow.", "Take care and have a good day.", "See you later!"],
      negative: ["I'm not saying goodbye just yet.", "We won't see each other tomorrow.", "She's not ready to leave yet."],
      question: ["Are you leaving now?", "When are we going to say goodbye?", "Can you say goodbye now?"]
    }
  },
  {
    id: 3,
    title: "Expresiones de cortesía (Polite Expressions)",
    description: {
      es: "Frases como 'please', 'thank you', 'you're welcome', 'excuse me'.",
      en: "Common phrases like 'please', 'thank you', 'you're welcome', 'excuse me'."
    },
    examples: {
      affirmative: ["Please pass me the salt.", "Thank you for your help.", "You're welcome."],
      negative: ["I didn't thank him yet.", "He didn't say please.", "They didn't excuse themselves."],
      question: ["Can you say thank you?", "Did you excuse yourself?", "Would you mind helping me, please?"]
    }
  },
  {
    id: 4,
    title: "Preguntar por direcciones (Asking for Directions)",
    description: {
      es: "Cómo pedir y dar direcciones básicas.",
      en: "How to ask for and give basic directions."
    },
    examples: {
      affirmative: ["Go straight ahead and turn left.", "The nearest bus stop is two blocks away."],
      negative: ["I'm not sure where the station is.", "You can't go that way."],
      question: ["Where is the nearest bus stop?", "Can you tell me how to get to the park?"]
    }
  },
  {
    id: 5,
    title: "Hablar del clima (Talking about the Weather)",
    description: {
      es: "Frases comunes para hablar sobre el clima.",
      en: "Common phrases to talk about the weather."
    },
    examples: {
      affirmative: ["It's sunny today.", "The weather is really nice."],
      negative: ["It's not going to rain tomorrow.", "The weather isn't very good today."],
      question: ["Is it going to rain?", "What's the weather like today?"]
    }
  },
  {
    id: 6,
    title: "Expresar gustos y preferencias (Expressing Likes and Dislikes)",
    description: {
      es: "Cómo decir lo que te gusta o no te gusta.",
      en: "How to express what you like or dislike."
    },
    examples: {
      affirmative: ["I like pizza.", "She loves going to the beach."],
      negative: ["I don't like running.", "He doesn't enjoy horror movies."],
      question: ["Do you like swimming?", "Does she enjoy traveling?"]
    }
  },
  {
    id: 7,
    title: "Realizar compras (Shopping Vocabulary)",
    description: {
      es: "Frases útiles para ir de compras.",
      en: "Useful phrases for shopping."
    },
    examples: {
      affirmative: ["How much does this cost?", "I'd like to buy this shirt."],
      negative: ["I don't have enough money.", "They don't sell that product here."],
      question: ["Do you accept credit cards?", "Can I try this on?"]
    }
  },
  {
    id: 8,
    title: "Pedir y ofrecer ayuda (Asking for and Offering Help)",
    description: {
      es: "Cómo pedir o ofrecer asistencia.",
      en: "How to ask for or offer help."
    },
    examples: {
      affirmative: ["Can you help me with this?", "I'd be happy to help you."],
      negative: ["I can't help you right now.", "They didn't offer to help us."],
      question: ["Do you need help?", "Can I help you with that?"]
    }
  },
  {
    id: 9,
    title: "Ordenar comida en un restaurante (Ordering Food in a Restaurant)",
    description: {
      es: "Frases comunes para pedir en un restaurante.",
      en: "Common phrases to order food in a restaurant."
    },
    examples: {
      affirmative: ["I'd like a burger, please.", "Can I have the check, please?"],
      negative: ["We don't want any dessert.", "I'm not ordering anything else."],
      question: ["Could I see the menu?", "Do you have any vegetarian options?"]
    }
  },
  {
    id: 10,
    title: "Expresar emociones (Expressing Feelings)",
    description: {
      es: "Cómo hablar sobre emociones y estados de ánimo.",
      en: "How to talk about emotions and feelings."
    },
    examples: {
      affirmative: ["I feel happy today.", "He's excited about the trip."],
      negative: ["I'm not feeling well.", "She's not excited about the event."],
      question: ["Are you feeling okay?", "Is she sad?"]
    }
  },
  {
    id: 11,
    title: "Hacer y responder preguntas básicas (Basic Question and Answer Forms)",
    description: {
      es: "Preguntas simples como '¿Cuál es tu nombre?', '¿De dónde eres?', '¿Cómo estás?'.",
      en: "Simple questions like 'What's your name?', 'Where are you from?', 'How are you?'."
    },
    examples: {
      affirmative: ["My name is John.", "I'm from New York."],
      negative: ["I'm not from here.", "I don't know the answer."],
      question: ["What's your name?", "Where are you from?", "How are you?"]
    }
  },
  {
    id: 12,
    title: "Pedir y dar información personal (Asking and Giving Personal Information)",
    description: {
      es: "Cómo compartir información personal básica, como la edad, dirección y número de teléfono.",
      en: "How to share basic personal information, such as age, address, and phone number."
    },
    examples: {
      affirmative: ["I am 25 years old.", "I live on 123 Main Street."],
      negative: ["I don't live in this neighborhood.", "I haven't given my phone number yet."],
      question: ["What's your address?", "How old are you?", "What's your phone number?"]
    }
  },
  {
    id: 13,
    title: "Hablar de la rutina diaria (Talking about Daily Routine)",
    description: {
      es: "Frases comunes para describir las actividades cotidianas.",
      en: "Common phrases to describe daily activities."
    },
    examples: {
      affirmative: ["I wake up at 7 AM.", "She goes to work at 9 AM."],
      negative: ["I don't wake up early on weekends.", "He doesn't go to school on Fridays."],
      question: ["What time do you wake up?", "Does she go to work every day?"]
    }
  },
  {
    id: 14,
    title: "Adjetivos Comparativos y Superlativos (Comparative and Superlative Adjectives)",
    description: {
      es: "Los adjetivos comparativos se usan para comparar dos cosas o personas, mientras que los adjetivos superlativos se usan para expresar el grado máximo de una característica en un grupo.",
      en: "Comparative adjectives are used to compare two things or people, while superlative adjectives express the highest degree of a characteristic within a group."
    },
    examples: {
      affirmative: ["John is taller than Peter.", "This book is more interesting than that one."],
      negative: ["John isn't taller than Peter.", "This book isn't more interesting than that one."],
      question: ["Is John taller than Peter?", "Is this book more interesting than that one?"]
    }
  },
  {
    id: 15,
    title: "Modales (Modals: can, could, should, must)",
    description: {
      es: "Los verbos modales se usan para expresar posibilidad, habilidad, permiso u obligación.",
      en: "Modal verbs are used to express possibility, ability, permission, or obligation."
    },
    examples: {
      affirmative: ["I can swim.", "You should study more.", "We must leave now."],
      negative: ["I can't swim.", "You shouldn't study more.", "We must not leave now."],
      question: ["Can I swim?", "Should you study more?", "Must we leave now?"]
    }
  },
  {
    id: 16,
    title: "Preposiciones de Lugar y Tiempo (Prepositions of Place and Time)",
    description: {
      es: "Las preposiciones de lugar se utilizan para indicar la posición de algo o alguien. Las preposiciones de tiempo se usan para hablar del momento en que ocurre una acción.",
      en: "Prepositions of place are used to indicate the position of something or someone. Prepositions of time are used to talk about when an action occurs."
    },
    examples: {
      affirmative: ["The book is on the table.", "She is sitting next to me."],
      negative: ["The book is not on the table.", "She is not sitting next to me."],
      question: ["Is the book on the table?", "Is she sitting next to me?"]
    }
  },
  {
    id: 17,
    title: "Pronombres Personales y Posesivos (Personal and Possessive Pronouns)",
    description: {
      es: "Los pronombres personales sustituyen a los nombres en las oraciones. Los pronombres posesivos muestran propiedad o relación.",
      en: "Personal pronouns replace nouns in sentences. Possessive pronouns show ownership or relationship."
    },
    examples: {
      affirmative: ["He is my friend.", "They are going to the park."],
      negative: ["He is not my friend.", "They are not going to the park."],
      question: ["Is he my friend?", "Are they going to the park?"]
    }
  },
  {
    id: 18,
    title: "Estilo Indirecto (Reported Speech)",
    description: {
      es: "El estilo indirecto se usa para contar lo que alguien dijo, cambiando los tiempos verbales y ajustando los pronombres si es necesario.",
      en: "Reported speech is used to tell what someone said, changing verb tenses and adjusting pronouns if necessary."
    },
    examples: {
      affirmative: ["She said she was going to the party.", "He told me that he had finished his homework."],
      negative: ["She didn't say she was going to the party.", "He didn't tell me that he had finished his homework."],
      question: ["Did she say she was going to the party?", "Did he tell you that he had finished his homework?"]
    }
  },
  {
    id: 19,
    title: "Uso de 'Some' y 'Any'",
    description: {
      es: "'Some' se usa generalmente en oraciones afirmativas y 'any' en oraciones negativas o preguntas, para referirse a cantidades indefinidas.",
      en: "'Some' is generally used in affirmative sentences and 'any' in negative sentences or questions, to refer to indefinite quantities."
    },
    examples: {
      affirmative: ["There is some milk in the fridge.", "She bought some apples."],
      negative: ["There isn't any milk in the fridge.", "She didn't buy any apples."],
      question: ["Is there any milk in the fridge?", "Did she buy any apples?"]
    }
  },
  {
    id: 20,
    title: "Conectores (Linking Words)",
    description: {
      es: "Los conectores, como 'and', 'but', 'because', se usan para unir oraciones y mostrar relaciones entre ideas.",
      en: "Linking words, such as 'and', 'but', 'because', are used to connect sentences and show relationships between ideas."
    },
    examples: {
      affirmative: ["I like apples and oranges.", "She went to the park because it was sunny."],
      negative: ["I don't like apples or oranges.", "She didn't go to the park because it wasn't sunny."],
      question: ["Do you like apples and oranges?", "Did she go to the park because it was sunny?"]
    }
  },
  {
    id: 21,
    title: "Presente Simple (Present Simple)",
    description: {
      es: "El presente simple se utiliza para hablar de hábitos, rutinas diarias, hechos generales y verdades universales.",
      en: "The present simple is used to talk about habits, daily routines, general facts, and universal truths."
    },
    examples: {
      affirmative: ["I play soccer.", "She reads books.", "We go to school every day."],
      negative: ["I don't play soccer.", "She doesn't read books.", "We don't go to school every day."],
      question: ["Do I play soccer?", "Does she read books?", "Do we go to school every day?"]
    }
  },
  {
    id: 22,
    title: "Presente Continuo (Present Continuous)",
    description: {
      es: "El presente continuo se usa para acciones que están ocurriendo en este momento o para planes futuros ya decididos.",
      en: "The present continuous is used for actions happening at this moment or for future plans already decided."
    },
    examples: {
      affirmative: ["I am playing soccer.", "She is reading a book.", "They are studying."],
      negative: ["I am not playing soccer.", "She is not reading a book.", "They are not studying."],
      question: ["Am I playing soccer?", "Is she reading a book?", "Are they studying?"]
    }
  },
  {
    id: 23,
    title: "Pasado Simple (Simple Past)",
    description: {
      es: "El pasado simple se usa para acciones que ocurrieron en un momento específico en el pasado.",
      en: "The simple past is used for actions that happened at a specific time in the past."
    },
    examples: {
      affirmative: ["I played soccer yesterday.", "She watched a movie last night.", "They visited the museum."],
      negative: ["I didn't play soccer yesterday.", "She didn't watch a movie last night.", "They didn't visit the museum."],
      question: ["Did I play soccer yesterday?", "Did she watch a movie last night?", "Did they visit the museum?"]
    }
  },
  {
    id: 24,
    title: "Pasado Continuo (Past Continuous)",
    description: {
      es: "El pasado continuo describe acciones que estaban en progreso en un momento específico en el pasado.",
      en: "The past continuous describes actions that were in progress at a specific moment in the past."
    },
    examples: {
      affirmative: ["I was playing soccer.", "She was reading a book.", "They were studying."],
      negative: ["I wasn't playing soccer.", "She wasn't reading a book.", "They weren't studying."],
      question: ["Was I playing soccer?", "Was she reading a book?", "Were they studying?"]
    }
  },
  {
    id: 25,
    title: "Futuro Simple (Future Simple)",
    description: {
      es: "El futuro simple se usa para hablar de acciones que ocurrirán en el futuro.",
      en: "The future simple is used to talk about actions that will happen in the future."
    },
    examples: {
      affirmative: ["I will play soccer tomorrow.", "She will go to the party.", "We will travel next year."],
      negative: ["I won't play soccer tomorrow.", "She won't go to the party.", "We won't travel next year."],
      question: ["Will I play soccer tomorrow?", "Will she go to the party?", "Will we travel next year?"]
    }
  },
  {
    id: 26,
    title: "Futuro con 'Going to' (Future with 'Going to')",
    description: {
      es: "El futuro con 'going to' se usa para hablar de planes o intenciones futuras.",
      en: "'Going to' future is used to talk about future plans or intentions."
    },
    examples: {
      affirmative: ["I am going to play soccer.", "She is going to buy a car.", "We are going to move to a new house."],
      negative: ["I am not going to play soccer.", "She is not going to buy a car.", "We are not going to move to a new house."],
      question: ["Am I going to play soccer?", "Is she going to buy a car?", "Are we going to move to a new house?"]
    }
  },
  {
    id: 27,
    title: "Presente Perfecto (Present Perfect)",
    description: {
      es: "El presente perfecto se utiliza para acciones que ocurrieron en un tiempo no específico o tienen relevancia en el presente.",
      en: "The present perfect is used for actions that happened at an unspecified time or have relevance to the present."
    },
    examples: {
      affirmative: ["I have played soccer.", "She has traveled to Paris.", "They have finished their homework."],
      negative: ["I haven't played soccer.", "She hasn't traveled to Paris.", "They haven't finished their homework."],
      question: ["Have I played soccer?", "Has she traveled to Paris?", "Have they finished their homework?"]
    }
  },
  {
    id: 28,
    title: "Condicional Simple (Simple Conditional)",
    description: {
      es: "El condicional simple se usa para expresar situaciones hipotéticas o imaginarias.",
      en: "The simple conditional is used to express hypothetical or imagined situations."
    },
    examples: {
      affirmative: ["I would play soccer if I had time.", "She would go if she could.", "They would help if they were here."],
      negative: ["I wouldn't play soccer if I were busy.", "She wouldn't go if she were tired.", "They wouldn't help if they weren't available."],
      question: ["Would I play soccer if I had time?", "Would she go if she could?", "Would they help if they were here?"]
    }
  }
];
