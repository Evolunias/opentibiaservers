import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-servers-poland');
}

export default function ZezeniaOnlineCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-servers-poland" />;
}
