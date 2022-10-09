import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '新闻头条后台管理系统',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '后台管理系统',
          title: '后台管理系统',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
