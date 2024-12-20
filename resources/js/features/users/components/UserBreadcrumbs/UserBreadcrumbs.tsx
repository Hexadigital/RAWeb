import { useLaravelReactI18n } from 'laravel-react-i18n';
import type { FC } from 'react';

import {
  BaseBreadcrumb,
  BaseBreadcrumbItem,
  BaseBreadcrumbLink,
  BaseBreadcrumbList,
  BaseBreadcrumbPage,
  BaseBreadcrumbSeparator,
} from '@/common/components/+vendor/BaseBreadcrumb';

interface UserBreadcrumbsProps {
  t_currentPageLabel: string;

  user?: App.Data.User;
}

export const UserBreadcrumbs: FC<UserBreadcrumbsProps> = ({ t_currentPageLabel, user }) => {
  const { t } = useLaravelReactI18n();

  return (
    <div className="navpath mb-3 hidden sm:block">
      <BaseBreadcrumb>
        <BaseBreadcrumbList>
          <BaseBreadcrumbItem aria-label={t('All Users')}>
            <BaseBreadcrumbLink href="/userList.php">{t('All Users')}</BaseBreadcrumbLink>
          </BaseBreadcrumbItem>

          {user ? (
            <>
              <BaseBreadcrumbSeparator />

              <BaseBreadcrumbItem aria-label={user.displayName}>
                <BaseBreadcrumbLink href={route('user.show', { user: user.displayName })}>
                  {user.displayName}
                </BaseBreadcrumbLink>
              </BaseBreadcrumbItem>
            </>
          ) : null}

          <BaseBreadcrumbSeparator />

          <BaseBreadcrumbItem aria-label={t_currentPageLabel}>
            <BaseBreadcrumbPage>{t_currentPageLabel}</BaseBreadcrumbPage>
          </BaseBreadcrumbItem>
        </BaseBreadcrumbList>
      </BaseBreadcrumb>
    </div>
  );
};
