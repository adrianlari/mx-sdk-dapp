import React, { Fragment, ReactNode, useState } from 'react';
import { getGeneratedClasses } from 'utils';
import WalletConnectLoginContainer from '../WalletConnectLoginContainer';

export interface WalletConnectLoginButtonPropsType {
  onModalOpens?: (props?: any) => void;
  onModalCloses?: (props?: any) => void;
  children?: ReactNode;
  lead?: string;
  title?: string;
  className?: string;
  logoutRoute?: string;
  callbackRoute: string;
  loginButtonText?: string;
  buttonClassName?: string;
  shouldRenderDefaultCss?: boolean;
  wrapContentInsideModal?: boolean;
  redirectAfterLogin?: boolean;
  hideButtonWhenModalOpens?: boolean;
  token?: string;
}

export const WalletConnectLoginButton = ({
  children,
  callbackRoute,
  onModalOpens,
  onModalCloses,
  loginButtonText = 'Maiar App',
  title = 'Maiar Login',
  logoutRoute = '/unlock',
  shouldRenderDefaultCss = true,
  wrapContentInsideModal = true,
  redirectAfterLogin = false,
  buttonClassName,
  className = 'wallect-connect-login',
  lead = 'Scan the QR code using Maiar',
  token,
  hideButtonWhenModalOpens = false
}: WalletConnectLoginButtonPropsType) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: `btn btn-primary px-sm-4 m-1 mx-sm-3 ${
        buttonClassName != null ? buttonClassName : ''
      }`,
      loginText: 'text-left'
    }
  );

  const handleOpenModal = () => {
    setShowLoginModal(true);
    onModalOpens?.();
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    onModalCloses?.();
  };

  const shouldRenderButton = !hideButtonWhenModalOpens || !showLoginModal;
  return (
    <Fragment>
      {shouldRenderButton && (
        <button onClick={handleOpenModal} className={generatedClasses.wrapper}>
          {children || (
            <span className={generatedClasses.loginText}>
              {loginButtonText}
            </span>
          )}
        </button>
      )}
      {showLoginModal && (
        <WalletConnectLoginContainer
          callbackRoute={callbackRoute}
          loginButtonText={loginButtonText}
          title={title}
          token={token}
          className={className}
          logoutRoute={logoutRoute}
          lead={lead}
          wrapContentInsideModal={wrapContentInsideModal}
          redirectAfterLogin={redirectAfterLogin}
          onClose={handleCloseModal}
        />
      )}
    </Fragment>
  );
};

export default WalletConnectLoginButton;
