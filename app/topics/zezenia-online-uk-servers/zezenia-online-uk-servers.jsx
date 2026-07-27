import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-uk-servers');
}

export default function ZezeniaOnlineUkServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-uk-servers" />;
}
