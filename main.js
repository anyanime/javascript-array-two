 // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    //working with Array.prototype.some()

    // const isOld = people.some(function(person) {
    //     const currentYear = (new Date()).getFullYear();
    //     if (currentYear - person.year >= 19) {
    //         return true;
    //     }
    // })

    const isOld = people.some(person => (new Date()).getFullYear() - person.year >= 19)
    console.log(isOld);

    //working with Array.prototype.every()

    const allOld = people.every(all => ((new Date()).getFullYear()) - people.year)

    console.log(allOld)

    // Array.prototype.find()
    const comment = comments.find(comment => comment.id === 523423);

    console.log(comment);

    //Array.prototype.findIndex()
    const index = comments.findIndex(comment => comment.id === 2039842);

    console.log(index);

    //delete the comment with the id of 823423
    // comments.splice(index, 1)

    const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
    ]