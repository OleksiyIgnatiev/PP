import React, { FC, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Word } from '../../../../pages/CategoryPage/models/Word';
import { WordsService } from '../../api/WordsService';
import WordCard from '../WordCard/WordCard';
import style from './Words.module.css'
import Loader from '../../../../UI/Loader/Loader';
import BackArrow from '../../../../UI/BackArrow/BackArrow';
const Words: FC = () => {
    const location = useLocation();
    const path = location.pathname; // Получаем текущий путь, например, "/repeat-words"
    const lastSegment = path.substring(path.lastIndexOf('/') + 1);

    const [words, setWords] = useState<Word[]>([]);

    useEffect(() => {
        const fetch = async (categories: number[]) => {
            categories.map(async (el) => {
                const { data } = await WordsService.getWordsByCategory(el);
                console.log(data.data)
                setWords(prev => [...prev, ...data.data])
            })
        }

        if (lastSegment == 'repeat-words') {
            const words = JSON.parse(localStorage.getItem('repeat') as string) as number[]
            console.log(words)
            fetch(words)
        } else {
            const words = JSON.parse(localStorage.getItem('learn') as string) as number[]
            console.log(words)
            fetch(words)
        }
    }, [])
    const getRandomNumber = (max: number) => {
        return Math.floor(Math.random() * max);
    };
    const [currentWord, setCurrentWord] = useState<Word>({
        wordId: 0,
        name: '',
        translation: '',
        repetitionNum: 0,
        imgLink: '',
        categoryId: 0
    })
    const [noMoreWords, setNoMoreWords] = useState<boolean>(false)
    const getNewWord = () => {
        console.log('Найти новое слово')
        let word;
        let found = false;
        const maxAttempts = 100; // Максимальное количество попыток
        let attempts = 0;

        if (lastSegment === 'repeat-words') {
            while (!found && attempts < maxAttempts) {
                word = words[getRandomNumber(words.length)];
                if (word.repetitionNum > 0) {
                    found = true;
                    setCurrentWord(word);
                }
                attempts++;
            }
        } else {
            while (!found && attempts < maxAttempts) {
                word = words[getRandomNumber(words.length)];
                if (word.repetitionNum == 0 && word.repetitionNum < 5) {
                    found = true;
                    setCurrentWord(word);
                }
                attempts++;
            }
        }

        if (!found) {
            setNoMoreWords(true);
        }
    };


    useEffect(() => {
        if (words.length > 0) {
            getNewWord()
        }
    }, [words])


    const handleRealizedWord = async(id:number) =>{
       await  WordsService.realizedWord(id);
       setWords(prevWords =>
        prevWords.map(word =>
            word.wordId === id
                ? { ...word, repetitionNum: word.repetitionNum + 1 }
                : word
        )
    );

    }
    return (
        <div className={style.wordsPage}>
            <BackArrow />
            <>{console.log(currentWord)}</>
            {noMoreWords ? <div className={style.noMore}>No more words found</div> :
                (words.length == 0 && currentWord.wordId !== 0) ?
                    <Loader />
                    :
                    <WordCard wordData={currentWord} getNewWord={getNewWord} 
                    handleRealizedWord = {handleRealizedWord}
                    />
            }

        </div>
    )
}

export default Words
