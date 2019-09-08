import { USER_INPUT } from './types'

const userInput = (data,dataField) => {
    return {
        type: USER_INPUT,
        data,
        dataField
    }
}

export { userInput }