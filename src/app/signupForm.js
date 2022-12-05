import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const signupForm = document.querySelector("#signup-form")

signupForm.addEventListener("submit", async (e) => {
   e.preventDefault()

   const email = signupForm["signup-email"].value
   const password = signupForm["signup-password"].value

   console.log(email, password)

   try {

      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredentials)

      //close the signup modal
      const signupModal = document.querySelector("#signupModal")
      const modal = bootstrap.Modal.getInstance(signupModal)
      modal.hide()

      showMessage("Welcome " + userCredentials.user.email)


   } catch (error) {


      if (error.code === "auth/email-already-in-use") {
         showMessage("Email en uso", "error")
      } else if (error.code === "auth/invalid-email") {
         showMessage("Email no valido", "error")
      } else if (error.code === "auth/weak-password") {
         showMessage("Contraseña demasiado debil", "error")
      } else if (error.code) {
         showMessage(error.message, "error")
      }
   }
})


