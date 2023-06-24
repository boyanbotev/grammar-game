import Button from "../../../grammar-content/button/Button";
import GrammarItemContainer from "../../../grammar-content/grammar-item-container/GrammarItemContainer";
import TextContent from "../../../grammar-content/text-content/TextContent";

const manifestBaseURL = import.meta.env.BASE_URL;

type WinScreenProps = {
    goToNext: () => void,
}

const WinScreen: React.FC<WinScreenProps> = ({ goToNext }) => {
    return (
        <>
            <img src={`${manifestBaseURL}trophy.jpg`}/>
            <GrammarItemContainer>
                <TextContent>YOU WON!</TextContent>
            </GrammarItemContainer>
            <GrammarItemContainer>
                <Button onClick={goToNext}>continue</Button>
            </GrammarItemContainer>
        </>
    )
}

export default WinScreen;

// TODO: Continue button?
