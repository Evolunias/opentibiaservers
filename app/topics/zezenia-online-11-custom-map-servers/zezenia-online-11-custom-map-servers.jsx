import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-11-custom-map-servers');
}

export default function ZezeniaOnline11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-11-custom-map-servers" />;
}
