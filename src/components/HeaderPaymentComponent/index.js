import LogoImage from '../Common/ImageBanner';
import { ContentPaymentHeader, LogoHeader, BtnActionLogout } from './styles';

function HeaderPaymentComponent() {
  const handleLogout = async () => {
    if (localStorage.getItem('tokenUser')) {
      await localStorage.removeItem('tokenUser');
      const tokenUser = await localStorage.getItem('tokenUser');
      if (tokenUser === null) {
        window.location.reload();
      }
    }
  };
  return (
    <ContentPaymentHeader>
      <LogoHeader>
        <h2>
          <LogoImage height="40" width="200" />
        </h2>
      </LogoHeader>
      <BtnActionLogout onClick={handleLogout}>Log out</BtnActionLogout>
    </ContentPaymentHeader>
  );
}

export default HeaderPaymentComponent;
