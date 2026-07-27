import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-north-america-servers');
}

export default function ZezeniaOnlineNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-north-america-servers" />;
}
