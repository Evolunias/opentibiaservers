import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-europe-server');
}

export default function ZezeniaOnlineEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-europe-server" />;
}
