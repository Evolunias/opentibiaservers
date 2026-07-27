import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-review');
}

export default function ZuneraOtReviewKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-review" />;
}
