import './apps-container.css';
import AppButton from '../app-button/app-button';

function AppsContainer() {
    return (
        <div className='apps-container'>
          <AppButton name={'Charger Mgt'} color={'darkorange'} link={'http://localhost:3002'} />
          <AppButton  name={'Be.Energized'} color={'purple'}  link={'http://localhost:3003'} ></AppButton>
        </div>
    );
}

export default AppsContainer;
