import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-launch-usa');
}

export default function WithTrainersLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-launch-usa" />;
}
