import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-12-custom-map-server');
}

export default function ZezeniaOnline12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-12-custom-map-server" />;
}
