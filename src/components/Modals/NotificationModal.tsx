import { useDisclosure } from "@chakra-ui/react";
import { useCustomModal } from "stores/useCustomModal";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'

interface Props {
  message: string,
}

export const NotificationModal = ({
  message
}: Props) => {
  const {
    isOpenNotiModal,  
    onCloseNotiModal
  } = useCustomModal()

  const onClickOk = async () => {
    
  }

  return (
    <Modal isOpen={isOpenNotiModal} onClose={onCloseNotiModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {message}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='dark' mr={3} onClick={onClickOk}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}