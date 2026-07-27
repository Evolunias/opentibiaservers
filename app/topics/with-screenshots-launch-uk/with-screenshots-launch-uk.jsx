import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-launch-uk');
}

export default function WithScreenshotsLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-launch-uk" />;
}
