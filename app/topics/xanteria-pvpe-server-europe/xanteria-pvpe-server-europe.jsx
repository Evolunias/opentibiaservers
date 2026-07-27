import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvpe-server-europe');
}

export default function XanteriaPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvpe-server-europe" />;
}
