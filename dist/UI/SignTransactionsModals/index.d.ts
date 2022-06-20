/// <reference types="react" />
import { Transaction } from '@elrondnetwork/erdjs';
import { LoginMethodsEnum } from 'types';
interface SignPropsType {
    handleClose: () => void;
    error: string | null;
    sessionId?: string;
    transactions: Transaction[];
    providerType: LoginMethodsEnum;
    callbackRoute: string;
    className?: string;
    verifyReceiverScam?: boolean;
}
interface CustomConfirmScreensType {
    Ledger: (signProps: SignPropsType) => JSX.Element;
    Extension: (signProps: SignPropsType) => JSX.Element;
    WalletConnect: (signProps: SignPropsType) => JSX.Element;
    Extra: (signProps: SignPropsType) => JSX.Element;
}
interface SignTransactionsPropsType {
    className?: string;
    CustomConfirmScreens?: CustomConfirmScreensType;
    verifyReceiverScam?: SignPropsType['verifyReceiverScam'];
}
declare function SignTransactionsModals({ className, CustomConfirmScreens, verifyReceiverScam }: SignTransactionsPropsType): JSX.Element | null;
export default SignTransactionsModals;
//# sourceMappingURL=index.d.ts.map