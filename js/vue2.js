new Vue({
    el: '#app2',
    data: {
        
        ActiveBtn:false,
        answers: [],
        questionIndex: 0,
    
        questions: [
            {
                question: '私は「後輩」と仲がいいです',
                answers: [
                    'ごはい',
                    'こはい',
                    'こうはい',
                ],
                answer: 2
            },
        
                
            {
                question: '「詳細」は添付したファイルを見てください',
                answers: [
                    'しょうさい',
                    'ようさい',
                    'そうさい',
                ],
                answer: 0
            },
    
            {
                question: '糖分や塩分を「控えて」います',
                answers: [
                    'たくわえ',
                    'とらえて',
                    'ひかえて',
                ],
                answer: 2
            },
    
            {
                question: '「ご丁寧」にありがとうございます',
                answers: [
                    'ていちょう',
                    'ちょうてい',
                    'ていねい',
                ],
                answer: 2
            },
    
            {
                question: '今朝庭に「霜」が降りていました',
                answers: [
                    'しも',
                    'きり',
                    'つゆ',
                ],
                answer: 0
            },
        ],
    
    },
        methods: {
            addAnswer: function(index) {
                this.answers.push(index);
                if(!this.completed) {
                    this.questionIndex++;
                }
                    
                }
            },
    
        computed: {
            currentQuestion: function(){
                return this.questions[this.questionIndex];
    
            },
    
            completed: function(){
                return(this.questions.length == this.answers.length);
            }
        }
    
        
    })