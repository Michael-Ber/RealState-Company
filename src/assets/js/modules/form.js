export default class Form {
    constructor(selector, inputs) {
        this.form = document.querySelector(selector);
        this.inputs = this.form.querySelectorAll(inputs);
    }

    setRequiredFields () {
        console.log(this.inputs);
        this.inputs.forEach(input => {
            input.setAttribute('required', true);
        });
    }

    sendForm() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            let formData = new FormData(this.form);
            this.postData('./assets/server.php', formData)
                .then(res => console.log(res))
                .catch(() => console.log('error'));
        });
    }

    async postData(url, data) {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text(); 
    }

    init() {
        this.setRequiredFields();
        this.sendForm();
    }

}