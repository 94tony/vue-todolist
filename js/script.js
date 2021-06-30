Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#app',
        data:{
            todoList:[
                'fare la spesa',
                'fare la spesa',
                 'fare la spesa',

             ],
            newTask:'',  
        },
        methods:{
            autofocus:function(){
            const element= document.getElementById('newTaskElement');
            element.focus();

            },
            addTask:function(){
                this.todoList.push(this.newTask);
                this.newTask='';
                this.autofocus()
            },
            deleteTask: function (index) {
                this.todoList.splice(index,1)
                this.autofocus()

            }
        }
    }
)