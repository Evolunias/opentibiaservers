import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-server-europe');
}

export default function ZezeniaOnlineCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-server-europe" />;
}
