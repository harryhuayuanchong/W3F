import { ConnectButton } from "@rainbow-me/rainbowkit";
import { HStack, Heading } from "@chakra-ui/react";

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
            </HStack>
        </HStack>
    )
};

export default Header;