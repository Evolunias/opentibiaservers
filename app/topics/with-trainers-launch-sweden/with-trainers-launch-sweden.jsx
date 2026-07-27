import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-launch-sweden');
}

export default function WithTrainersLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-launch-sweden" />;
}
