const myLoader = () => {
    return new Promise((resolved, reject) => {
        const success = Math.random();
        if (success <= 0.5) {
            resolved(success)
        }
        else {
            reject(success)
        }
    })
}

myLoader()
    .then(data => console.log('fulfilled data', data))
    .catch(error => console.log('rejected data', error))


fetch('')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))

async function loauderData() {
    const resposne = await fetch('')
    const data = await resposne.json()
    console.log(data)
}
loauderData()
const findData = async()=>{
    const res = await fetch('')
    const data = await res.json()
    console.log(data)
}
findData()