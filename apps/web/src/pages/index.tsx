import React from 'react';
import { Button } from 'react-native';
import { NextPage } from 'next';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import { HelloWorld, KIKI } from '@frontend-stack/shared/components';

const Page: NextPage = () => {
  const { t } = useTranslation('common');

  // ==================== VIEWS
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold underline p-10 bg-red-200">
        {t('common:hello')} from {t('common:brand')}
      </h1>

      <Button onPress={() => setLanguage('en')} title="ENGLISH" />
      <Button onPress={() => setLanguage('cn')} title="CHINESE" />
      <HelloWorld />
      <KIKI />
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
    </div>
  );
};

export default Page;
