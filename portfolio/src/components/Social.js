import { HStack,Icon,useMediaQuery} from "@chakra-ui/react";
import { FaFacebook, FaGoogle, FaSpotify,FaShopify } from "react-icons/fa";
export default function Social() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');
  return (
    <HStack ml={12}   spacing={isNotSmallerScreen?24:6}>
      <Icon as={FaFacebook} boxSize="50"_hover={{color:'#face6e'}} onClick={()=>{"#"}}/>
      <Icon as={FaGoogle} boxSize="50"_hover={{color:'#face6e'}} onClick={()=>{"#"}}/>
      <Icon as={FaSpotify} boxSize="50"_hover={{color:'#face6e'}} onClick={()=>{"#"}}/>
      <Icon as={FaShopify} boxSize="50"_hover={{color:'#face6e'}} onClick={()=>{"#"}}/>
    </HStack>
  )
}
