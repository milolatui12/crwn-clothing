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



function* generatorFunc() {
    console.log('This will be executed first')
    yield 'Hello'
    console.log('I will be printed after the pause')
    yield "World"
}

const generatorObj = generatorFunc();

generatorObj.next()

console.log(generatorObj.next().value)
console.log(generatorObj.next().value)
console.log(generatorObj.next().value)

function test() {
    console.log('Anything')
    console.log('Anything')
    console.log('Anything')
    console.log('Anything')
}

const testObj = test()
console.log(typeof(testObj))
asdfajfa;sflakjf;l