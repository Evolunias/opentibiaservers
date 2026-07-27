import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-launch-north-america');
}

export default function WithScreenshotsLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-launch-north-america" />;
}
