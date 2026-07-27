import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp');
}

export default function XanteriaPvpKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp" />;
}
