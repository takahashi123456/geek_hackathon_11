import Header from "../../components/Header"
import React, { useState, useEffect } from "react"
import { pushMessage, messagesRef } from "../firebase"

const Form = () => {
    const QuestionList = [
        {
            id: 1,
            "name": "どんな作品を作りましたか？"
        }, {
            id: 2,
            "name": "どのような課題を解決しようとしましたか？"
        }, {
            id: 3,
            "name": "なぜそのような課題に取り組みましたか？"
        }, {
            id: 4,
            "name": "どのような技術を使って解決に取り組みましたか？"
        }, {
            id: 5,
            "name": "どのような意図を持ってその技術を選びましたか？"
        }, {
            id: 6,
            "name": "どの程度課題に対して解決ができましたか？"
        }, {
            id: 7,
            "name": "？"
        },
    ]
    const [count, setCount] = useState(1)
    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const [messages, setMessages] = useState([])

    const handleClick = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        messagesRef
            .orderByKey()
            .limitToLast(10)
            .on("value", (snapshot) => {
                const messages = snapshot.val()
                if (messages === null) return
                const entries = Object.entries(messages)
                const newMessages = entries.map((data) => {
                    const [key, message] = data
                    return { key, ...message }
                })
                setMessages(newMessages)
            })
    }, [])
    console.log(count)
    return (
        <>
            <Header />



            < div className="heading text-center font-bold text-4xl m-5 text-gray-800 w-full">
                {QuestionList.map((Question) => (
                    count === Question.id &&
                    <p
                        className="title  outline-none w-full"
                    >{Question.name}</p>
                ))}</div>


            <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                {QuestionList.map((Question) => (
                    count === Question.id &&
                    <input
                        className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                        placeholder={Question.name}
                        type="text"
                        value={Question.name}
                        onChange={(e) => setName((name) => (name = e.target.value))}
                    // hidden
                    />
                ))}
                <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
                    placeholder="Describe everything about this post here"
                    value={text}
                    onChange={(e) => setText((text) => (text = e.target.value))}
                ></textarea>

                <div className="icons flex text-gray-500 m-2">
                    <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                </div>

                <div className="buttons flex">
                    <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
                    <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
                        onClick={() => pushMessage({ name: name, text: text })
                        }><a href="#" onClick={handleClick}>Post</a></div>

                </div>
            </div>
            {messages.map((message) => (
                <div key={message.key} className=" mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                    <div>
                        <p>名前：{message.name}</p>
                        <p>内容：{message.text}</p>
                    </div>
                </div>
            ))}

        </>
    )
}
export default Form;

