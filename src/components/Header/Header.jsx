import { Navigation } from '../../components';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <Navigation />
        </header>
    );
};

export default Header;
