import CloseButton from '../CloseButton/CloseButton';
import {
  ModalContainer,
  TeamTitle,
  FirstList,
  SecondList,
  ThirdList,
  User,
  Img,
  ContainerIcons,
} from './ModalTeam.styled';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

import ag from '../../../images/team/ag.jpg';
import al from '../../../images/team/al.jpg';
import an from '../../../images/team/an.jpg';
import dm from '../../../images/team/dm.jpg';
import dr from '../../../images/team/dr.jpg';
import dz from '../../../images/team/dz.jpg';
import ev from '../../../images/team/ev.jpg';
import ig from '../../../images/team/ig.jpg';
import ol from '../../../images/team/ol.jpg';
import os from '../../../images/team/os.jpg';
import sa from '../../../images/team/sa.jpg';
import sm from '../../../images/team/sm.jpg';
import vt from '../../../images/team/vt.jpg';

const ModalTeam = () => {
  return (
    <ModalContainer>
      <CloseButton />
      <TeamTitle>TaskPro Team</TeamTitle>
      <FirstList>
        <User>
          <Img src={dm} alt="user" />
          <p>Dmitriy Ushkvarok</p>
          <p>Team Lead</p>
          <ContainerIcons>
            <a href="https://github.com/DmitriyUshkvarok" target="blank">
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dmitriy-ushkvarok/"
              target="blank"
            >
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img src={vt} alt="user" />
          <p>Vitalii Nozhenko</p>
          <p>Scrum Master</p>
          <ContainerIcons>
            <a href="https://github.com/VitalikN" target="blank">
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vitalii-nozhenko/"
              target="blank"
            >
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
      </FirstList>
      <SecondList>
        <User>
          <Img src={ig} alt="user" />
          <p>Ihor Statsenko</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/statsenkoin" target="blank">
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ihor-statsenko/"
              target="blank"
            >
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img src={ag} alt="user" />
          <p>Anastasiia Hudymenko</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/AnastasiiaHudymenko" target="blank">
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anastasia-gudymenko/"
              target="blank"
            >
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img src={al} alt="user" />
          <p>Oleksandr Usachov</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/alexxxusachev888" target="blank">
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/oleksandr-usachov/"
              target="blank"
            >
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img src={ev} alt="user" />
          <p>Evgen Zaharevich</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/Evgen-Zaharevich" target="blank">
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/evgen-zaharevich/"
              target="blank"
            >
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img src={sm} alt="user" />
          <p>Serhii Mykhailevych</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/serheihimself" target="blank">
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/serhii-mykhailevych/"
              target="blank"
            >
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
      </SecondList>
      <ThirdList>
        <User>
          <Img src={ol} alt="user" />
          <p>Oleh Paslavskiy</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/OPaslavskiy" target="blank">
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/oleh-paslavskyi/"
              target="blank"
            >
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img src={an} alt="user" />
          <p>Anna Kornieieva</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/KornieievaAnna" target="blank">
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anna-kornieieva-3a1599166/"
              target="blank"
            >
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img src={dz} alt="user" />
          <p>Ihor Diuzhev</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/IhorDiu" target="blank">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/ihor-duizhev/" target="blank">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img src={dr} alt="user" />
          <p>Darya Viunyk</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/Darya-Viunyk" target="blank">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/daria-viunyk/" target="blank">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img src={os} alt="user" />
          <p>Oleh Scherbak</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/olehscherbak" target="blank">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/olehscherbak/" target="blank">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img src={sa} alt="user" />
          <p>Serhii Opanasenko</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/PanSerg" target="blank">
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/serhii-opanasenko-284160263/"
              target="blank"
            >
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
      </ThirdList>
    </ModalContainer>
  );
};

export default ModalTeam;
