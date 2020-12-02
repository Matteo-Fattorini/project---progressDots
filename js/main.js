const app = new Vue({
    el: ".container",
    data: {
        example: ["img","img","img","img","img","img"],
        counter: 0,
        maxLen: 0,
    },
    computed: {
        computedWidth() {
            let perc = (this.counter * 20).toString()
            return (perc+"%")
        }
    },
    methods: {
        moveOn() {
            if (this.counter > this.maxLen-1) {
                this.counter == this.maxLen -1; 
            } else {this.counter++;}
            
            console.log(this.counter)
        },
        moveBack() {
            if (this.counter < 1) {
                this.counter == 1; 
            } else {this.counter--;}
            
            console.log(this.counter)
        },
    },
    mounted() {
        this.maxLen = this.$refs.circles.length;
    }
})