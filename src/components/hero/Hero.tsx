import LeftItem from '../leftItem/LeftItem';
import RightItem from '../rightItem/RightItem';

const Hero = () => {
    return (
        <section id="hero">
            <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0  md:flex-row">
                <LeftItem/>
                <RightItem/>
            </div>
        </section>
    );
};

export default Hero;
