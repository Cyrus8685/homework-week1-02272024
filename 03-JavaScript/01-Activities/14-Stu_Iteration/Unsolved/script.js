// WRITE YOUR CODE BELOW

studentNames = ["Jonathan", "Nicole", "Adam", "Jackson", "Kevin"]

{console.log(studentNames.length)}

for (let i=0; i < studentNames.length; i++ ) {
    console.log(`Great to see you ${studentNames[i]}`);
}


for (const newStudent of studentNames) {
    console.log(`Great to see you ${newStudent}.`);
}


