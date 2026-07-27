import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-launch-europe');
}

export default function WithTrainersLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-launch-europe" />;
}
