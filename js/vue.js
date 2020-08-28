new Vue({
el: '#app',
data: {

    ActiveBtn:false,
    answers: [],
    questionIndex: 0,
    questions: [
        {
            question: 'この団体は、医師や看護師を海外に「派遣」している',
            answers: [
                'はけん',
                'はたん',
                'はてん',
            ],
            answer: 0
        },
    
            
        {
            question: '春になると「堀」の周りの桜が綺麗です',
            answers: [
                'みぞ',
                'へり',
                'ほり',
            ],
            answer: 2
        },

        {
            question: 'その「戸棚」には、保存食が入っています',
            answers: [
                'とだな',
                'とだん',
                'とどり',
            ],
            answer: 0
        },

        {
            question: '新しいデザイン案を黒板に「描く」',
            answers: [
                'あがく',
                'かく',
                'えがく',
            ],
            answer: 2
        },

        {
            question: '「縁」無しの眼鏡をかけている',
            answers: [
                'ふち',
                'えん',
                'ふし',
            ],
            answer: 0
        }
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

