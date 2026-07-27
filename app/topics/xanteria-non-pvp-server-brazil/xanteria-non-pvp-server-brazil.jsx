import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-non-pvp-server-brazil');
}

export default function XanteriaNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-non-pvp-server-brazil" />;
}
