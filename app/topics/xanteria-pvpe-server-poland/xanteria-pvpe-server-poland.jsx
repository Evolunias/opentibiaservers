import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvpe-server-poland');
}

export default function XanteriaPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvpe-server-poland" />;
}
