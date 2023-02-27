import Typography from '@mui/material/Typography';
import React from 'react';

const TxStatus = ({ isLoading, isSuccess, isError, txHash, errMsg }) => {
  return (
    <>
      <Typography
        color={
          isLoading ? 'blue' : isSuccess ? 'green' : isError ? 'red' : 'neutral'
        }
        variant="body2"
        css={{ minHeight: 22 }}
      >
        {!!isLoading && 'Check your wallet and confirm the transaction...'}
        {!!isSuccess && (
          <>
            Transaction Success.
            <a target="_blank" href={'https://bscscan.com/tx/' + txHash}>
              {txHash.slice(0, 5) + '...' + txHash.slice(-3)}
            </a>
          </>
        )}
        {!!isError && errMsg}
      </Typography>
    </>
  );
};

export default TxStatus;
