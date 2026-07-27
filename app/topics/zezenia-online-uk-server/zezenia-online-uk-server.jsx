import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-uk-server');
}

export default function ZezeniaOnlineUkServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-uk-server" />;
}
