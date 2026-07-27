import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-server-mexico');
}

export default function XanteriaPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-server-mexico" />;
}
