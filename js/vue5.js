new Vue({
    el: '#app5',
    data: {
        ActiveBtn:false,
        answers: [],
        questionIndex: 0,
    
        questions: [
            {
                question: '「天皇」両陛下は晩餐会に出席された',
                answers: [
                    'てんおう',
                    'てんこう',
                    'てんのう',
                ],
                answer: 2
            },
        
                
            {
                question: '私はウサギを「飼って」います',
                answers: [
                    'やしなって',
                    'かって',
                    'そだって',
                ],
                answer: 1
            },
    
            {
                question: '廊下には「暖房」が無いので寒い',
                answers: [
                    'だんぼう',
                    'なんぼう',
                    'だんぽう',
                ],
                answer: 0
            },
    
            {
                question: '将来は、「翻訳」の仕事がしたいです',
                answers: [
                    'はんやく',
                    'ほんやく',
                    'へんやく',
                ],
                answer: 1
            },
    
            {
                question: 'もし気に「障ったら」ごめんね',
                answers: [
                    'そまったら',
                    'さわったら',
                    'かかったら',
                ],
                answer: 1
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