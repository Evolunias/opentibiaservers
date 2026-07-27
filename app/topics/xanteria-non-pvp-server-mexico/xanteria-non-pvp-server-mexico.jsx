import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-non-pvp-server-mexico');
}

export default function XanteriaNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-non-pvp-server-mexico" />;
}
