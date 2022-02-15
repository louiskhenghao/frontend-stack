import React from 'react';
import { Button } from 'react-native';
import { NextPage } from 'next';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import { HelloWorld } from '@frontend-stack/shared/components';
import { tw } from '@frontend-stack/ui-theme';

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

      <div className="bg-primary h-2 w-full"></div>
      <div className="bg-secondary h-2 w-full"></div>
      <div className="bg-normal h-2 w-full"></div>
      <div className="bg-light h-2 w-full"></div>
      <div className="bg-accent h-2 w-full"></div>
      <div className="bg-info h-2 w-full"></div>
      <div className="bg-success h-2 w-full"></div>
      <div className="bg-warning h-2 w-full"></div>
      <div className="bg-error h-2 w-full"></div>
      <div className="bg-disabled h-2 w-full"></div>

      <hr />
      <div style={tw(`bg-primary h-6 w-full p-lg`)}></div>
    </div>
  );
};

export default Page;
