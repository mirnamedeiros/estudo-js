const anonymous = process.argv.indexOf('-a') != -1

if(anonymous) {
    process.stdout.write('Hey anonymous!\n')  
    process.exit()
}
else{
    process.stdout.write('Say your name: ')
    process.stdin.on('data', data => {
        const name = data.toString().replace('\n','')

        process.stdout.write(`Hey ${name}!\n`)
        process.exit()
    })
}