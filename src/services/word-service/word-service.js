export default class WordService {
    dictionaries = [
        {
            id:1,
            name:"Основной английский",
            language:"en"
        },
        {
            id:2,
            name:"Основной французский",
            language:"fr"
        }
    ];

    words = [
        {
            id:1,
            dictionaryId:1,
            word:"Hi",
            translate:"Привет"
        }
    ];

    gameTranslateWord = [
        {        
            question:{
                text:"Слово"
            },
            answers:[
                {
                    questionWord:"Слово1",
                    answerWord:"Word1"
                },
                {
                    questionWord:"Слово",
                    answerWord:"Word"
                },
                {
                    questionWord:"Слово2",
                    answerWord:"Word2"
                },
                {
                    questionWord:"Слово3",
                    answerWord:"Word3"
                },
                {
                    questionWord:"Word4",
                    answerWord:"Слово4"
                }
            ]
        },
        {        
            question:{
                text:"Текст"
            },
            answers:[
                {
                    questionWord:"Текст",
                    answerWord:"Text"
                },
                {
                    questionWord:"Текст1",
                    answerWord:"Text1"
                },
                {
                    questionWord:"Текст2",
                    answerWord:"Text2"
                },
                {
                    questionWord:"Текст3",
                    answerWord:"Text3"
                },
                {
                    questionWord:"Текст4",
                    answerWord:"Text4"
                }
            ]
        }
    ];

    gameWordTranslate = [
        {        
            question:{
                text:"Word"
            },
            answers:[
                {
                    questionWord:"Word",
                    answerWord:"Слово"
                },
                {
                    questionWord:"Word1",
                    answerWord:"Слово1"
                },
                {
                    questionWord:"Word2",
                    answerWord:"Слово2"
                },
                {
                    questionWord:"Word3",
                    answerWord:"Слово3"
                },
                {
                    questionWord:"Word4",
                    answerWord:"Слово4"
                }
            ]
    },
    {        
        question:{
            text:"Text"
        },
        answers:[
            {
                questionWord:"Text",
                answerWord:"Текст"
            },
            {
                questionWord:"Text1",
                answerWord:"Текст1"
            },
            {
                questionWord:"Text2",
                answerWord:"Текст2"
            },
            {
                questionWord:"Text3",
                answerWord:"Текст3"
            },
            {
                questionWord:"Text4",
                answerWord:"Текст4"
            }
        ]
    }];

    getGameWordTranslate = () => {
        return this.gameWordTranslate;
    }

    getGameTranslateWord = () => {
        return this.gameTranslateWord;
    }

}