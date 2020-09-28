function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve("cac"), 2000)
    })
}
function* generator() {
    const users = yield getUsers();
    return (users + " corectly received");
}

async function generator2() {
    const users = await getUsers();
    return (users + " corectly received");
}

const iterator = generator();
const iteration = iterator.next();
const iterator2 = generator2();

iterator2.then(string => console.log(string))

iteration.value.then(
    resolvedValue => {
        const nextIteration = iterator.next(resolvedValue)
        console.log(nextIteration)
    }
)


function * naturalNumbers() {
    let num = 1;
    while (true) {
      yield num;
      num = num + 1
    }
  }
  const numbers = naturalNumbers();
  while(numbers.next().value) {
      console.log(numbers.next().value)
  }
