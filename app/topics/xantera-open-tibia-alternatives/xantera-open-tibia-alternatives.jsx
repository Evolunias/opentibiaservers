import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-open-tibia-alternatives');
}

export default function XanteraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="xantera-open-tibia-alternatives" />;
}
