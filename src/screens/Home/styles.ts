import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Avatar = styled.img`
    margin-top: 10px;

    width: 200px;

    cursor: pointer;

    transition: all .2s;

    &:hover {
        opacity: .8;
    }
`;

export const Title = styled.p`
    color: #fff;

    margin-top: 50px;

    font-size: 32px;

    text-align: center;
`;

export const SubTitle = styled.p`
    color: #fff;

    margin-top: 25px;

    font-size: 28px;

    text-align: center;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    margin-top: 90px;
`;

export const Description = styled.p`
    color: #fff;

    font-size: 13px;

    text-align: center;
`;

export const Divider = styled.hr`
    width: 90%;

    margin-top: 100px;
`;

export const CoverContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;

    margin-top: 80px;
`;

export const CoverMusic = styled.img`
    cursor: pointer;

    transition: all .2s;

    &:hover {
        opacity: .5;
    }
`;

export const ShowMoreAction = styled.button`
    padding: 15px;

    background-color: #6A6A6A;

    border-radius: 10px;

    border: none;

    color: #fff;

    font-weight: bold;
    font-size: 6px;

    text-align: center;

    cursor: pointer;

    transition: all .2s;

    &:hover {
        opacity: .7;
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;

    margin-top: 80px;
`;

export const IconRow = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    cursor: pointer;

    transition: all .2s;

    &:hover {
        opacity: .7;
    }
`;

export const Icon = styled.img`
    width: 90px;
`;

export const IconLabel = styled.p`
    color: #fff;

    font-size: 20px;

    text-align: center;
`;

export const DeveloperLabel = styled.p`
    color: #fff;

    font-size: 15px;
    font-weight: bold;

    margin-top: 50px;
    margin-bottom: 35px;

    text-align: center;
`;

export const Link = styled.a``;
