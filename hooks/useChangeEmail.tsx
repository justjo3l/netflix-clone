import { auth } from '../firebase'
import { updateEmail } from 'firebase/auth'

function useChangeEmail(email: string) {

    updateEmail(auth.currentUser!, email)

    return email
}
export default useChangeEmail