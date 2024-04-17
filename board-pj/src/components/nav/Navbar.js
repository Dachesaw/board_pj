import './nav.css';

import loc from '../../img/svg/loc.svg';
import menus from '../../img/svg/image.png';

const Navbar = () => {
    return ( 
        <nav>
            <ul>
                <li><img src={loc}/><a><span>Регион:</span><span>Москва</span><img src={menus}/></a></li>
                <li><a>Магазины</a></li>
                <li><a>Помощь</a></li>
                <li><a>Блоги</a></li>
            </ul>
            <ul>
                <li><a>Бесплатная доставка *</a></li>
                <li><a>Оплата при получении</a></li>
                <li><a>Возврат в течение 14 дней</a></li>
            </ul>
        </nav>
     );
}

export default Navbar;
