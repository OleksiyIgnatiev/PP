interface WordType {
    text:string,
    color: string
}

export const getWordTypeText = (repetitionNum: number):WordType =>{
    if(repetitionNum <1){
        return {
            text: 'Нове слово',
            color: "#D9D9D9"
        }
    }else  if(repetitionNum > 20){
        return {
            text: 'Вивчено',
            color: "#4CAF50"
        }
    }
    else  if(repetitionNum > 1){
        return {
            text: 'На виченні',
            color: "#FFCC00"
        }
    }
    return {
        text: 'Нове слово',
        color: "#D9D9D9"
    }

}