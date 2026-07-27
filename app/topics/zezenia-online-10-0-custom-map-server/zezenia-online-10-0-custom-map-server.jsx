import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-10-0-custom-map-server');
}

export default function ZezeniaOnline100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-10-0-custom-map-server" />;
}
