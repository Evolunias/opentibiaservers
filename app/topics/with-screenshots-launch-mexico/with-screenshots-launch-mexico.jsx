import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-launch-mexico');
}

export default function WithScreenshotsLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-launch-mexico" />;
}
