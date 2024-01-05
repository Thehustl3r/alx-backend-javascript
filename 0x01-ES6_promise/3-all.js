import {uploadPhoto, createUser} from './utils'

async function handleProfileSignup() {
    try {
        const res = await Promise.all([createUser(), uploadPhoto()]);
        console.log(`${res[1].body} ${res[0].firstName} ${res[0].lastName} `);
    } catch {
        console.log('Signup system offline');
    }
}
export default handleProfileSignup;