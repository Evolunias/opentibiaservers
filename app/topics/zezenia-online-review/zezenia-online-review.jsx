import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-review');
}

export default function ZezeniaOnlineReviewKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-review" />;
}
