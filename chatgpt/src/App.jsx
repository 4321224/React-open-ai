import { useState } from 'react'
import {Configuration, OpenAIApi} from 'openai'
import OptionSelection from './components/OptionSelection'
import Translation from './components/Translation'
import { arrayItems } from './AiOption'
import './App.css'

function App() {
 const configuration = new Configuration({
  apikey: import.meta.env.Open_AI_Key
 })
const openai = new OpenAIApi(configuration)
const [option, setOption] = useState({})
const [result, setResult] = useState("")
const [input, setInput] = useState("")
const selectOption = (option) => {
  setOption(option)
}
const stuff = async () => {
  let object = {...option, prompt: input}
  const response = await openai.createCompletion(object)
  setResult(response.data.choices[0].text)
}
  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
      <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
      ) : (
      <Translation stuff={stuff} setInput={setInput} result={result}/>
      )}
    </div>
  )
}

export default App
