import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-server');
}

export default function WithReviewsTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-server" />;
}
