import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-12-custom-map-servers');
}

export default function ZezeniaOnline12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-12-custom-map-servers" />;
}
