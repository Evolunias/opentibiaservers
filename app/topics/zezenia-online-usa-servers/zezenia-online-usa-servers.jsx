import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-usa-servers');
}

export default function ZezeniaOnlineUsaServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-usa-servers" />;
}
