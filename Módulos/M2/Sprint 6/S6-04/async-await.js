function answerAfter2Seconds() {
    return new Promise (response => {
        setTimeout(() => {
            response('resposta')
        }, 2000)
    }, )
}

async function asyncCalling() {
    console.log('chamando')
    const result = await answerAfter2Seconds()
    console.log(result)
}

asyncCalling()