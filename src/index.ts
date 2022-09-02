interface features {
    name: 'Gabriel' | 'Vinicius' | string,
    age: number
}

const showName = (name: features, idade: features) => {
    let introduce = `Ola, ${name}, tudo bem? sua idade é ${idade}`

    console.log(introduce)
}

showName('Gabriel',  20) 