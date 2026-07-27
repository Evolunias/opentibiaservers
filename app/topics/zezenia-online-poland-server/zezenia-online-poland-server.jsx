import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-poland-server');
}

export default function ZezeniaOnlinePolandServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-poland-server" />;
}
