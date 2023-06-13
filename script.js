const { createApp } = Vue;
createApp({
    data() {
        return {
            emailList: [],
        };
    },
    methods: {
        generateMail() {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((mail) => {
                    this.emailList.push(mail.data.response);
                });
        },
        refreshMails() {
            this.emailList = [];
            for (let i = 0; i < 10; i++) {
                this.generateMail();
            }
        },
    },
    created() {
        for (let i = 0; i < 10; i++) {
            this.generateMail();
        }
    },
}).mount("#app");
