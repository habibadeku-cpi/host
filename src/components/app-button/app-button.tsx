import './app-button.css';


interface ButtonProps {
    name: string;
    color?: string;
    link?: string;
}

function AppButton({name, color, link}: ButtonProps) {
    return (
        <button onClick={()=>window.open(link, '_blank')} style={{backgroundColor: color }} className="app-button">
            {name}
        </button>
    );
}

export default AppButton;