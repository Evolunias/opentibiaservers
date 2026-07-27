import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-open-pvp');
}

export default function XanteraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="xantera-open-pvp" />;
}
