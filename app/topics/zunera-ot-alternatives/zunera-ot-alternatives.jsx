import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-alternatives');
}

export default function ZuneraOtAlternativesKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-alternatives" />;
}
