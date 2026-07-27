import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-real-map-servers-poland');
}

export default function ZezeniaOnlineRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-real-map-servers-poland" />;
}
