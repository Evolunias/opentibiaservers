import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-servers-europe');
}

export default function ZezeniaOnlineCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-servers-europe" />;
}
