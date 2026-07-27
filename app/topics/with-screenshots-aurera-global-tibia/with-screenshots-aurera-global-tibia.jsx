import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-aurera-global-tibia');
}

export default function WithScreenshotsAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-aurera-global-tibia" />;
}
