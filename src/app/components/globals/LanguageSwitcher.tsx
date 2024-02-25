'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function LocalSwitcher() {
  const router = useRouter();
  const localActive = useLocale();

  const languageHandler = () => {
    if (localActive === 'en') {
      router.push('/bn');
    } else {
      router.push('/en');
    }
  }

  return (
    <div>
        <button className="text-lg text-white font-semibold bg-primary-main px-8 py-4 border-1 border-primary-main rounded-lg" onClick={languageHandler}>{localActive === 'en' ? 'বাংলা' : 'English'}</button>
    </div>
  );
}
