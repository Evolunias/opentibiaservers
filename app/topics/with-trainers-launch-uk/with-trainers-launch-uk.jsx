import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-launch-uk');
}

export default function WithTrainersLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-launch-uk" />;
}
