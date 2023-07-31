setTimeout(() => {
    console.log("Two seconds are up")
}, 2000)

const names = ['Andrew','Karol','Tom','Json']
const shortNames = names.filter((name) => {
    return name.length <= 4
})