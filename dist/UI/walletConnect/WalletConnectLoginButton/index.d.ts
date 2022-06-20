import { ReactNode } from 'react';
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
declare const WalletConnectLoginButton: ({ children, callbackRoute, onModalOpens, onModalCloses, loginButtonText, title, logoutRoute, shouldRenderDefaultCss, wrapContentInsideModal, redirectAfterLogin, buttonClassName, className, lead, token, hideButtonWhenModalOpens }: WalletConnectLoginButtonPropsType) => JSX.Element;
export default WalletConnectLoginButton;
//# sourceMappingURL=index.d.ts.map