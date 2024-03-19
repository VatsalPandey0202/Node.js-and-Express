import os from 'os';

//The interfaces can be ignored if we do not know the structure of returned object
// info about current user
interface UserInfo {
    uid: number;
    gid: number;
    username: string;
    homedir: string;
}
const user : UserInfo = os.userInfo()
console.log(user)

interface OperatingSystem {
    name: string;
    release: string;
    totalMem: number;
    freeMem: number;
}

const currentOS: OperatingSystem = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS)