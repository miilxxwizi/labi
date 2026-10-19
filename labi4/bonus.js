function getKiller(suspectInfo, deadPeople) {
    for (let suspect in suspectInfo) {
        let sawEveryone = true;

        for (let person of deadPeople) {
            if (!suspectInfo[suspect].includes(person)) {
                sawEveryone = false;
                break;
            }
        }

        if (sawEveryone) {
            return suspect;
        }
    }
}

console.log(getKiller(
    {
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['David', 'Kyle', 'Lucas'],
        'Peter': ['Lucy', 'Kyle']
    },
    ['Lucas', 'Bill']
));

console.log(getKiller(
    {
        'Brad': [],
        'Megan': ['Ben', 'Kevin'],
        'Finn': []
    },
    ['Ben']
));
