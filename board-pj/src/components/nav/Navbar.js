import '../../css/assets/nav.css';

import loc from '../../img/svg/loc.svg';
import menus from '../../img/svg/menus.svg';
import pay from '../../img/svg/pay-reciving.svg';
import refund from '../../img/svg/refund.svg';
import delivery from '../../img/svg/delivery.svg';

const Navbar = () => {
    return ( 
        <nav>
            <ul>
                <li><a href=''><img  src={loc}/><span className='gap'>Регион:</span><span>Москва</span><img src={menus}/></a></li>
                <li><a href=''><span>Магазины</span></a></li>
                <li><a href=''><span>Помощь</span></a></li>
                <li><a href=''><span>Блоги</span></a></li>
            </ul>
            <ul>
                <li><a href=''><img src={delivery}/><span> Бесплатная доставка *</span></a></li>
                <li><a href=''><img src={pay}/><span>Оплата при получении</span></a></li>
                <li><a href=''><img src={refund}/><span>Возврат в течение 14 дней</span></a></li>
            </ul>
        </nav>
     );
}

export default Navbar;
