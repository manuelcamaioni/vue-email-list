const { createApp } = Vue;
createApp({
    data() {
        return {
            emailList: [],
            email: "",
        };
    },
    methods: {
        generateMail() {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((mail) => {
                    this.emailList.push(mail.data.response);
                    console.log(this.emailList);
                });
        },
    },
    created() {
        for (let i = 0; i < 10; i++) {
            this.generateMail();
        }
    },
}).mount("#app");
