import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-launch-brazil');
}

export default function WithTrainersLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-launch-brazil" />;
}
