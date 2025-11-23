window.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.getElementById('container-signup');
    const gallery = document.getElementById('gallery')
    //Nav Buttons //
    const gotoFormBtn = document.getElementById('goto-form__btn');
    const gotoGallerybtn = document.getElementById('goto-gallery__btn');
    // Form Buttons //
    const nextfieldBtn = document.getElementById('next');
    const submitBtn = document.getElementById('submit');
    const backBtn = document.getElementById('back');
    //Progress Bar Indicator
    const progressBar = document.getElementById('file-progress');
    // Form Sections //
    const interests = document.getElementById('interests');
    const personalInfo = document.getElementById('personal-info');
    const preferences = document.getElementById('Preferences');
    const security = document.getElementById('security');
    const registmemo = document.getElementById('form__completed-message')
    //Form inputs//



    let fieldscounter = 0;

    class Interest {
        constructor(name) {
            this.name = name;
        }
    }
    let fields = [personalInfo, interests, security, preferences]

    // Interest list for the form //
    let InterestsList = []
    let arts = new Interest('Arts')
    let science = new Interest('Science')
    let sports = new Interest('Sports')
    let tech = new Interest('Technology')
    let music = new Interest('Music')
    let history = new Interest('History')
    let biology = new Interest('Biology')
    let math = new Interest('Math')
    let news = new Interest('News')
    InterestsList.push(arts, science, sports, tech, music, history, biology, math, news)

    //Display and hide the form//
    gotoFormBtn.addEventListener('click', show)

    function show() {

        let checkboxes

        InterestsList.forEach(interest => {
            checkboxes = `<input type="checkbox" class="interest" name="arts" id="${interest.name.toLowerCase()}">
            <style>
                #${interest.name.toLowerCase()}::after { content: '${interest.name}'; font-size: 0.8rem; }
            </style>`
            interests.insertAdjacentHTML('afterbegin', checkboxes);
        })

        formContainer.style.display = 'block';
        gallery.style.display = 'none';
        gotoFormBtn.style.display = 'none';
        gotoGallerybtn.style.display = 'inline-block';
    }

    gotoGallerybtn.addEventListener('click', () => {
        formContainer.style.display = 'none';
        gallery.style.display = 'block';
        gotoFormBtn.style.display = 'inline-block';
        gotoGallerybtn.style.display = 'none';
    })
    //Display and hide the form//

    nextfieldBtn.addEventListener('click', nextField)
    backBtn.addEventListener('click', previousField)
    submitBtn.addEventListener('click', registrationMessage)

    function validateField(fieldset) {
        const controls = fieldset.querySelectorAll('input')
        for (const control of controls) {
            if (!control.checkValidity()) {
                control.reportValidity()
                return false
            }
        }
        return true
    }

    function nextField() {
        if (validateField(fields[fieldscounter])) {
            fields[fieldscounter].style.display = 'none';
            fieldscounter++;
            fields[fieldscounter].style.display = 'block';

            if (fieldscounter === fields.length - 1) {
                nextfieldBtn.style.display = 'none';
                submitBtn.style.display = 'block';
            }
            progressBar.value = ((fieldscounter) / (fields.length - 1)) * 100;
            progressBar.innerText = progressBar.value + '%';
        }

    }
    function previousField() {
        if (fieldscounter != 0) {
            fields[fieldscounter].style.display = 'none';
            fieldscounter--;
            fields[fieldscounter].style.display = 'block';
        }
        if (fieldscounter < fields.length - 1) {
            nextfieldBtn.style.display = 'block';
            submitBtn.style.display = 'none';
        }
        progressBar.value = ((fieldscounter) / (fields.length - 1)) * 100;
        progressBar.innerText = progressBar.value + '%';
    }
    function registrationMessage() {
        fields[fieldscounter].style.display = 'none'
        registmemo.style.display = 'flex'
        backBtn.style.display = 'none'
        submitBtn.style.display = 'none'
        progressBar.style.flexGrow = '1'
    }

})