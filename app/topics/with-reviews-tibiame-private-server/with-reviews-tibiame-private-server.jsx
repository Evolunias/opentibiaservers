import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-private-server');
}

export default function WithReviewsTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-private-server" />;
}
