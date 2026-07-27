import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-launch-mexico');
}

export default function WithTrainersLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-launch-mexico" />;
}
