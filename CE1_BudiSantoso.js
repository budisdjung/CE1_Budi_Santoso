function hipHura (bilangan) {
    let result = bilangan;

    if (bilangan % 3 == 0 && bilangan % 5 == 0){
        return "Hip Hura"
    }
    if (bilangan % 3 == 0){
        return "Hip"
    }
    if (bilangan % 5 == 0){
        return "Hura"
    }
    return result
}

console.log(hipHura(15))