import { Parallax } from 'react-scroll-parallax';

const Background = () => {
    return (
        <>
            {/* Background Blobs with Parallax */}
            <div className="bg-blobs">
                <Parallax speed={-10}>
                    <div className="blob pink"></div>
                </Parallax>
                <Parallax speed={5}>
                    <div className="blob blue"></div>
                </Parallax>
                <Parallax speed={-5}>
                    <div className="blob light"></div>
                </Parallax>
            </div>

            {/* Background Squares with Parallax */}
            <div className="bg-squares">
                <Parallax speed={-15}>
                    <div className="square sq1"></div>
                </Parallax>
                <Parallax speed={12}>
                    <div className="square sq2"></div>
                </Parallax>
                <Parallax speed={-8}>
                    <div className="square sq3"></div>
                </Parallax>
                <Parallax speed={20}>
                    <div className="square sq4"></div>
                </Parallax>
                <Parallax speed={-12}>
                    <div className="square sq5"></div>
                </Parallax>
                <Parallax speed={15}>
                    <div className="square sq6"></div>
                </Parallax>
            </div>
            
            {/* Extra Shapes Background */}
            <div className="bg-extra">
                <Parallax speed={-20}>
                    <div className="triangle"></div>
                </Parallax>
                <Parallax speed={10}>
                    <div className="hexagon"></div>
                </Parallax>
                <div className="blob-soft"></div>
            </div>
        </>
    );
};

export default Background;
