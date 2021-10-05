import { Highlight } from '../../../shared/domains/ui/highlight/components/Highlight'
import {highlightDatasMock} from './highlight.mock'
import {useState} from "react";

export const HightlightSample = () =>
{
  const [searchTerm, setSearchTerm] = useState('')

  const onChangeSearchTerm = (e : any) => setSearchTerm(e.target.value)

  return <>
    <h2>Highlight</h2>
    <input type="text" value={searchTerm} onChange={onChangeSearchTerm}/>

    {highlightDatasMock
      .filter(text => text.toLowerCase().includes(searchTerm.toLowerCase()))
      .map(text => <Highlight searchTerm={searchTerm} text={text} color='blue' />)}
  </>
}