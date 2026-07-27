import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-server-brazil');
}

export default function XanteriaPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-server-brazil" />;
}
