import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-launch-latin-america');
}

export default function WithScreenshotsLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-launch-latin-america" />;
}
