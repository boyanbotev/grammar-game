import Button from "../../../grammar-content/button/Button";
import ItemContainer from "../../../grammar-content/item-container/ItemContainer";
import TextContent from "../../../grammar-content/text-content/TextContent";
import TransparentOverlay from "../transparent-overlay/TransparentOverlay";

const manifestBaseURL = import.meta.env.BASE_URL;

type LoseScreenProps = {
    resetScene: () => void,
}

const LoseScreen: React.FC <LoseScreenProps>= ({ resetScene }) => {
    return (
        <>
            <TransparentOverlay/>
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
