new Vue({
    el: '#app4',
    data: {
        
        ActiveBtn:false,
        answers: [],
        questionIndex: 0,
    
        questions: [
            {
                question: '「趣味」は俳句を作ることです',
                answers: [
                    'しゅみ',
                    'きょうみ',
                    'きゅうみ',
                ],
                answer: 0
            },
        
                
            {
                question: '寮と職場を「往復」する毎日です',
                answers: [
                    'じゅうふく',
                    'ちょうふく',
                    'おうふく',
                ],
                answer: 2
            },
    
            {
                question: '来月の下旬に、「田舎」に帰ります',
                answers: [
                    'こきょう',
                    'ふるさと',
                    'いなか',
                ],
                answer: 2
            },
    
            {
                question: '酢は、洗剤の代わりに「除菌」にも使える',
                answers: [
                    'じょきん',
                    'よきん',
                    'ちょきん',
                ],
                answer: 0
            },
    
            {
                question: '日本ではプレゼントに「菊」は渡しません',
                answers: [
                    'すぎ',
                    'きく',
                    'まつ',
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
    
        
