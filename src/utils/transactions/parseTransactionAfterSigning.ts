import { PlainSignedTransaction } from '@multiversx/sdk-web-wallet-provider/out/plainSignedTransaction';
import { Transaction } from '@multiversx/sdk-core/out';
import { newTransaction } from 'models';
import { SignedTransactionType } from 'types';
import { TransactionServerStatusesEnum } from 'types/enums.types';

export function parseTransactionAfterSigning(
  signedTransaction: Transaction | PlainSignedTransaction
) {
  const isComplexTransaction =
    Object.getPrototypeOf(signedTransaction).toPlainObject != null;

  const transaction = isComplexTransaction
    ? (signedTransaction as Transaction)
    : newTransaction(signedTransaction as PlainSignedTransaction);

  const parsedTransaction: SignedTransactionType = {
    ...transaction.toPlainObject(),
    hash: transaction.getHash().hex(),
    status: TransactionServerStatusesEnum.pending
  };
  return parsedTransaction;
}
