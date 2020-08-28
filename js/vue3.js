new Vue({
    el: '#app3',
    data: {

        ActiveBtn:false,
        answers: [],
        questionIndex: 0,
    
        questions: [
            {
                question: 'その「宮殿」の装飾は素晴らしかった',
                answers: [
                    'ごてん',
                    'ぐてん',
                    'きゅうでん',
                ],
                answer: 2
            },
        
                
            {
                question: 'それは「羊」の肉です',
                answers: [
                    'とり',
                    'ひつじ',
                    'くじら',
                ],
                answer: 1
            },
    
            {
                question: '大会で優勝し、「豪華」な景品を手にした',
                answers: [
                    'ごうか',
                    'こうか',
                    'ごうけ',
                ],
                answer: 0
            },
    
            {
                question: '「厳しい」経費削減を迫られている',
                answers: [
                    'はげしい',
                    'いちじるしい',
                    'きびしい',
                ],
                answer: 2
            },
    
            {
                question: 'お盆で道路が「渋滞」している',
                answers: [
                    'ていたい',
                    'ちんたい',
                    'じゅうたい',
                ],
                answer: 2
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