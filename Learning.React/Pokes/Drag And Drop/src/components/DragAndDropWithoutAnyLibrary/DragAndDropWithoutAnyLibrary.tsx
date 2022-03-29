import Dropzone from "./Dropzone/Dropzone";
import {dropzonesMock} from "../mock";
import {useState} from "react";
import { DragAndDropContextProvider } from "./context";

const DragAndDropWithoutAnyLibrary = () => {
  const [dropzones, setDropzones] = useState(dropzonesMock)

  return <DragAndDropContextProvider>
    <h2>Without Any Library</h2>
    {
      dropzones.map(dropzone =>
        <Dropzone
          key={`dropzone-${dropzone.id}`}
          {...dropzone}
          dropzones={dropzones}
          setDropzones={setDropzones}/>)
    }
  </DragAndDropContextProvider>;
}

export default DragAndDropWithoutAnyLibrary
