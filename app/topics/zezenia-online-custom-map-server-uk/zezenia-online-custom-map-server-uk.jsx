import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-server-uk');
}

export default function ZezeniaOnlineCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-server-uk" />;
}
