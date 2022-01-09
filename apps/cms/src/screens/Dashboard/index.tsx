import React from 'react';
import { Typography, Row, Col } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { HelloWorld } from '@frontend-stack/shared/components';
import StyledContentWrapper from 'components/StyledContentWrapper';

export const DashboardScreen: React.FC = () => {
  const { t } = useTranslation('common');

  // ==================== VIEWS
  return (
    <StyledContentWrapper className="mt-8">
      <Row className="mb-4">
        <Col>
          <Typography.Title level={4}>
            With React Native Web Component
          </Typography.Title>
          <HelloWorld />
        </Col>
      </Row>

      <Typography.Title level={4}>With Tailwindcss</Typography.Title>
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <img
          className="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Next + Tailwind ❤️</div>
          <p className="text-grey-darker text-base">
            Next and Tailwind CSS are a match made in heaven, check out this
            article on how you can combine these two for your next app.
          </p>
        </div>
      </div>
    </StyledContentWrapper>
  );
};

export default DashboardScreen;
