import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-europe-servers');
}

export default function ZezeniaOnlineEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-europe-servers" />;
}
