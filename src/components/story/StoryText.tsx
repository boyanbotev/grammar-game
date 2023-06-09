import { StorySceneTextData } from "../../common/types"
import Question from "../grammar-content/question/Question"

type StoryTextProps = {
    textData: StorySceneTextData
}

const StoryText: React.FC<StoryTextProps> = ({ textData }) => {
    // TODO: use MobX variable?
    return( 
        <Question>
            {textData.storyText[0]}
        </Question>
    )
}

export default StoryText;