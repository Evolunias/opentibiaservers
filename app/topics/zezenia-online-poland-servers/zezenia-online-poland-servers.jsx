import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-poland-servers');
}

export default function ZezeniaOnlinePolandServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-poland-servers" />;
}
