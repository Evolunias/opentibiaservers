import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-launch-canada');
}

export default function WithScreenshotsLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-launch-canada" />;
}
