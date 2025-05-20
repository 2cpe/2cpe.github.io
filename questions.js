// Define questions array in a way that works in both browser and module environments
(function(global) {
    // Original questions array
    const questions = [
        {
            question: "He is a teacher.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 0.25,
            image: "images/this is a teacher.png"
        },
        {
            question: "He___to Jeddah yesterday.",
            options: ["went", "gone", "go"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "I____ all my data.",
            options: ["has lost", "have losen", "have lost"],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "In 2000, the first crew___ the International Space Station.",
            options: ["enter", "enters", "entered"],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "In 2001, the first space tourist ___ into space.",
            options: ["fly", "flown", "flew"],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "I______ an accident.",
            options: ["had have", "have had", "has have"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "I_____ my car into a bridge.",
            options: ["have driven", "has driven", "has drove"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "I____the new customer.",
            options: ["have phoned", "have phone", "has phoned"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "Leonove___the fisrt walk in space in 1965.",
            options: ["make", "made", "makes"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "My daughter _____ downstairs.",
            options: ["have fallen", "has fall", "has fallen"],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "NASA____the Hubble Telescope into space in 1990.",
            options: ["send", "sended", "sent"],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "Sami _____ the tyres.",
            options: ["have repaired", "has repair", "has repaired"],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "Sara_____ her leg.",
            options: ["have cuted", "has cutted", "has cut"],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "Something ____ to my computer.",
            options: ["have hapened", "has happened", "have happen"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "The Americans___the first shuttle into space in 1981.",
            options: ["put", "puted", "puts"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "The first men , Armstrong and Aldrin_____on the moon in 1969.",
            options: ["land", "landed", "landing"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "The Russians____ Sputink , the first satelite on the 5th of October 157.",
            options: ["launch", "launchd", "lauched"],
            correctAnswer: 3,
            score: 0.00
        },
        {
            question: "Thieves ____ into my office.",
            options: ["have broken", "has broke", "have broke"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "When did she _____there?",
            options: ["travels", "travel", "travelled"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "Yuri Gagarin___the first man in space in 1961.",
            options: ["became", "become", "becomed"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "Did you go to the cinema yesterday?",
            options: ["b. Yes, I did.", "a. Yes, I do.", "c. Yes, I have."],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "Do not ……….food or drink into the workshop.",
            options: ["a. sell", "c. bring", "b. buy"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "………………..do you need? 10 mil.",
            options: ["c. What kind", "b. What color", "a. What size"],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "………………..go through that door!",
            options: ["b. Don't", "a. Mustn't", "d. Might not"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "Have you checked the brakes?",
            options: ["a. Yes, I did.", "b. Yes, I had.", "c. Yes, I have."],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "Hello. Do you have ………….screws?",
            options: ["b. any", "c. many", "a. much"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "How …………….bags do you need? Fifty, please.",
            options: ["b. many", "a. much"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "How high is it?",
            options: ["c. It's 336.4 meters above the river.", "a. It's Millaw Bridge.", "b. It's in the south of France."],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "If the light is off , .................................",
            options: ["b. take it out", "a. drive away", "c. press the power button"],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "'Do this', 'Always do this', 'You must do this' are used in ………………..signs.",
            options: ["c. mandatory", "a. warning", "b. prohibition"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "'Watch out! You might burn your hand.' This is a …………….",
            options: ["b. a mandatory sign", "c. a warning sign", "a. a prohibition sign"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "……………….smoke in the workshop.",
            options: ["a. Always", "b. Anytime", "c. Don't"],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "The airboard moves on a …………….of air.",
            options: ["c. bed", "a. pillow", "b. cushion"],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "The engine of the airboard ……..the fan.",
            options: ["a. steers", "b. drives", "c. cools"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "The …………….of the road is 6 m.",
            options: ["b. width", "a. wide", "c. widen"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "The sea has a ………………of 330 m.",
            options: ["a. deep", "b. depth"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "What's it called?",
            options: ["c. It's 336.4 m", "b. It's in the south of France.", "a. It's Millaw Bridge."],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "When ……….it land on the moon? In October 1981.",
            options: ["c. do", "b. does", "a. did"],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "Will the tube use electricity?",
            options: ["b. No, it isn't.", "a. No, it doesn't.", "c. No, it won't."],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "You …………..wear a hard hat on the building site.",
            options: ["a. must", "b. might", "c. don't"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "This sign orders you to______.",
            options: ["use the guard on the saw", "never use the guard on the saw", "wear safety boots"],
            correctAnswer: 1,
            score: 0.25,
            image: "images/This sign orders you to______.png"
        },
        {
            question: "This signs says________",
            options: ["fire", "warning . Poison", "wash your hand"],
            correctAnswer: 2,
            score: 0.25,
            image: "images/This signs says________.png"
        },
        {
            question: "This sign warns by saying______.",
            options: ["circualr saw", "fire hazard", "the machine is hot"],
            correctAnswer: 2,
            score: 0.25,
            image: "images/This sign warns by saying______.png"
        },
        {
            question: "How much milk do you need?",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "I have one cement.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "The body supports the rider.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "The opposite of ( downwards) is upwards.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "They won't built it until 2050.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "Always read the ____ before you service this machine.",
            options: ["headlines", "maual", "story"],
            correctAnswer: 2,
            score: 0.25,
            image: "images/Always read the ____ before you service this machine.png"
        },
        {
            question: "There___ some bricks ion the floor.",
            options: ["am", "are", "is"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "The water_____ very hot.",
            options: ["am", "is", "are"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "You could ___ an electric shook.",
            options: ["gets", "getting", "get"],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "You might____ your hands.",
            options: ["burning", "burns", "burn"],
            correctAnswer: 3,
            score: 0.25
        },
        {
            question: "Do not smoke here.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "This sign warns you \" You could trap your hand in the gears.\"",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 0.25,
            image: "images/This sign warns you  You could trap your hand in the gears.png"
        },
        {
            question: "You could injure your eyes.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "You mustn't use your mobile phone here.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25,
            image: "images/You mustn't use your mobile phone here..png"
        },
        {
            question: "You must wear safety gloves in the factory.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "Do you need some screws?",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "Do___live near here?",
            options: ["Sami", "you", "Sara"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "What does it ___?",
            options: ["doing", "do", "does"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "Does the fan cools the engine?",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 0.25
        },
        {
            question: "The engine drives the fan.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "What does the engine do?",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25
        },
        {
            question: "This is a book.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 0.25,
            image: "images/thisisabook.png"
        },
        {
            question: "This is a skyscraper.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25,
            image: "images/thisisaskyscraper.png"
        },
        {
            question: "This is a tube.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 0.25,
            image: "images/This is a tube.png"
        },
        {
            question: "It is a hard hat.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25,
            image: "images/It is a hard hat.png"
        },
        {
            question: "It is a jacket.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 0.25,
            image: "images/It is a jacket.png"
        },
        {
            question: "The insulation of the cable is dented.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 0.25,
            image: "images/this insulation of the cable is dented.png"
        },
        {
            question: "The lenses of the googles are scratched.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25,
            image: "images/The lenses of the googles are scratched..jpg"
        },
        {
            question: "The pipe below the tanks is bent.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 0.25,
            image: "images/The pipe below the tanks is bent.png"
        },
        {
            question: "These are called bricks.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25,
            image: "images/These are called  bricks.png"
        },
        {
            question: "The side of the box is dented.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25,
            image: "images/box is dented.png"
        },
        {
            question: "The surface of the road is cracked.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25,
            image: "images/The surface of the road is cracked.png"
        },
        {
            question: "This is a nail.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 0.25,
            image: "images/This is a nail.png"
        },
        {
            question: "This is called scaffolding.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25,
            image: "images/This is called scaffolding.png"
        },
        {
            question: "This machine is called a digger.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25,
            image: "images/This machine is called a digger.png"
        },
        {
            question: "This part is called a bonnet.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25,
            image: "images/This part is called a bonnet.png"
        },
        {
            question: "This part of the car is called a bumper.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 0.25,
            image: "images/This part of the car is called a bumper.png"
        },
        {
            question: "Watch out! You might burn your hand.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 0.25,
            image: "images/Watch out! You might burn your hand.png"
        }
    ];
    // Make questions available globally
    global.questions = questions;

    // For localStorage fallback
    function saveQuestions() {
        try {
            localStorage.setItem('examQuestions', JSON.stringify(questions));
            console.log("Questions saved to localStorage");
        } catch (e) {
            console.error("Failed to save questions to localStorage:", e);
        }
    }

    function loadQuestions() {
        const savedQuestions = localStorage.getItem('examQuestions');
        if (savedQuestions) {
            try {
                const parsedQuestions = JSON.parse(savedQuestions);
                // Only overwrite if we have valid questions
                if (Array.isArray(parsedQuestions) && parsedQuestions.length > 0) {
                    return parsedQuestions;
                }
            } catch (e) {
                console.error("Error parsing questions from localStorage:", e);
            }
        }
        return questions; // Return original questions if localStorage failed
    }

    // Backwards compatibility with existing code
    global.getQuestion = function(index) {
        const loadedQuestions = loadQuestions();
        return loadedQuestions[index];
    };

    global.getTotalQuestions = function() {
        const loadedQuestions = loadQuestions();
        return loadedQuestions.length;
    };

    global.getMaxScore = function() {
        const loadedQuestions = loadQuestions();
        return loadedQuestions.reduce((total, q) => total + q.score, 0);
    };

    // Save questions to localStorage on load
    saveQuestions();

    // Log questions loaded for debugging
    console.log(`Loaded ${questions.length} questions`);

})(typeof window !== 'undefined' ? window : this); // This works in both browser and Node.js 