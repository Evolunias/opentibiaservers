import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-launch-brazil');
}

export default function WithScreenshotsLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-launch-brazil" />;
}
