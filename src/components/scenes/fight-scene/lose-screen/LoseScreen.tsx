import Button from "../../../grammar-content/button/Button";
import ItemContainer from "../../../grammar-content/grammar-item-container/ItemContainer";
import TextContent from "../../../grammar-content/text-content/TextContent";

const manifestBaseURL = import.meta.env.BASE_URL;

type LoseScreenProps = {
    resetScene: () => void,
}

const LoseScreen: React.FC <LoseScreenProps>= ({ resetScene }) => {
    return (
        <>
            <img src={`${manifestBaseURL}lose-screen-1.jpg`}/>
            <ItemContainer>
                <TextContent>YOU LOST!</TextContent>
            </ItemContainer>
            <ItemContainer>
                <Button onClick={resetScene}>try again</Button>
            </ItemContainer>
        </>
    )
}

export default LoseScreen;

// TODO: Retry Button?
