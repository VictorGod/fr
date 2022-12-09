const Header = styled.div`
    padding: 3% 0;
    min-height: 98px
`

const Main = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    &:before{
        content: url('./img/Ellipse_1.png');
        position: absolute;
        top: 41%;
        left: 10%;
        filter: blur(275px);
        width: 55%;
        z-index: 0;
    }
    &:after{
        content: url('./img/Ellipse_2.png');
        position: absolute;
        top: 0;
        left: 52%;
        filter: blur(250px);
        width: 32%;
        z-index: 0;
    }
`

const Title = styled.div`
    position: relative;
    top: 50%;
    font-size: 46px;
`

const TitleMain = styled.h1`
    line-height: 90px;
`

const TitleVacancy = styled.span`
    font-size: 200px;
    font-weight: bold;
`

const TitleOpen = styled.span`
    text-transform: uppercase;
    font-size: 72px;
    font-weight: 400 !important;
`

const WrapperLink = styled.div`
    display: inline-flex;
    border-bottom: 1px solid ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.main};
    font-size: 18px;
    
`

const RegisterLink = styled.div`
    margin-top: 130px;
    display: inline-flex;
    border-bottom: 0px solid ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.main};
    font-size: 18px;
    & p {
        margin-right: 6px;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.main};
    font-size: 18px;
`

const Form = styled.div`
    border-radius: 16px;
    background: ${({ theme }) => theme.formBackground};
    padding: 30px;
    max-width: 384px;
    z-index: 10;
    & h2 {
        margin-bottom: 30px;
        font-size: 24px;
        line-height: 29px;
    }
`