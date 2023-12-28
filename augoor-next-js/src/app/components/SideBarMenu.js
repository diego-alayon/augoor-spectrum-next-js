import { Flex, View } from "@adobe/react-spectrum";
import DeployedCode from "../assets/icons/DeployedCode";
import SearchIcon from "../assets/icons/SearchIcon";
import AugoorBrand from "../assets/icons/AugoorBrand";

function SideBarMenu () {
    
    return (
        <><View padding="size-150" borderEndWidth="thin" borderEndColor="gray-50" height={'100vh'} backgroundColor={'gray-100'}>
                <Flex justifyContent={"center"} alignItems="center" marginBottom={"size-400"} marginTop={"size-250"}>
                    <AugoorBrand />
                </Flex>
                <Flex justifyContent={"center"} alignItems="center" marginBottom={"size-400"}>
                    <SearchIcon />
                </Flex>
                <Flex justifyContent={"center"} alignItems="center">
                    <DeployedCode />
                </Flex>            
        </View>
        </>
    );
}

export default SideBarMenu;
