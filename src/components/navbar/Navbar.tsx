import Logo from '../logo/Logo';
import MenuItems from '../menuItems/MenuItems';
import GetStartedButton from '../getStartedButton/GetStartedButton';

const NavBar = () => {
    return (
        <nav className="relative container mx-auto p-6 ">
            <div className="flex items-center justify-between">
                <Logo/>
                <MenuItems/>
                <GetStartedButton/>
            </div>
        </nav>
    );

};

export default NavBar;
