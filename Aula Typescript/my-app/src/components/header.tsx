type HeaderProps = {
    texto : string
}

const Header = ({ texto } : HeaderProps) =>  {
    return(<h1>{texto}</h1>)
} 

export default Header;