
// node faz cache das modulos, mantêm as instâncias como sendo singleton.
module.exports = {
    value: 1,
    inc() {
        this.value++
    }
}