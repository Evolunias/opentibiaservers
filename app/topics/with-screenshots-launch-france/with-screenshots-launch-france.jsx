import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-launch-france');
}

export default function WithScreenshotsLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-launch-france" />;
}
