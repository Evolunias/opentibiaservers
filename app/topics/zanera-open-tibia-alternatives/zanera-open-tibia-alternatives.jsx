import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-open-tibia-alternatives');
}

export default function ZaneraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="zanera-open-tibia-alternatives" />;
}
