import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-launch-north-america');
}

export default function WithTrainersLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-launch-north-america" />;
}
