const sheet = (name, expensesOrIncomes, changeItself) => {
    //need to change its own state inside object so get a reference of current state and then change the state from inside

    const expensesAndIncomes = []
    const createNewExpenseOrIncome = (obj) => {
        changeItself(obj, name)
    }
    const findAllExpensesAndIncomes = () => {
        return expensesAndIncomes
    }

    return {name,createNewExpenseOrIncome, expensesOrIncomes, findAllExpensesAndIncomes, expensesAndIncomes}
}

export default sheet