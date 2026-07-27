import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-15-custom-map-servers');
}

export default function ZezeniaOnline15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-15-custom-map-servers" />;
}
