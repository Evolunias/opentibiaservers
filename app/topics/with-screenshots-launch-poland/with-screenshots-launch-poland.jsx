import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-launch-poland');
}

export default function WithScreenshotsLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-launch-poland" />;
}
