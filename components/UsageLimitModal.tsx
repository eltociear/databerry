import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import WarningIcon from '@mui/icons-material/Warning';
import Alert from '@mui/joy/Alert';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Divider from '@mui/joy/Divider';
import Modal from '@mui/joy/Modal';
import Typography from '@mui/joy/Typography';
import Link from 'next/link';
import React from 'react';

import { RouteNames } from '@app/types';

type Props = {
  isOpen: boolean;
  description?: string;
  handleClose: () => any;
};

function UsageLimitModal({ isOpen, description, handleClose }: Props) {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Card
        variant="outlined"
        color="warning"
        sx={{ width: 500, maxWidth: '100%' }}
      >
        {/* <Typography level="h4" color="warning">
          {description ||
            'Usage limit reached. Upgrade your plan to get higher usage'}
        </Typography> */}
        <Alert
          color="warning"
          variant="soft"
          sx={{ alignItems: 'flex-start' }}
          startDecorator={
            <WarningIcon sx={{ mt: '2px', mx: '4px' }} fontSize="xl2" />
          }
        >
          <div>
            <Typography fontWeight="lg" mt={0.25}>
              {'Usage limit reached'}
            </Typography>
            <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
              {`${description || 'Upgrade your plan to get higher usage'}`}
            </Typography>
          </div>
        </Alert>

        <Divider sx={{ my: 3 }} />

        <Link href={RouteNames.ACCOUNT} style={{ marginLeft: 'auto' }}>
          <Button
            endDecorator={<ArrowForwardRoundedIcon />}
            color="success"
            variant="plain"
          >
            Upgrade Plan
          </Button>
        </Link>
      </Card>
    </Modal>
  );
}

export default UsageLimitModal;
