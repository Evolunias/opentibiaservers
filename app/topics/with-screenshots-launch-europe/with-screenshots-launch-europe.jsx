import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-launch-europe');
}

export default function WithScreenshotsLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-launch-europe" />;
}
