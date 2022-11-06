import style from './Logo.module.css';
import logo from './img/logo2.png';

export const Logo = () => {
  return (
    <a className={style.link} href='/'>
      <img className={style.logo} src={logo} alt="Furnorld's logo" />
    </a>
  )
}