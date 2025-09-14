import logo from '../assets/logo.png';

export default function GameTitle() {

    return (
        <header className="bingo-header">
            <div className="bingo-logo">
                <img src={logo} alt="Buh-Buh-Buh-Bingo" />
            </div>
            <div className="bingo-subtitle">
                Click on a square to mark it!
            </div>
        </header>
    );
}