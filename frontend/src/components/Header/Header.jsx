import { ConnectButton } from "@rainbow-me/rainbowkit";
import { HStack, Heading } from "@chakra-ui/react";
import { ThemeButton } from "../ThemeButton";

const Header = () => {
    return (
        <HStack
            justifyContent={"space-between"}
        >
            <HStack>
                <Heading>W3D</Heading>
            </HStack>

            <HStack>
                <ConnectButton />
                <ThemeButton />
            </HStack>
        </HStack>
    )
};

export default Header;