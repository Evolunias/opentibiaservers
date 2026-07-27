import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-12-real-map-server');
}

export default function ZezeniaOnline12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-12-real-map-server" />;
}
