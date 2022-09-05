function gohome() {
    window.location.href="https://iot-authv3.ais.co.th/auth/v3.1/oauth/authorize?response_type=code&client_id=dD2Xf4IsypVi86cal%2FVRJbCrw3kUMZe9JgjuHyZT7rHXBdd%2F4WHyaw%3D%3D&scope=profile&redirect_uri=https://www.ais.co.th/#"
    
}

var rconfirm_password = undefined
function getForm(state) {
    // console.log('state: ', state)
    var mformSign = document.getElementById("form-sign")
    var mformRegister = document.getElementById("form-register")
    var mformForgot = document.getElementById("form-forgot")

    if (state === 'sign') {
        mformSign.style.display = "block"
        mformRegister.style.display = "none"
        mformForgot.style.display = "none"
        // $('#rpasswordHint').addClass('d-none')
        rpassword.classList.remove('is-invalid')
        $('#spasswordCapsLock').addClass('d-none')
        // spasswordCapsLock.classList.remove('is-invalid')
        rusername.classList.remove('is-valid')
        rpassword.classList.remove('is-valid')
        rconfirm_password.classList.remove('is-valid')


    } else if (state === 'register') {
        mformSign.style.display = "none"
        mformRegister.style.display = "block"
        mformForgot.style.display = "none"
        document.getElementById("susername").value = "";
        document.getElementById("spassword").value = "";
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("rusername").value = "";
        document.getElementById("rpassword").value = "";
        document.getElementById("rconfirm_password").value = ""
        document.getElementById("fusername").value = "";
        $('#susernameValid').addClass('d-none')
        susername.classList.remove('is-invalid')
        $('#spasswordValid').addClass('d-none')
        spassword.classList.remove('is-invalid')
        $('#fnameMsg').addClass('d-none')
        fname.classList.remove('is-invalid')
        $('#lnameMsg').addClass('d-none')
        lname.classList.remove('is-invalid')
        $('#rusernameValid').addClass('d-none')
        rusername.classList.remove('is-invalid')
        $('#rconfirm_passwordCheck').addClass('d-none')
        rconfirm_password.classList.remove('is-invalid')
        $('#fusernameCheck').addClass('d-none')
        fusername.classList.remove('is-invalid')
        $('#rusernameCheck').addClass('d-none')
        rusername.classList.remove('is-invalid')
        $('#rpasswordHint').removeClass('d-none')
        $('#rpasswordHint').removeClass('text-danger')
        $('#spasswordCapsLock').addClass('d-none')
        $('#rpasswordCheck').addClass('d-none')
        $('#rpasswordCheck').removeClass('text-danger')
        // spasswordCapsLock.classList.remove('is-invalid')
        rusername.classList.remove('is-valid')
        rpassword.classList.remove('is-valid')
        rconfirm_password.classList.remove('is-valid')
        $('input[name=tc_check]').prop('checked', false)


    } else if (state === 'forgot') {
        Swal.close()
        mformSign.style.display = "none"
        mformRegister.style.display = "none"
        mformForgot.style.display = "block"
        document.getElementById("susername").value = "";
        document.getElementById("spassword").value = "";
        document.getElementById("fusername").value = "";
        $('#susernameValid').addClass('d-none')
        susername.classList.remove('is-invalid')
        $('#spasswordValid').addClass('d-none')
        spassword.classList.remove('is-invalid')
        $('#fnameMsg').addClass('d-none')
        fname.classList.remove('is-invalid')
        $('#lnameMsg').addClass('d-none')
        lname.classList.remove('is-invalid')
        $('#rusernameValid').addClass('d-none')
        rusername.classList.remove('is-invalid')
        $('#rpasswordCheck').removeClass('d-none')
        rpassword.classList.remove('is-invalid')
        $('#rconfirm_passwordCheck').addClass('d-none')
        rconfirm_password.classList.remove('is-invalid')
        $('#fusernameCheck').addClass('d-none')
        fusername.classList.remove('is-invalid')
        $('#rusernameCheck').addClass('d-none')
        rusername.classList.remove('is-invalid')
        $('#spasswordCapsLock').addClass('d-none')
        // spasswordCapsLock.classList.remove('is-invalid')
        rusername.classList.remove('is-valid')
        rpassword.classList.remove('is-valid')
        rconfirm_password.classList.remove('is-valid')
    }

}
function pwdRule(pwd) {
    var pwdRule = 0;
    var isPassword = /^[\da-zA-Z@#]+$/.test(pwd)
    var isDecimal = /(?=.*[\d])/.test(pwd)
    var isLowercase = /(?=.*[a-z])/.test(pwd)
    var isUppercase = /(?=.*[A-Z])/.test(pwd)
    var isSymbols = /(?=.*[@#])/.test(pwd)
    if (isPassword && pwd.length >= 8) {
        if (isDecimal) {
            pwdRule++
        } if (isLowercase) {
            pwdRule++
        } if (isUppercase) {
            pwdRule++
        } if (isSymbols) {
            pwdRule++
        }
    }
    return pwdRule >= 3 ? true : false;
}
// var mouseClick = false;
// $(".toggle-password").mousedown(function () {
//     $(this).toggleClass("fa-eye fa-eye-slash");
//     var input = $($(this).attr("toggle"));
//     input.attr("type", "text");
//     mouseClick = true;
// })
//     .mouseleave(function () {
//         var input = $($(this).attr("toggle"));
//         if (mouseClick == true) {
//             $(this).toggleClass("fa-eye fa-eye-slash");
//             input.attr("type", "password");
//             mouseClick = false
//         }
//     })
//     .mouseup(function () {
//         $(this).toggleClass("fa-eye fa-eye-slash");
//         var input = $($(this).attr("toggle"));
//         input.attr("type", "password");
//         mouseClick = false;
//     });

var mouseClick = false;
       
$(".toggle-password").on("click ", function(){
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    console.log('>>>>', input.attr("type"))
    if(mouseClick == false) input.attr("type", "text");
    if(mouseClick == true) input.attr("type", "password");
    mouseClick = !mouseClick;
});

// $(".toggle-password").on("mouseleave", function () {
//         var input = $($(this).attr("toggle"));
//         if (mouseClick == true) {
//             $(this).toggleClass("fa-eye fa-eye-slash");
//             input.attr("type", "password");
//             mouseClick = false
//         }
//     });
// $(".toggle-password").on("mouseup touchend", function () {
//         $(this).toggleClass("fa-eye fa-eye-slash");
//         var input = $($(this).attr("toggle"));
//         // console.log('>>>>', input.attr("type"))
//         input.attr("type", "password");
//         mouseClick = false;
//     });

// ****************************** //
// ****************************** //
/* Sign in Page Section */

let count = 0;
var susername = document.getElementById("susername");
var spassword = document.getElementById("spassword");
var bsing_in = document.getElementById("bsing_in");
var spasswordCapsLock = document.getElementById("spasswordCapsLock");
function sign_in(policy, isRdr) {

    if (susername.validity.valid && spassword.validity.valid) {
        new Promise(function (resolve, reject) {
            const subSession = policy.split('_')
            const url = window.location.origin + `/auth/v3.1/login?type=email_password&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`
            if (isRdr === 'false') {
                document.getElementById('login').action = url
                document.forms['login'].submit()

            }
            else {
                resolve(url)
                console.log('Email', susername.value.toLowerCase())

            }
        }).then(function (url) {

            // *************** //
            // TODO: Call API for Auth
            var recode = document.getElementById('recode');
            $.ajax({
                url: url,
                type: 'POST',
                data: {
                    username: susername.value.toLowerCase(),
                    password: spassword.value,
                    recode: recode.value ? recode.value : undefined
                },
                success: function (result) {

                    if (result instanceof Object) {
                        if (result.redirect_uri) {
                            window.location = result.redirect_uri + '?code=' + result.code + (result.state ? '&state=' + result.state : '')
                        }
                    } else {
                        if (result.includes("<!doctype html>")) {
                            document.body.innerHTML = result
                        } else {
                            const res = JSON.parse(result)
                            if (res.redirect_uri) {
                                window.location = res.redirect_uri + '?code=' + res.code + (res.state ? '&state=' + res.state : '')
                            }
                        }
                    }
                },
                error: function (error) {
                    //If Auth failed more than or equal to 3 times.
                    
                    if (count >= 2) {
                        Swal.fire({
                            imageUrl: "/auth/admd/images/ic-alert-142-px.svg",
                            html:'<br><labal class="h-content">Wrong E-mail or Password</labal><br><labal class="h-mute">Please check your Email or Password. If you can\'t remember your email or password, you can go to the</label> <a href="#" onClick="getForm(\'forgot\')" >forgot password </a><label class="h-mute">page</label>',
                            customClass: {
                                confirmButton: 'button-modal',
                              },
                            confirmButtonColor: '#0e7678',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'CLOSE',
                            allowOutsideClick: false

                        }).then((result) => {
                            count = 0;
                            spassword.value = '';
                            bsing_in.setAttribute("disabled", "")
                        })

                    } else {
                        // console.log("{666}")
                        count++;
                        // console.log('__dirname', document.location.href + "/../images/ic-alert-142-px.svg")
                        Swal.fire({
                            imageUrl: "/auth/admd/images/ic-alert-142-px.svg",
                            html: '<br><labal class="h-content">Wrong E-mail or Password</labal><br><labal class="h-mute">Please check your Email or Password.</labal>',
                            customClass: {
                                confirmButton: 'button-modal',
                              },
                            confirmButtonColor: '#0e7678',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'CLOSE',
                            allowOutsideClick: false
                        }).then((result) => {
                            spassword.value = '';
                            bsing_in.setAttribute("disabled", "")
                        })

                    }

                }
            });


        });
        // End API for Auth
        // *************** //

    } else {
        if (susername.validity.valid) {
            susername.classList.remove("is-invalid")
            $('#susernameMsg').addClass('d-none')
        } else {
            susername.classList.add("is-invalid")
            $('#susernameMsg').removeClass('d-none')
        }
        if (spassword.validity.valid) {
            spassword.classList.remove("is-invalid")
            $('#spasswordMsg').addClass('d-none')
        } else {
            spassword.classList.add("is-invalid")
            $('#spasswordMsg').removeClass('d-none')
        }

        bsing_in.setAttribute("disabled", "")

    }

}

function btnLoginDoneCheck() {

    if ((susername.validity.valid && susername.value != null && susername.value != "") && (spassword.validity.valid && spassword.value != null && spassword.value != "")) {

        bsing_in.removeAttribute("disabled")

    } else {
        bsing_in.setAttribute("disabled", "")
    }

}

if (susername) {
    susername.addEventListener("keyup", function (event) {
        if(susername.value != ""){
            $('#textusername').addClass('upText')
        }else{
            $('#textusername').removeClass('upText')  
        }
        $('#susernameCheck').addClass('d-none')
        if (!susername.validity.valid) {
            $('#susernameValid').removeClass('d-none')
            susername.classList.add("is-invalid")
        } else {
            $('#susernameValid').addClass('d-none')
            susername.classList.remove('is-invalid')
        }

        btnLoginDoneCheck()

    })
}

if (spassword) {
    spassword.addEventListener("keyup", function (event) {
        if(spassword.value != ""){
            $('#textspassword').addClass('upText')
        }else{
            $('#textspassword').removeClass('upText')  
        }
        if (event.getModifierState("CapsLock")) {
            $('#spassword').addClass('glossyBtn')
        } else {
            $('#spassword').removeClass('glossyBtn')
        }
        btnLoginDoneCheck()
    })
}

// function capLock(e){
//     var kc = e.keyCode ? e.keyCode : e.which;
//     var sk = e.shiftKey ? e.shiftKey : kc === 16;
//     var visibility = ((kc >= 65 && kc <= 90) && !sk) ||
//         ((kc >= 97 && kc <= 122) && sk) ? "visible" : "hidden";
//     document.getElementById("spasswordCapsLock").style.visibility = visibility
//    }
// ****************************** //
// ****************************** //
/* Sign up Page Section */

var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var rusername = document.getElementById("rusername");
var rpassword = document.getElementById("rpassword");
var confirm_password = document.getElementById("rconfirm_password");
var checkTC = document.getElementById("checkTC");
var btn_done = document.getElementById("btn-done");
var tc = document.querySelector("input[name=tc_check]");
var is_tc_accept = false;
var rusernameCanUse = true;

function sign_up(policy, isRdr) {

    if (fname.validity.valid
        && lname.validity.valid
        && rusername.validity.valid
        && rpassword.validity.valid
        && rconfirm_password.validity.valid) {
        new Promise(function (resolve, reject) {

            const subSession = policy.split('_')
            const url = window.location.origin + `/auth/v3.1/register?type=email_password&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`
            btn_done.setAttribute("disabled", "")
            if (isRdr === 'false') {
                document.getElementById('register').action = url
                document.forms['register'].submit()
            }
            else {
                resolve(url)
                console.log("firstname", fname.value)
                console.log("lastname", lname.value)
                console.log("username", rusername.value.toLowerCase())
                console.log("password", rpassword.value)
            }

        }).then(function (url) {
            // *************** //
            // TODO: Call API for Sign up
            var recode = document.getElementById('recode');
            $.ajax({
                url: url,
                type: 'POST',
                data: {
                    firstname: fname.value,
                    lastname: lname.value,
                    username: rusername.value.toLowerCase(),
                    password: rpassword.value,
                    tc: is_tc_accept ? 'accept' : undefined,
                    recode: recode.value ? recode.value : undefined
                },
                success: function (result) {
                    document.body.innerHTML = result
                },
                error: function (error) {
                    if (error.responseText) {
                        document.body.innerHTML = error.responseText
                    }
                    Swal.fire({
                        type: 'error',
                        html: '<br><labal class="h-content">Something Wrong</labal><br><labal class="h-mute">Please try again.</labal>',
                        customClass: {
                            confirmButton: 'button-modal',
                        },  
                        confirmButtonColor: '#0e7678',
                        confirmButtonText: 'CLOSE',
                        allowOutsideClick: false
                    }).then((result) => {
                        if (result.value) {
                            btn_done.removeAttribute("disabled", "")
                        }
                    })

                }
            });
        });
        // End API for Sign up
        // *************** //

    } else {

        if (!fname.validity.valid) {
            fname.classList.add("is-invalid")
        }

        if (!lname.validity.valid) {
            lname.classList.add("is-invalid")
        }

        if (!rusername.validity.valid) {
            rusername.classList.add("is-invalid")
        }

        if (!rpassword.validity.valid) {
            rpassword.classList.add("is-invalid")
        }

        if (!confirm_password.validity.valid) {
            confirm_password.classList.add("is-invalid")
        }

        btn_done.setAttribute("disabled", "")

    }

}
// End API for Sign up
// *************** //

function checkPublicID(sessionString, clientID) {
    rusernameCanUse = true;
                        $('#rusername').addClass("is-valid")
                        $('#rusername').removeClass('is-invalid')
                        $('#remail').val($('#rusername').val())
                        $('#rusernameCheck').addClass('d-none')
                        btnSignupDoneCheck()
                        return
    // *************** //
    // TODO: Call API for Check public ID
    new Promise(function (resolve, reject) {
        let email = $('#rusername').val().toLowerCase()
        const subSession = sessionString.split('_')
        const url = window.location.origin + '/auth/v3.1/publicId/' + email + `?client_id=${encodeURIComponent(clientID)}&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`
        resolve(url)
    }).then(function (url) {
        // console.log("url", url)
        if (document.getElementById("rusername").validity.valid) {
            $.ajax({
                // url:url,
                url : url,
                type: 'GET',
                success: function (result) {
                    if (Object.keys(result) == 0) {
                        rusernameCanUse = true;
                        $('#rusername').addClass("is-valid")
                        $('#rusername').removeClass('is-invalid')
                        $('#remail').val($('#rusername').val())
                        $('#rusernameCheck').addClass('d-none')
                        btnSignupDoneCheck()
                    }
                    else {
                        rusernameCanUse = false;
                        $('#rusername').removeClass('is-valid')
                        $('#rusername').addClass("is-invalid")
                        $('#rusernameCheck').addClass('d-none')
                        $('#rusernameCheckError').removeClass('d-none')
                        btnSignupDoneCheck()
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // console.error('error: ', error)
                    var err = eval("(" + jqXHR.responseText + ")");
       
                    if (err.error == "data_exists") {
                        rusernameCanUse = false;
                        $('#rusername').removeClass('is-valid')
                        $('#rusername').addClass("is-invalid")
                        $('#remail').val('')
                        $('#rusernameCheck').removeClass('d-none')
                        btnSignupDoneCheck()
                    }
                    else {
                        rusernameCanUse = false;
                        $('#rusername').removeClass('is-valid')
                        $('#rusername').addClass("is-invalid")
                        $('#rusernameCheck').addClass('d-none')
                        $('#rusernameCheckError').removeClass('d-none')
                        btnSignupDoneCheck()
                    }
                }
            });
        }
    });
}
// End API for Check public ID
// *************** //
if (tc) {
    tc.addEventListener("change", function (event) {
        if(event.target.checked){
            is_tc_accept = true
        }else{
            is_tc_accept = false
        }
        btnSignupDoneCheck()
    })
}

function btnSignupDoneCheck() {
    if (tc) {
        if ((fname.validity.valid && fname.value != null && fname.value != "")
            && (lname.validity.valid && lname.value != null && lname.value != "")
            && (rusername.validity.valid && rusername.value != null && rusername.value != "")
            && (rpassword.validity.valid && rpassword.value != null && rpassword.value != "")
            && (rconfirm_password.validity.valid && rconfirm_password.value != null && rconfirm_password.value != "")
            && (rpassword.value == rconfirm_password.value)
            && pwdRule(rpassword.value)
            && rusernameCanUse
            && is_tc_accept) {

            btn_done.removeAttribute("disabled")

        } else {
            btn_done.setAttribute("disabled", "")
        }
    } else {
        if ((fname.validity.valid && fname.value != null && fname.value != "")
            && (lname.validity.valid && lname.value != null && lname.value != "")
            && (rusername.validity.valid && rusername.value != null && rusername.value != "")
            && (rpassword.validity.valid && rpassword.value != null && rpassword.value != "")
            && (rconfirm_password.validity.valid && rconfirm_password.value != null && rconfirm_password.value != "")
            && (rpassword.value == rconfirm_password.value)
            && pwdRule(rpassword.value)
            && rusernameCanUse) {

            btn_done.removeAttribute("disabled")

        } else {
            btn_done.setAttribute("disabled", "")
        }
    }

}

if (fname) {
    fname.addEventListener("keyup", function (event) {
        if(fname.value != ""){
            $('#textfname').addClass('upText')
        }else{
            $('#textfname').removeClass('upText')  
        }
        if (!fname.validity.valid) {
            $('#fnameMsg').removeClass('d-none')
            fname.classList.add("is-invalid")
        } else {
            $('#fnameMsg').addClass('d-none')
            fname.classList.remove('is-invalid')
        }

        btnSignupDoneCheck()

    })
}

if (lname) {
    lname.addEventListener("keyup", function (event) {
        if(lname.value != ""){
            $('#textlname').addClass('upText')
        }else{
            $('#textlname').removeClass('upText')  
        }
        if (!lname.validity.valid) {
            $('#lnameMsg').removeClass('d-none')
            lname.classList.add("is-invalid")
        } else {
            $('#lnameMsg').addClass('d-none')
            lname.classList.remove('is-invalid')
        }

        btnSignupDoneCheck()

    })
}

if (rusername) {
    rusername.addEventListener("keyup", function (event) {
        if(rusername.value != ""){
            $('#textrusername').addClass('upText')
        }else{
            $('#textrusername').removeClass('upText')  
        }
        if (!rusername.validity.valid || rusername.value == null || rusername.value == "") {
            $('#rusernameCheck').addClass('d-none')
            $('#rusernameValid').removeClass('d-none')
            rusername.classList.add("is-invalid")
        } else {
            $('#rusernameValid').addClass('d-none')
            rusername.classList.remove('is-invalid')
            // rusername.classList.add("is-valid") //Mock if have API delete it.
        }

        btnSignupDoneCheck()

    })
}
var isCaps = false
if (rpassword) {
    rpassword.addEventListener("keyup", function (event) {
        if(rpassword.value != ""){
            $('#textrpassword').addClass('upText')
        }else{
            $('#textrpassword').removeClass('upText')  
        }
        if(event.getModifierState("CapsLock")) {
            if (isCaps == false){
                $('#rpassword').addClass('glossyBtn')
                isCaps = true;
            }
        } else {
            $('#rpassword').removeClass('glossyBtn')
            isCaps = false;
        }
        if (!rpassword.validity.valid || !pwdRule(rpassword.value)) {
            $('#rpasswordCheck').removeClass('d-none')
            rpassword.classList.add("is-invalid")
            $('#rpasswordCheck').addClass('text-danger')
        } else {
            $('#rpasswordCheck').addClass('d-none')
            rpassword.classList.remove('is-invalid')
            rpassword.classList.add("is-valid")
        }

        if (rconfirm_password.value != null && rconfirm_password.value != "" && rpassword.value != rconfirm_password.value) {
            $('#rconfirm_passwordCheck').removeClass('d-none')
            rconfirm_password.classList.add("is-invalid")
        } else {
            $('#rconfirm_passwordCheck').addClass('d-none')
            rconfirm_password.classList.remove('is-invalid')
        }

        btnSignupDoneCheck()

    })
}

if (rconfirm_password) {
    rconfirm_password.addEventListener("keyup", function (event) {
        if(rconfirm_password.value != ""){
            $('#textrconfirm_password').addClass('upText')
        }else{
            $('#textrconfirm_password').removeClass('upText')  
        }
        if(event.getModifierState("CapsLock")) {
            if (isCaps == false){
                $('#rconfirm_password').addClass('glossyBtn')
                isCaps = true;
            }
        } else {
            $('#rconfirm_password').removeClass('glossyBtn')
            isCaps = false;
        }
        if (!rconfirm_password.validity.valid || rpassword.value != rconfirm_password.value) {
            $('#rconfirm_passwordCheck').removeClass('d-none')
            rconfirm_password.classList.add("is-invalid")
            btnSignupDoneCheck()
        } else {
            $('#rconfirm_passwordCheck').addClass('d-none')
            rconfirm_password.classList.remove('is-invalid')
            rconfirm_password.classList.add("is-valid")
            btnSignupDoneCheck()
        }

    })
}

if(checkTC) {
    console.log('checkbox', checkTC.value)
}

// ****************************** //
// ****************************** //
/* Forgot password Page Section */

var fusername = document.getElementById("fusername");
var btn_forgot = document.getElementById("btn-forgot");

function forgot(policy, isRdr) {
    btn_forgot.setAttribute("disabled", "")
    // *************** //
    // TODO: Call API for Forgot password
    new Promise(function (resolve, reject) {
        const subSession = policy.split('_')
        const url = window.location.origin + `/auth/v3.1/forgot?type=email_password&action=showui_forgot&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`
        // console.log("policy url", url)
        if (isRdr === 'false') {
            document.getElementById('forgot').action = url
            document.forms['forgot'].submit()   
        } else {
            resolve(url)
            console.log("username", document.getElementById('fusername').value.toLowerCase())
        }
    }).then(function (url) {
        var recode = document.getElementById('recode');
        $.ajax({
            url: url,
            type: 'POST',
            data: {
                username: document.getElementById('fusername').value.toLowerCase(),
                recode: recode.value ? recode.value : undefined
            },
            success: function (result) {
                console.log("httpcode",result)
                document.body.innerHTML = result
            },
            error: function (error) {
                console.log("httpcode",error.status)
                // if(error.status == 0){
                //     $("#checkHttpCode").text("asdf")
                // }
                if (error.responseJSON && error.responseJSON.error === 'invalid_user_or_password') {
                    Swal.fire({
                        type: 'error',
                        html: '<br><labal class="h-content">Email is wrong</labal><br><labal class="h-mute">Please check your Email.</labal>',
                        customClass: {
                            confirmButton: 'button-modal',
                        },  
                        confirmButtonColor: '#0e7678',
                        confirmButtonText: 'CLOSE',
                        allowOutsideClick: false
                    }).then((result) => {
                        if (result.value) {
                            // document.getElementById('bsing_in').disabled = false;
                            btn_forgot.removeAttribute("disabled", "")
                        }
                    })

                } else {
                    if (error.responseText) {
                        document.body.innerHTML = error.responseText
                    }
                    Swal.fire({
                        type: 'error',
                        html: '<br><labal class="h-content">Something Wrong</labal><br><labal class="h-mute">Please try again.</labal>',
                        customClass: {
                            confirmButton: 'button-modal',
                        }, 
                        confirmButtonColor: '#0e7678',
                        confirmButtonText: 'Close',
                        allowOutsideClick: false
                    }).then((result) => {
                        if (result.value) {
                            // document.getElementById('bsing_in').disabled = false;
                            btn_forgot.removeAttribute("disabled", "")
                        }
                    })

                }
            }
        });

    });
    // End API for Forgot password
    // *************** //
}

function btnForgotPasswordDoneCheck() {

    if ((fusername.validity.valid && fusername.value != null && fusername.value != "")) {
        btn_forgot.removeAttribute("disabled")
    } else {
        btn_forgot.setAttribute("disabled", "")
    }
}

if (fusername) {
    fusername.addEventListener("keyup", function (event) {
        if(fusername.value != ""){
            $('#textfusername').addClass('upText')
        }else{
            $('#textfusername').removeClass('upText')  
        }
        if (!fusername.validity.valid) {
            $('#fusernameCheck').removeClass('d-none')
            fusername.classList.add("is-invalid")
        } else {
            $('#fusernameCheck').addClass('d-none')
            fusername.classList.remove('is-invalid')
        }

        btnForgotPasswordDoneCheck()

    })

}

// ****************************** //
// ****************************** //
/* Set new password Page Section */

var new_password = document.getElementById("new_password");
var confirm_password = document.getElementById("confirm_password");
var code = document.getElementById("code");
function btnSetNewPasswordDoneCheck() {

    if ((new_password.validity.valid && new_password.value != null && new_password.value != "")
        && (confirm_password.validity.valid && confirm_password.value != null && confirm_password.value != "")) {

        code.removeAttribute("disabled")

    } else {
        code.setAttribute("disabled", "")
    }

}

if (new_password) {

    new_password.addEventListener("keyup", function (event) {

        if (!new_password.validity.valid || !pwdRule(new_password.value)) {
            $('#new_passwordCheck').removeClass('d-none')
            new_password.classList.add("is-invalid")
        } else {
            $('#new_passwordCheck').addClass('d-none')
            new_password.classList.remove('is-invalid')
        }

        if (confirm_password.value != null && confirm_password.value != "" && new_password.value != confirm_password.value) {
            $('#confirm_passwordCheck').removeClass('d-none')
            confirm_password.classList.add("is-invalid")
        } else {
            $('#confirm_passwordCheck').addClass('d-none')
            confirm_password.classList.remove('is-invalid')
        }

        btnSetNewPasswordDoneCheck()

    })
}

if (confirm_password) {
    confirm_password.addEventListener("keyup", function (event) {

        if (!confirm_password.validity.valid || new_password.value != confirm_password.value) {
            $('#confirm_passwordCheck').removeClass('d-none')
            confirm_password.classList.add("is-invalid")
        } else {
            $('#confirm_passwordCheck').addClass('d-none')
            confirm_password.classList.remove('is-invalid')
            btnSetNewPasswordDoneCheck()
        }

    })
}
function clicksusername (){
    $('#susername').focus()
        
}
function clickspassword (){
    $('#spassword').focus()    
}
function clickfusername (){
    $('#fusername').focus()    
}
function clickfname (){
    $('#fname').focus()    
}
function clicklname (){
    $('#lname').focus()    
}
function clickrusername (){
    $('#rusername').focus()    
}
function clickspan (){
    $('#rpassword').focus()    
}
function clickspan1 (){
    $('#rconfirm_password').focus()  
}

function accept_TC(policy, type) {
    $('#error_content').addClass('d-none')
    new Promise(function (resolve, reject) {
        const subSession = policy.split('_')
        let url
        switch(type){
            case 'email_password':
                url = window.location.origin + `/auth/v3.1/login?type=email_password&action=tc&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`
            break
            case 'google':
                url = window.location.origin + `/auth/v3.1/login/`+type+`?action=tc&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`
            break
            case 'facebook':
                url = window.location.origin + `/auth/v3.1/login/`+type+`?action=tc&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`
            break
            case 'line':
                url = window.location.origin + `/auth/v3.1/login/`+type+`?action=tc&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`
            break
            default: break
        }
        resolve(url)
    }).then(function (url) {
        // TODO: Call API for Auth
        $.ajax({
            url: url,
            type: type === 'email_password' ? 'POST' : 'GET',
            data: {
                tc: 'accept' //auto parse to query when method = GET
            },
            success: function (result) {
                if (result instanceof Object) {
                    if (result.redirect_uri) {
                        window.location = result.redirect_uri + '?code=' + result.code + (result.state ? '&state=' + result.state : '')
                    }
                } else {
                    if (result.includes("<!doctype html>")) {
                        document.body.innerHTML = result
                    } else {
                        const res = JSON.parse(result)
                        if (res.redirect_uri) {
                            window.location = res.redirect_uri + '?code=' + res.code + (res.state ? '&state=' + res.state : '')
                        }
                    }
                }},
            error: function (error) {
                error.status = error.status ? JSON.stringify(error.status) : "500"
                if (error.responseJSON) {
                    error.responseJSON.error = error.responseJSON.error ? error.responseJSON.error : "server_error"
                } else {
                    error.responseJSON = {
                        error: "server_error"
                    }
                }
                $.getJSON('/auth/admd/script/js/error.const.json', function (data) {

                    console.log('responseJSON: ', error);
                    let _err_desc = data.find(obj => { return obj.code == error.status })
                    $('#error_content')[0].innerText = (_err_desc && _err_desc.message) ? _err_desc.message : error.responseJSON.error
                    $('#error_content').removeClass('d-none')
                });
            }
        })
    })
}

function decline_TC(redirect_uri, state) {
    window.location = redirect_uri + (state? ('?state=' + state + '&error=user_denied') : '?error=user_denied' )
}

function sendEmailMigrate(policy, isRdr) {
    document.getElementById('btn-send-mail-migrate').setAttribute("disabled", "")
    document.getElementById('btn_cancel').setAttribute("disabled", "")
    new Promise(function (resolve, reject) {
        const subSession = policy.split('_')
        const url = window.location.origin + `/auth/v3.1/forgot?type=email_password&action=showui_migrated&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`
        if (isRdr === 'false') {
            document.getElementById('username').removeAttribute('disabled')
            document.getElementById('migrate').action = url
            document.forms['migrate'].submit()
        } else {
            resolve(url)
            console.log("username", document.getElementById('username').value.toLowerCase())
        }
    }).then(function (url) {
        $.ajax({
            url: url,
            type: 'POST',
            data: {
                username: document.getElementById('username').value.toLowerCase(),
            },
            success: function (result) {
                console.log("httpcode",result)
                document.body.innerHTML = result
            },
            error: function (error) {
                document.getElementById('btn-send-mail-migrate').removeAttribute('disabled')
                document.getElementById('btn_cancel').removeAttribute('disabled')
                console.log("httpcode",error.status)
                if (error.responseJSON && error.responseJSON.error === 'invalid_user_or_password') {
                    Swal.fire({
                        type: 'error',
                        html: '<br><labal class="h-content">Email is wrong</labal><br><labal class="h-mute">Please check your Email.</labal>',
                        customClass: {
                            confirmButton: 'button-modal',
                        },  
                        confirmButtonColor: '#0e7678',
                        confirmButtonText: 'CLOSE',
                        allowOutsideClick: false
                    }).then((result) => {
                        if (result.value) {
                            btn_forgot.removeAttribute("disabled", "")
                        }
                    })

                } else {
                    if (error.responseText) {
                        document.body.innerHTML = error.responseText
                    }
                    Swal.fire({
                        type: 'error',
                        html: '<br><labal class="h-content">Something Wrong</labal><br><labal class="h-mute">Please try again.</labal>',
                        customClass: {
                            confirmButton: 'button-modal',
                        }, 
                        confirmButtonColor: '#0e7678',
                        confirmButtonText: 'Close',
                        allowOutsideClick: false
                    }).then((result) => {
                        if (result.value) {
                            // document.getElementById('bsing_in').disabled = false;
                            btn_forgot.removeAttribute("disabled", "")
                        }
                    })

                }
            }
        });

    });
    // End API for Forgot password
    // *************** //
}
function cancelMigrate(rdr_url, state){
    window.location = rdr_url + (state ? '?state=' + state : '') + '&error=user_denied'
}