import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-nto-star-server');
}

export default function WithTrainersNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-nto-star-server" />;
}
