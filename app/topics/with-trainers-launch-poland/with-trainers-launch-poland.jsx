import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-launch-poland');
}

export default function WithTrainersLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-launch-poland" />;
}
