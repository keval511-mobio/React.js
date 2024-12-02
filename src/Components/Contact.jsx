import React from 'react';

function Contact() {

    const checkEmptyName = function (e) {
        if (e.target.value === '') {
            e.target.setAttribute('placeholder', 'Name cannot be blank');
            e.target.classList.add('input-error');
        }
    }

    const checkEmptyMessage = function (e) {
        if (e.target.value === '') {
            e.target.setAttribute('placeholder', 'Message cannot be blank');
            e.target.classList.add('input-error');
        }
    }

    const checkEmptyEmail = function (e) {
        if (e.target.value === '') {
            e.target.setAttribute('placeholder', 'Email cannot be blank');
            e.target.classList.add('input-error');
        }
    }

    const setPlaceholderName = function (e) {
        e.target.setAttribute('placeholder', 'Name');
        e.target.classList.remove('input-error');
    }

    const setPlaceholderMessage = function (e) {
        e.target.setAttribute('placeholder', 'Message');
        e.target.classList.remove('input-error');
    }

    const setPlaceholderEmail = function (e) {
        e.target.setAttribute('placeholder', 'Email');
        e.target.classList.remove('input-error');
    }

    const checkValidEmail = function (e) {
        var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(e.target.value.match(emailRegex)) {
            if(!document.getElementById('incorrectEmail').classList.contains('hidden')) {
                document.getElementById('incorrectEmail').classList.add('hidden');
            };
        } else {
            if(document.getElementById('incorrectEmail').classList.contains('hidden')) {
                document.getElementById('incorrectEmail').classList.remove('hidden');
            };
        }
    }

    return (
        <div id="contact" className="w-full h-full flex justify-center">
            <div className="card w-3/4 bg-base-100 shadow-xl my-6">
                <div className="card-body w-full">

                    <h2 className="card-title text-4xl">Contact Me: (Doesn't actually send)</h2>

                    <div className="form-control w-5/6 mx-auto">
                        <label className="label">
                            <span className="label-text text-2xl">Name: </span>
                        </label>
                        <label className="input-group">
                            <span className="hidden lg:flex lg:w-1/6">Name</span>
                            <input type="text" placeholder="Name" className="input input-bordered w-full lg:w-11/12" onBlur={checkEmptyName} onFocus={setPlaceholderName} />
                        </label>
                    </div>

                    <div className="form-control w-5/6 mx-auto">
                        <label className="label">
                            <span className="label-text text-2xl">Email: </span>
                        </label>
                        <label className="input-group">
                            <span className="hidden lg:flex lg:w-1/6">Email</span>
                            <input type="text" placeholder="Email" className="input input-bordered w-full lg:w-11/12" id="email" onBlur={checkEmptyEmail} onFocus={setPlaceholderEmail} onKeyUp={checkValidEmail}/>
                        </label>
                        <p className='my-2 hidden text-error' id='incorrectEmail'>Incorrect Email Format</p> 
                    </div>

                    <div className="form-control w-5/6 mx-auto">
                        <label className="label">
                            <span className="label-text text-2xl">Message: </span>
                        </label>
                        <label className="input-group">
                            <textarea className="textarea textarea-bordered h-48 w-full" placeholder="Message"
                                id="message" onBlur={checkEmptyMessage} onFocus={setPlaceholderMessage}></textarea>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;