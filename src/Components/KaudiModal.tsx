import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import Score1_Img from ".././Utils/Kaudi_Score_1.png"
import Score2_Img from ".././Utils/Kaudi_Score_2.png"
import Score3_Img from ".././Utils/Kaudi_Score_3.png"
import Score4_Img from ".././Utils/Kaudi_Score_4.png"
import Score5_Img from ".././Utils/Kaudi_Score_5.png"
import styles from "./KaudiModal.module.css"

import {
  
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Image } from "@chakra-ui/image";
import { Box, Heading } from "@chakra-ui/layout";



export interface KaudiModalType {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  dice: number;
}



function KaudiModal({ isOpen, onOpen, onClose, dice }: KaudiModalType) {
  

  if (isOpen) {
    setTimeout(() => {
      onClose();
    }, 2300);
  }

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className={styles.modal}>
          <ModalHeader>
            <Heading textAlign={"center"} color={"#262525"}>
              Your Output
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Image
              alt="kaudiImage"
              src={
                dice == 1
                  ? Score1_Img
                  : dice == 2
                  ? Score2_Img
                  : dice == 3
                  ? Score3_Img
                  : dice == 4
                  ? Score4_Img
                  : dice == 5
                  ? Score5_Img
                  : "none"
              }
            />
          </ModalBody>
          <Box h={"42px"}>
            <Heading
              textAlign={"center"}
              fontSize={"40px"}
              fontWeight={"bold"}
              color={"blue"}
              m={"10px"}
              mt={{ base: "-148px", md: "-164px", lg: "-164px" }}
            >
              {dice}
            </Heading>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

export default KaudiModal;
