import { ContentPaymentHeader, LogoHeader, BtnActionLogout } from './styles';

function HeaderPaymentComponent() {
  const handleLogout = async () => {
    if (localStorage.getItem('token')) {
      await localStorage.removeItem('token');
      const tokenUser = await localStorage.getItem('token');
      if (tokenUser === null) {
        window.location.reload();
      }
    }
  };
  return (
    <ContentPaymentHeader>
      <LogoHeader>
        <h2>SHOWHUB</h2>
      </LogoHeader>
      <BtnActionLogout onClick={handleLogout}>Log out</BtnActionLogout>
    </ContentPaymentHeader>
  );
}

export default HeaderPaymentComponent;
