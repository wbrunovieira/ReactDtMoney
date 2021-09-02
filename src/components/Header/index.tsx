  
import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {

  OnOpenNewTransactionModal: () => void;
}

export const Header = ({OnOpenNewTransactionModal}:HeaderProps) => {

  

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={OnOpenNewTransactionModal}>
          Nova Transação
        </button>

        

      </Content>
    </Container>
  );
}