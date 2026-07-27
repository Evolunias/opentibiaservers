import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-launch-canada');
}

export default function WithTrainersLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-launch-canada" />;
}
