import Button from "../../../grammar-content/button/Button";
import ItemContainer from "../../../grammar-content/item-container/ItemContainer";
import TextContent from "../../../grammar-content/text-content/TextContent";
import TransparentOverlay from "../transparent-overlay/TransparentOverlay";

const manifestBaseURL = import.meta.env.BASE_URL;

type WinScreenProps = {
    goToNext: () => void,
}

const WinScreen: React.FC<WinScreenProps> = ({ goToNext }) => {
    return (
        <>
            <TransparentOverlay/>
            <img src={`${manifestBaseURL}trophy.jpg`}/>
            <ItemContainer>
                <TextContent>YOU WON!</TextContent>
            </ItemContainer>
            <ItemContainer>
                <Button onClick={goToNext}>continue</Button>
            </ItemContainer>
        </>
    )
}

export default WinScreen;
