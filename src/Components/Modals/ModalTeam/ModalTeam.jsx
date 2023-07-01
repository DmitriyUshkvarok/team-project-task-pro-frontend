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
          <Img
            src={dm}
            alt="user"
            width={120}
            height={120}
            style={{ borderRadius: '8px' }}
          />
          <p>Dmitriy Ushkvarok</p>
          <p>Team Lead</p>
          <ContainerIcons>
            <a href="https://github.com/DmitriyUshkvarok">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/dmitriy-ushkvarok/">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img
            src={vt}
            alt="user"
            width={120}
            height={120}
            style={{ borderRadius: '8px' }}
          />
          <p>Vitalii Nozhenko</p>
          <p>Scrum Master</p>
          <ContainerIcons>
            <a href="https://github.com/VitalikN">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/vitalii-nozhenko/">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
      </FirstList>
      <SecondList>
        <User>
          <Img
            src={ig}
            alt="user"
            width={120}
            height={120}
            style={{ borderRadius: '8px' }}
          />
          <p>Ihor Statsenko</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/statsenkoin">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/ihor-statsenko/">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img
            src={ag}
            alt="user"
            width={120}
            height={120}
            style={{ borderRadius: '8px' }}
          />
          <p>Anastasiia Hudymenko</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/AnastasiiaHudymenko">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/anastasia-gudymenko/">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img
            src={al}
            alt="user"
            width={120}
            height={120}
            style={{ borderRadius: '8px' }}
          />
          <p>Oleksandr Usachov</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/alexxxusachev888">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/oleksandr-usachov/">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img
            src={ev}
            alt="user"
            width={120}
            height={120}
            style={{ borderRadius: '8px' }}
          />
          <p>Evgen Zaharevich</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/Evgen-Zaharevich">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/evgen-zaharevich/">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img
            src={sm}
            alt="user"
            width={120}
            height={120}
            style={{ borderRadius: '8px' }}
          />
          <p>Serhii Mykhailevych</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/serheihimself">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/serhii-mykhailevych/">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
      </SecondList>
      <ThirdList>
        <User>
          <Img
            src={ol}
            alt="user"
            width={120}
            height={120}
            style={{ borderRadius: '8px' }}
          />
          <p>Oleh Paslavskiy</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/OPaslavskiy">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/oleh-paslavskyi/">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img
            src={an}
            alt="user"
            width={120}
            height={120}
            style={{ borderRadius: '8px' }}
          />
          <p>Anna Kornieieva</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/KornieievaAnna">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/anna-kornieieva-3a1599166/">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img
            src={dz}
            alt="user"
            width={120}
            height={120}
            style={{ borderRadius: '8px' }}
          />
          <p>Ihor Diuzhev</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/IhorDiu">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/ihor-duizhev/">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img
            src={dr}
            alt="user"
            width={120}
            height={120}
            style={{ borderRadius: '8px' }}
          />
          <p>Darya Viunyk</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/Darya-Viunyk">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/daria-viunyk/">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img
            src={os}
            alt="user"
            width={120}
            height={120}
            style={{ borderRadius: '8px' }}
          />
          <p>Oleh Scherbak</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/olehscherbak">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/olehscherbak/">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
        <User>
          <Img
            src={sa}
            alt="user"
            width={120}
            height={120}
            style={{ borderRadius: '8px' }}
          />
          <p>Serhii Opanasenko</p>
          <p>Developer</p>
          <ContainerIcons>
            <a href="https://github.com/PanSerg">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/serhii-opanasenko-284160263/">
              <AiFillLinkedin />
            </a>
          </ContainerIcons>
        </User>
      </ThirdList>
    </ModalContainer>
  );
};

export default ModalTeam;
