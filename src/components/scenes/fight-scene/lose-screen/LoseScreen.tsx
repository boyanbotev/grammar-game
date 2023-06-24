import Button from "../../../grammar-content/button/Button";
import GrammarItemContainer from "../../../grammar-content/grammar-item-container/GrammarItemContainer";
import TextContent from "../../../grammar-content/text-content/TextContent";

const manifestBaseURL = import.meta.env.BASE_URL;

type LoseScreenProps = {
    resetScene: () => void,
}

const LoseScreen: React.FC <LoseScreenProps>= ({ resetScene }) => {
    return (
        <>
            <img src={`${manifestBaseURL}lose-screen-1.jpg`}/>
            <GrammarItemContainer>
                <TextContent>YOU LOST!</TextContent>
            </GrammarItemContainer>
            <GrammarItemContainer>
                <Button onClick={resetScene}>try again</Button>
            </GrammarItemContainer>
        </>
    )
}

export default LoseScreen;

// TODO: Retry Button?
