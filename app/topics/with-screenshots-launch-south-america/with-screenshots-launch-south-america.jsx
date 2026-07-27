import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-launch-south-america');
}

export default function WithScreenshotsLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-launch-south-america" />;
}
