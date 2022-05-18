import { auth } from '../firebase'
import { updateEmail }from 'firebase/auth'

const useChangeEmail = (email: string) => {

    updateEmail(auth.currentUser!, email)

}
export default useChangeEmail