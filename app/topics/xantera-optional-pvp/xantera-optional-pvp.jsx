import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-optional-pvp');
}

export default function XanteraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="xantera-optional-pvp" />;
}
