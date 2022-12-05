import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const googleButton = document.querySelector("#googleLogin")

googleButton.addEventListener("click", async () => {

    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)

        const modal = bootstrap.Modal.getInstance(document.querySelector("#signinModal"))
        modal.hide()

        showMessage("Hola! " + credentials.user.displayName, "success")

    } catch (error) {

    }



})