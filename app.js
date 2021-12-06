
const profileDataArgs = process.argv.slice(2,process.argv.length);


const printProfileData = (profileDataArr) => {

    for (data of profileDataArr) console.log(data);
    

    profileDataArr.forEach( profileItem => console.log(profileItem));
        
    
}
printProfileData(profileDataArgs);

