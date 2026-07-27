import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-servers-uk');
}

export default function ZezeniaOnlineCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-servers-uk" />;
}
