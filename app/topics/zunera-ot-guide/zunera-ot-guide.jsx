import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-guide');
}

export default function ZuneraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-guide" />;
}
