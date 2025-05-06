import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Typography, FormHelperText } from '@mui/material';

const DeclarationSection: React.FC = () => {
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
  const [termsError, setTermsError] = useState<boolean>(false);

  return (
    <>
      <FormControlLabel 
        control={
          <Checkbox
            checked={agreeTerms}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAgreeTerms(e.target.checked);
              if (termsError) setTermsError(false);
            }}
            name="terms"
            color="primary"
          />
        }
        label={
          <Typography variant="body1" >
            I hereby declare that the information provided is true, complete, and accurate to the best of my knowledge. I understand that providing false or misleading information may lead to disqualification or legal action. I agree to the{' '}
            <a href="/terms" target="_blank" rel="noopener noreferrer">
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>.
          </Typography>
        }
      />
      {termsError && (
        <FormHelperText error>Please accept the declaration to proceed.</FormHelperText>
      )}
    </>
  );
};

export default DeclarationSection;
