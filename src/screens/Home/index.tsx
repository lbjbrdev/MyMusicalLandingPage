import { useHome } from '../../hooks/useHome';

import * as S from './styles';

import Avatar from '../../assets/avatar.svg';
import Cover1 from '../../assets/cover1.svg';
import Cover2 from '../../assets/cover2.svg';
import Cover3 from '../../assets/cover3.svg';
import Cover4 from '../../assets/cover4.svg';
import Cover5 from '../../assets/cover5.svg';
import Cover6 from '../../assets/cover6.svg';
import Cover7 from '../../assets/cover7.svg';
import Instagram from '../../assets/instagram.svg';
import Wpp from '../../assets/wpp.svg';
import Mail from '../../assets/mail.svg';

export default function Home() {
    const controller = useHome();

    return (
        <S.Container>
            <S.Link href={import.meta.env.VITE_APP_INSTAGRAM_MAIN_URL} target='_blank'>
                <S.Avatar src={Avatar} />
            </S.Link>

            <S.Title>Lucas Bercê de Jesus 🎸</S.Title>
            <S.SubTitle>Seja Bem Vindo(a)</S.SubTitle>

            <S.DescriptionContainer>
                <S.Description>
                    Me aprimorando na música e trilhando meu caminho rumo ao profissional no Sertanejo 🤠
                </S.Description>

                <S.Description>
                    📖 Teoria Musical
                </S.Description>

                <S.Description>
                    🎸 Covers instrumentais (Guitarra e Violão)
                </S.Description>
            </S.DescriptionContainer>

            <S.Divider />

            <S.Title>COVERS E SONS  🎸🎤 </S.Title>

            <S.CoverContainer>
                <S.Link href='https://www.instagram.com/p/DHRNT2BvW-W/' target='_blank'>
                    <S.CoverMusic src={Cover1} />
                </S.Link>

                <S.Link href='https://www.instagram.com/p/DGv8vlyv1hs/' target='_blank'>
                    <S.CoverMusic src={Cover2} />
                </S.Link>

                <S.Link href='https://www.instagram.com/p/DGMsSiQOxPF/' target='_blank'>
                    <S.CoverMusic src={Cover3} />
                </S.Link>

                <S.Link href='https://www.instagram.com/p/DFrOWHBNXPu/' target='_blank'>
                    <S.CoverMusic src={Cover4} />
                </S.Link>

                <S.Link href='https://www.instagram.com/p/DFOVpIxP0-T/' target='_blank'>
                    <S.CoverMusic src={Cover5} />
                </S.Link>

                <S.Link href='https://www.instagram.com/p/DFixp1Evnqu/' target='_blank'>
                    <S.CoverMusic src={Cover6} />
                </S.Link>

                <S.Link href='https://www.instagram.com/p/DFd_JbWvi3v/' target='_blank'>
                    <S.CoverMusic src={Cover7} />
                </S.Link>

                <S.ShowMoreAction onClick={controller?.handleShowMore}>
                    VER MAIS
                </S.ShowMoreAction>
            </S.CoverContainer>

            <S.Divider />

            <S.Title>ME SIGA NAS REDES</S.Title>

            <S.IconsContainer>
                <S.IconRow onClick={() => controller?.handleOpenContact('instagram')}>
                    <S.Icon src={Instagram} />
                    <S.IconLabel>lucasbercejesus</S.IconLabel>
                </S.IconRow>

                <S.IconRow onClick={() => controller?.handleOpenContact('wpp')}>
                    <S.Icon src={Wpp} />
                    <S.IconLabel>(11) 95874-1072</S.IconLabel>
                </S.IconRow>

                <S.IconRow onClick={() => controller?.handleOpenContact('mail')}>
                    <S.Icon src={Mail} />
                    <S.IconLabel>lucasberce71@gmail.com</S.IconLabel>
                </S.IconRow>
            </S.IconsContainer>

            <S.Divider />

            <S.DeveloperLabel>
                Desenvolvido por Lucas Bercê de Jesus
            </S.DeveloperLabel>
        </S.Container>
    )
}
