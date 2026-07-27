import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-launch-germany');
}

export default function WithTrainersLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-launch-germany" />;
}
