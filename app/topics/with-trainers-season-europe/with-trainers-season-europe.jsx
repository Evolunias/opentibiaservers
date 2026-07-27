import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-season-europe');
}

export default function WithTrainersSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-season-europe" />;
}
